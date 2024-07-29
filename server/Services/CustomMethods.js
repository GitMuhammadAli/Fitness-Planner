const { Workout, Scheme , Tempo , Exercise } = require("../models");
const { Op, Sequelize } = require('sequelize');

exports.getWorkoutsCategory = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("category")), "category"],
    ],
    order: [["category", "ASC"]],
  });
};

exports.getWorkoutsindividualtype = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("muscle_group")), "muscle_group"]
    ],
    where: {
      type: 'individual',
    },
    order: [["muscle_group", "ASC"]],
  });
};




exports.getBroSplitWorkoutstype = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("muscle_group")), "muscle_group"]
    ],
    where: {
      category: 'bro_split',
    },
    order: [["muscle_group", "ASC"]],
  });
};

exports.getBodybuilderSplitWorkoutstype = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("muscle_group")), "muscle_group"]
    ],
    where: {
      category: 'bodybuilder_split',
    },
    order: [["muscle_group", "ASC"]],
  });
};

exports.getUpperLowerWorkoutstype = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("type")), "type"]
    ],
    where: {
      category: 'upper_lower',
    },
    order: [["type", "ASC"]],
  });
};




exports.getWorkoutSchemes = async () => {
  return await Scheme.findAll({
    attributes: [ [
      Sequelize.fn("DISTINCT",Sequelize.col("name")),
      "name"
    ]],
  });
};











exports.getWorkouts = async (workoutCategory, muscles, schemeName) => {
  try {
    let workout = [];

    if (workoutCategory === 'upper_lower') {
      workout = ['upper_lower'];
      return workout;
    }

    const flattenWorkouts = (workouts) => {
      const flatSet = new Set();
      const processObject = (obj) => {
        for (const key in obj) {
          if (Array.isArray(obj[key])) {
            obj[key].forEach(item => flatSet.add(item));
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            processObject(obj[key]);
          }
        }
      };
      processObject(workouts);
      return Array.from(flatSet);
    };

    const exercises = await Exercise.findAll({
      attributes: [
        'name',
        'type',
        'variants',
        'unit',
        'muscles',
        'description',
        'substitutes',
        [Sequelize.json(`workouts.${workoutCategory}`), 'workouts'],
        [Sequelize.json(`schemes.${schemeName}.repRanges`), 'repRanges'],
        [Sequelize.json(`schemes.${schemeName}.ratio`), 'ratio'],
        [Sequelize.json(`schemes.${schemeName}.rest`), 'rest']
      ],
      logging: console.log
    });

    const safeResults = exercises.map(exercise => {
      try {
        const data = exercise.dataValues;
        return {
          name: data.name,
          type: data.type,
          variants: data.variants,
          unit: data.unit,
          muscles: data.muscles,
          description: data.description,
          substitutes: data.substitutes,
          workouts: data.workouts ? flattenWorkouts(data.workouts) : [],
          repRanges: parseJsonOrDefault(data.repRanges, [8, 12]),
          ratio: parseJsonOrDefault(data.ratio, [3, 2]),
          rest: parseJsonOrDefault(data.rest, [60, 60])
        };
      } catch (err) {
        console.error("Error processing exercise data:", err);
        return null;
      }
    }).filter(exercise => exercise !== null);

    if (safeResults.length === 0) {
      throw new Error("No exercises found matching the criteria.");
    }

    const groupedExercises = muscles.reduce((acc, muscle) => {
      acc[muscle] = safeResults.filter(e => e.muscles.includes(muscle));
      return acc;
    }, {});

    const totalExercises = 10; 
    const exercisesPerGroup = Math.floor(totalExercises / muscles.length);
    const remainingExercises = totalExercises % muscles.length;

    const getRandomExercises = (exerciseList, count) => {
      const selected = [];
      for (let i = 0; i < count && exerciseList.length > 0; i++) {
        const index = Math.floor(Math.random() * exerciseList.length);
        selected.push(exerciseList.splice(index, 1)[0]);
      }
      return selected;
    };

    muscles.forEach(muscle => {
      const muscleExercises = groupedExercises[muscle] || [];
      workout.push(...getRandomExercises(muscleExercises, exercisesPerGroup));
    });

    for (let i = 0; i < remainingExercises; i++) {
      const muscle = muscles[i % muscles.length];
      const muscleExercises = groupedExercises[muscle] || [];
      workout.push(...getRandomExercises(muscleExercises, 1));
    }

    return workout;

  } catch (error) {
    console.error("Error generating workout:", error);
    throw error;
  }
};

const parseJsonOrDefault = (jsonString, defaultValue) => {
  try {
    return jsonString ? JSON.parse(jsonString) : defaultValue;
  } catch {
    return defaultValue;
  }
};




