// "use strict";

// const exercises = require("../utils/Excersices");

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     if (!exercises || typeof exercises !== "object") {
//       throw new Error("Exercises data is not properly defined");
//     }

//     const exercisesData = Object.entries(exercises)
//       .map(([name, data]) => {
//         if (!data || typeof data !== "object") {
//           console.warn(`Warning: Exercise "${name}" has invalid data structure`);
//           return null;
//         }

//         return {
//           name: name,
//           type: data.type || "",
//           meta: JSON.stringify({
//             environment: data.meta?.environment || "",
//             level: Array.isArray(data.meta?.level) ? data.meta.level : [],
//             equipment: Array.isArray(data.meta?.equipment) ? data.meta.equipment : [],
//           }),
//           variants: JSON.stringify(data.variants || {}),
//           unit: data.unit || "",
//           muscles: Array.isArray(data.muscles) ? data.muscles : [],
//           description: data.description || "",
//           substitutes: Array.isArray(data.substitutes) ? data.substitutes : [],
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         };
//       })
//       .filter(Boolean);

//     console.log(exercisesData); // Debugging: Check data format

//     await queryInterface.bulkInsert("Exercises", exercisesData, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete("Exercises", null, {});
//   },
// };







// "use strict";

// const exercises = require("../utils/Excersices");

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     if (!exercises || typeof exercises !== "object") {
//       throw new Error("Exercises data is not properly defined");
//     }

//     const exercisesData = Object.entries(exercises)
//       .map(([name, data]) => {
//         if (!data || typeof data !== "object") {
//           console.warn(`Warning: Exercise "${name}" has invalid data structure`);
//           return null;
//         }

//         return {
//           name: name,
//           type: data.type || "",
//           meta: JSON.stringify({
//             environment: data.meta?.environment || "",
//             level: Array.isArray(data.meta?.level) ? data.meta.level : [],
//             equipment: Array.isArray(data.meta?.equipment) ? data.meta.equipment : [],
//           }),
//           variants: JSON.stringify(data.variants || {}),
//           unit: data.unit || "",
//           muscles: Array.isArray(data.muscles) ? data.muscles : [],
//           description: data.description || "",
//           substitutes: Array.isArray(data.substitutes) ? data.substitutes : [],
//           workouts: JSON.stringify(data.workouts || {}),
//           schemes: JSON.stringify(data.schemes || {}),
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         };
//       })
//       .filter(Boolean);

//     await queryInterface.bulkInsert("Exercises", exercisesData, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete("Exercises", null, {});
//   },
// };




"use strict";

const exercises = require("../utils/Excersices");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exercisesData = Object.entries(exercises)
      .map(([name, data]) => {
        if (!data || typeof data !== "object") {
          console.warn(`Warning: Exercise "${name}" has invalid data structure`);
          return null;
        }

        return {
          name: name,
          type: data.type || "",
          meta: data.meta ? JSON.stringify(data.meta) : null,
          variants: data.variants ? JSON.stringify(data.variants) : null,
          unit: data.unit || "",
          muscles: data.muscles ? data.muscles : [],
          description: data.description || "",
          substitutes: data.substitutes ? data.substitutes : [],
          workouts: data.workouts ? JSON.stringify(data.workouts) : null,
          schemes: data.schemes ? JSON.stringify(data.schemes) : null,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      })
      .filter(Boolean);

    await queryInterface.bulkInsert("Exercises", exercisesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Exercises", null, {});
  },
};