// exports.getWorkouts = async (workoutCategory, muscles, schemeName) => {
//   try {
//     // Fetch exercises from the database
//     const exercises = await Exercise.findAll({
//       where: Sequelize.where(
//         Sequelize.fn('EXISTS',
//           Sequelize.literal(`
//             SELECT 1
//             FROM json_array_elements_text(workouts->'${workoutCategory}') AS element
//             WHERE element IN (${muscles.map(m => `'${m}'`).join(',')})
//           `)
//         ),
//         true
//       ),
//       attributes: [
//         'name',
//         'type',
//         'variants',
//         'unit',
//         'muscles',
//         'description',
//         'substitutes',
//         [Sequelize.json(`workouts.${workoutCategory}`), 'workouts'],
//         [Sequelize.literal(`COALESCE((schemes->'${schemeName}'->>'repRanges')::text, 'null')`), 'repRanges'],
//         [Sequelize.literal(`COALESCE((schemes->'${schemeName}'->>'ratio')::text, 'null')`), 'ratio'],
//         [Sequelize.literal(`COALESCE((schemes->'${schemeName}'->>'rest')::text, 'null')`), 'rest']
//       ],
//       logging: console.log
//     });

//     // Process the fetched exercises
//     const safeResults = exercises.map(exercise => {
//       try {
//         return {
//           name: exercise.name,
//           type: exercise.type,
//           variants: exercise.variants,
//           unit: exercise.unit,
//           muscles: exercise.muscles,
//           description: exercise.description,
//           substitutes: exercise.substitutes,
//           workouts: exercise.workouts,
//           repRanges: exercise.repRanges ? JSON.parse(exercise.repRanges) : [8, 12],
//           ratio: exercise.ratio ? JSON.parse(exercise.ratio) : [3, 2],
//           rest: exercise.rest ? JSON.parse(exercise.rest) : [60, 60]
//         };
//       } catch (err) {
//         console.error("Error processing exercise data:", err);
//         return null;
//       }
//     }).filter(exercise => exercise !== null);

//     if (safeResults.length === 0) {
//       throw new Error("No exercises found matching the criteria.");
//     }

//     // Extract scheme ratio and generate sets
//     const schemeRatio = safeResults[0]?.ratio || [3, 2];
//     const sets = schemeRatio.flatMap((count, index) =>
//       Array(parseInt(count)).fill(index === 0 ? "compound" : "accessory")
//     );

//     // Initialize variables
//     const workout = [];
//     const musclesCopy = [...muscles];
//     let totalSets = 0; // Track total sets to adjust workout intensity

//     // Helper function to get a random number of exercises
//     const getRandomExerciseCount = (baseCount, totalSets) => {
//       // Simulate fatigue by reducing the number of exercises as total sets increase
//       const fatigueFactor = Math.min(totalSets / 10, 1); // Simulate fatigue effect
//       const maxCount = Math.max(1, baseCount - Math.floor(fatigueFactor * baseCount));
//       return Math.floor(Math.random() * maxCount) + 1; // Ensure at least one exercise
//     };

//     // Iterate over each set type and generate workout exercises
//     sets.forEach(setType => {
//       const availableExercises = safeResults.filter(e => e.type === setType);

//       if (availableExercises.length === 0) {
//         console.warn(`No exercises available for type: ${setType}`);
//         return;
//       }

//       const targetMuscle = musclesCopy.length > 0 ? musclesCopy.shift() : muscles[Math.floor(Math.random() * muscles.length)];
//       const muscleExercises = availableExercises.filter(e => e.muscles.includes(targetMuscle));

//       // Get a random number of exercises for the current set type
//       const numExercises = getRandomExerciseCount(5, totalSets); // Base count of 5

//       // Pick random exercises, considering fatigue and variety
//       for (let i = 0; i < numExercises; i++) {
//         const exerciseList = muscleExercises.length > 0 ? muscleExercises : availableExercises;
//         const randomExercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];

//         if (!randomExercise) {
//           console.warn(`No suitable exercise found for type: ${setType}`);
//           continue;
//         }

//         const [minRep, maxRep] = randomExercise.repRanges || [8, 12];
//         const reps = Math.floor(Math.random() * (maxRep - minRep + 1)) + minRep;

//         const rest = randomExercise.rest ? randomExercise.rest[setType === "compound" ? 0 : 1] : 60;

//         workout.push({
//           name: randomExercise.name,
//           type: randomExercise.type,
//           muscles: randomExercise.muscles,
//           description: randomExercise.description,
//           reps,
//           rest
//         });

//         totalSets++; // Increment total sets
//       }
//     });

//     return workout;

//   } catch (error) {
//     console.error("Error generating workout:", error);
//     throw error;
//   }
// };