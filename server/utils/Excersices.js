const exercises = {
  barbell_bench_press: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      incline:
        "With a bench inclined between 30 and 45 degrees, hold the bar directly above your chest.",
      flat: "Perform this exercise on a horizontal bench.",
      decline:
        "Perform this exercise on a bench inclined at a -15 degree angle, your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench, so to prevent yourself from slipping.",
      underhand:
        "Lying on a flat bench, grab the bar with a reversed underhand grip, so that you are now holding the barbell thumbs pointing outwards. Be sure to reduce the weight when performing this variation of the exercise.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Ensure your scapula are retracted when performing the bench press, arms 2 palm widths wider than shoulder width. Lower the bar with your elbows flared at a 45 degree angle from your torso, touching the bar down to your chest at your nipple line.",
    substitutes: ["pushups", "dumbbell bench press", "floor press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  prayer_press: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      incline:
        "Press your hands away from you at a 45 degree angle above horizontal.",
      horizontal:
        "Press your hands away from you at a 45 degree angle from horizontal.",
      decline:
        "Press your hands away from you at a -30 degree angle below horizontal.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Place a light, weighted plate between the palms of your hands (as if you were praying), and while keeping your scapula retracted, press your hands together while pushing the plate away from you.",
    substitutes: ["palm prayer press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  pec_dec: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      high: "Place the seat height so that your hands meet in the same horizontal plane as your mouth/chin.",
      standard:
        "Place the seat height so that your hands meet in the same horizontal plane as your nipple height.",
      decline:
        "Place the seat height as high as possible so that the hand holds are below nipple height while sitting.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Ensure your scapula is retracted and try to puff out your chest while performing this exercise. Make sure you bring the handles together so they touch, and the range of motion should be no more than 90 degrees either side.",
    substitutes: ["cable chest fly"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  standing_dumbbell_incline_fly: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells", "bands"],
    },
    unit: "reps",
    muscles: ["chest", "shoulders"],
    description:
      "Standing with a dumbbell in either hand, palms facing forwards and chest puffed out, raise one dumbbell up and across your body until your palm is facing the ceiling and your hand has crossed your body. Lower slowly and repeat on the other side.",
    substitutes: ["inclined cable fly"],
    workouts: {
      individual: ["chest", "shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  standing_plate_raises: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["chest", "shoulders"],
    description:
      "Standing with a weighted plate gripped either side, start with the plate down in front of your hips, and then raise the plate up in front of you to shoulder height, pausing at that height for a moment, before lowering the weight back down. Puff your chest up towards the ceiling while performing this exercise.",
    substitutes: ["standing dumbbell incline fly"],
    workouts: {
      individual: ["chest", "shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  cable_fly: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      incline:
        "To target your upper chest, ensure the cable fixing is low, close to the ground. Your hands will move from low at your sides, to high, up in front of your face.",
      horizontal:
        "Ensure the cable fixing is at approximately chest height while performing this exercise.",
      decline:
        "Set the cable fixing to the highest setting, so your hands move from high to low (as they come together in front of you throughout the motion).",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "This exercise can be performed from high to low, or low to high. Using the handles and with your arms mostly straight, bring the two handles together in front of you, and then slowly release backwards.",
    substitutes: ["Inclined dumbbell fly"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  pushup: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      incline:
        "To perform the incline pushup, ensure your feet are atop a slightly elevated surface, while your hands are on the ground.",
      military:
        "Ensure your hands are in the same vertical plane as your chest and shoulders.",
      decline:
        "To perform a decline pushup, place your hands slightly further underneath you, so that you are leaning over your hands and they are closer towards the line of your waist, that your shoulders.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "In a plank position, with hands slightly further than shoulder width apart (and thumbs around nipple height), slowly lower your chest to the ground, keeping elbows flared to the side, and then push back up to the starting position.",
    substitutes: ["bench press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  // decline_pushup: {
  //     type: 'accessory',
  //     meta: {
  //         environment: 'gymhome',
  //         level: [0, 1, 2],
  //         equipment: []
  //     },
  //     variants: {
  //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
  //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
  //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
  //     },
  //     unit: 'reps', //vs duration
  //     muscles: ['chest'],
  //     description: 'With your feet elevated by 1ft or 30cm, begin in a plank position with hands slightly wider than shoulder width inline with your nipples. Lower until your thumbs touch your nipples and then press back up.',
  //     substitutes: ['pushup', 'dips']
  // },
  landmine_press: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: ["landmine", "barbell"],
    },
    variants: {
      unilateral:
        "Stand with the end of a landmine bar in one hand with your thumb near to your shoulder and your body at a 45-degree angle to the plane of the bar. Press the bar up and across your chest until your arm is extended, then lower it back down.",
      two_handed:
        "Hold the end of the landmine bar with both hands, the bar pointing directly away from your body, and press the barbell forwards and up until your hands are straight. Then slowly lower it back towards your body.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Pin the end of a barbell into a landmine attachment or a corner. Load any weight on the opposite end of the barbell. Stand behind the loaded end of the barbell, lift the end so it starts off at chest height. Press the bar up and across your chest.",
    substitutes: ["prayer press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  chest_press: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: ["chest press machine"],
    },
    variants: {
      high: "Adjust the seat so your hands move in the same horizontal plane as your mouth/chin.",
      standard:
        "Adjust the seat so your hands move in the same horizontal plane as your nipple height.",
      decline:
        "Adjust the seat as high as possible so the hand grips are below nipple height while sitting.",
      unilateral:
        "Adjust the seat so the handles are approximately mid-chest level. Turn your torso 30 to 45 degrees towards the side you are about to press with. Press the handle across your body. Repeat on both sides.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Begin with your chest puffed and your scapula down and retracted. Press the handles out until your arms are straight. Then slowly release backwards.",
    substitutes: ["bench press", "pushup"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  // smith_machine_incline_press: {
  //     type: 'compound',
  //     meta: {
  //         environment: 'gymhome',
  //         level: [0, 1, 2],
  //         equipment: []
  //     },
  //     variants: {
  //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
  //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
  //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
  //     },
  //     unit: 'reps', //vs duration
  //     muscles: ['chest'],
  //     description: 'Lying under a smith machine, bench at a 30 to 45 degree angle, ensure that the bar is aligned with your nipple height when it contacts your body. Keep elbows flared to a maximum of 45 degrees from your torso, hands slightly wider than shoulder width.',
  //     substitutes: ['inclined dumbbell press', 'inclined pushup']
  // },
  smith_machine_press: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: ["smith machine"],
    },
    variants: {
      incline:
        "Perform this exercise on a bench inclined between 30 and 45 degrees. Hold the bar directly above your chest.",
      flat: "Perform this exercise on a flat, horizontal bench with the bar directly above your chest.",
      decline:
        "Perform this exercise on a bench declined at a -15 degree angle, with your head at the lower end. Hook your legs over the higher end of the bench to prevent slipping.",
      underhand:
        "Perform this exercise on a flat bench with an underhand grip (palms facing towards you) on the bar. Reduce the weight to accommodate this variation.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Set up the Smith machine so that the bar is aligned with your nipple height when you lie under it. Keep your elbows flared out to a maximum of 45 degrees from your torso and grip the bar slightly wider than shoulder-width.",
    substitutes: ["bench press", "pushup", "dumbbell press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  // unilateral_chest_press: {
  //     type: 'accessory',
  //     meta: {
  //         environment: 'gym',
  //         level: [0, 1, 2],
  //         equipment: []
  //     },
  //     variants: {
  //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
  //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
  //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
  //     },
  //     unit: 'reps', //vs duration
  //     muscles: ['chest'],
  //     description: 'Adjust the seat so the handles are approximately mid-chest level. Turn your torse 30 to 45 degrees the side you are about to press with. Press the handle across your body until your arm is straight and then release backwards. Repeat on both sides.',
  //     substitutes: ['prayer press', 'cable fly']
  // },
  unilateral_cable_press: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      incline:
        "To target your upper chest, ensure the cable fixing is low, close to the ground. Your hand will move from low at your side, to high, up in front of your face. Use an underhand grip for this movement.",
      horizontal:
        "Ensure the cable fixing is at approximately chest height while performing this exercise. Hold the cable in a neutral or overhand grip.",
      decline:
        "Set the cable fixing to the highest setting, so your hand moves from high to low throughout the motion.",
    },
    unit: "reps", //vs duration
    muscles: ["chest"],
    description:
      "Align your body at a 30 to 45 degree plane to the cable. Press the cable handle across your body until your elbow is straight and slowly release backwards. Ensure elbows are tucked during the exercise.",
    substitutes: ["unilateral chest press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  cable_crossover_press: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      incline:
        "To target your upper chest, ensure the cable fixing is low, close to the ground. Your hands will move from low at your sides, to high, up in front of your face.",
      horizontal:
        "Ensure the cable fixing is at approximately chest height while performing this exercise.",
      decline:
        "Set the cable fixing to the highest setting, so your hands move from high to low as they come together in front of you throughout the motion.",
    },
    unit: "reps", //vs duration
    muscles: ["chest"],
    description:
      "As if you were doing a pushup or bench press, press the handles together and then cross them over in front of you, alternating the crossover of your hands with each rep.",
    substitutes: ["cable fly", "unilateral chest press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  scapula_pushup: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", //vs duration
    muscles: ["chest"],
    description:
      "While in a plank or kneeling plank position, with your hands aligned at approximately eye height on the ground, press yourself away from the ground. Then allow your body to come back down to the ground, keeping your elbows straight and the inside of your elbow facing forward at all times.",
    substitutes: ["pushup"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  dumbbell_chest_fly: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    variants: {
      incline:
        "With a bench inclined between 30 and 45 degrees, hold the dumbbells directly above your chest.",
      flat: "Perform this exercise on a horizontal bench.",
      decline:
        "Perform this exercise on a bench inclined at a -15 degree angle, with your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench to prevent slipping.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Holding a dumbbell in each hand directly above your chest, slowly lower the dumbbells to either side of your body while keeping your arms mostly straight, palms to the ceiling. Ensure the weights do not drop lower than the height of your body.",
    substitutes: ["cable fly"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  dumbbell_floor_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Lying on your back with your scapula retracted, and the dumbbells starting over your chest, lower each side back down with elbows flared to a 45 degree angle until your elbows touch the ground. Then press back up.",
    substitutes: ["dumbbell bench press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  barbell_floor_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Lying with your scapula retracted, and the barbell starting over your chest, lower the barbell down towards nipple level, elbows flared to a 45 degree angle until your elbows touch the ground. Then press back up.",
    substitutes: ["barbell bench press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  dumbbell_pullover: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["chest", "back"],
    description:
      "Lying holding a single dumbbell as if it were a goblet directly above your chest, slowly track the dumbbell back over your head, keeping your elbows tucked. Track back as far as comfortable behind your head, and then return to the starting position.",
    substitutes: ["Inclined dumbbell fly"],
    workouts: {
      individual: ["chest", "back"],
      bro_split: ["push", "pull"],
      bodybuilder_split: ["chest", "back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  pullup: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards you.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and back, and then pull your body up until your chin is above bar height. Then return to a dead hang. Use an assisted pullup machine if required.",
    substitutes: ["lat pulldown"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  lat_pulldown: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards you.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and back, and then pull the bar down until it touches your chest. Then return to a dead hang position.",
    substitutes: ["pullup", "kneeling lat pushdown"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  barbell_floor_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Lying with your scapula retracted, and the barbell starting over your chest, lower the barbell down towards nipple level, elbows flared to a 45 degree angle until your elbows touch the ground. Then press back up.",
    substitutes: ["barbell bench press"],
    workouts: {
      individual: ["chest"],
      bro_split: ["push"],
      bodybuilder_split: ["chest"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  dumbbell_pullover: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["chest", "back"],
    description:
      "Lying holding a single dumbbell as if it were a goblet directly above your chest, slowly track the dumbbell back over your head, keeping your elbows tucked. Track back as far as comfortable behind your head, and then return to the starting position.",
    substitutes: ["inclined dumbbell fly"],
    workouts: {
      individual: ["chest", "back"],
      bro_split: ["push", "pull"],
      bodybuilder_split: ["chest", "back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  pullup: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards you.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and back, and then pull your body up until your chin is above bar height. Then return to a dead hang. Use an assisted pullup machine if required.",
    substitutes: ["lat pulldown"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
  },
  lat_pulldown: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards you.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and back, and then pull the bar down until it touches your chest. Then return to a dead hang position.",
    substitutes: ["pullup", "kneeling lat pushdown"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
  },
  straight_arm_pushdown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Begin with the bar approximately eye level and your arms extended mostly straight out in front of you, press the bar down (maintaining straight arms until your hands or the bar touches your lower mid-section. Press your chest out and bring your hips through/between your arms (thrust). Release back to origin.",
    substitutes: ["pullup", "kneeling lat pulldown"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
  },
  kneeling_lat_pulldown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards you.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing away from you.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and back, and then pull the bar down until it touches your chest. Ensure you look at the ceiling throughout the duration of the movement. Then return to a dead hang position.",
    substitutes: ["pullup", "kneeling lat pushdown"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
  },
  one_arm_pulldown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Seated in the lat pulldown machine, begin by retracting your shoulder and scapula down and backwards. Then pull the handle down until your thumb can touch your shoulder. Repeat on both sides.",
    substitutes: ["pullup", "kneeling lat pushdown"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
  },
  barbell_bentover_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing away from your feet.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards your feet.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Begin standing, with your hands slightly wider than shoulder width apart holding the bar. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows back behind you to complete the row.",
    substitutes: ["seated row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  dumbbell_bentover_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbell"],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing away from your feet.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards your feet.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Begin standing, with your hands either side of your body holding the dumbbells. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows back behind you to complete the row.",
    substitutes: ["seated row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  pendlay_row: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing away from your feet.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards your feet.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Begin with the bar on the ground, with your hands slightly wider than shoulder width apart. Hold your core tight, and pull your elbows back behind you until the bar touches your mid-chest. Slowly release back down to the ground and then repeat.",
    substitutes: ["seated row", "barbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  bodyweight_row: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing away from your feet.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards your feet.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Find a bar or table at approximately chest to weight height, and hang underneath it with your legs extending out underneath the support. Row your chest to the bar, and slowly lower yourself back down. It's preferable that your body remain rigid and straight during the execution of the exercise.",
    substitutes: ["seated row", "barbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  tbar_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "With the bar between your legs, your legs slightly bent, and with your torso hinged forward at the hips by approximately 45 degrees, row your elbows backwards until the weights touch your chest. Sit your bum back a bit to counter-balance the weight during this exercise.",
    substitutes: ["seated row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  seated_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards the ceiling.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards the ground.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "With your back vertical, row your elbows back and imagine pulling your hands to your hips on either side of your body. Ensure to minimise torso and hip hinging during the movement. Row low to grow.",
    substitutes: ["barbell row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
  },
  unilateral_seated_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing the ceiling.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing towards your body.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards the ground.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "With the handle attachment, row your elbow back and pull your hand and the handle to your hip, and then release forwards.",
    substitutes: ["seated row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  cable_row: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards the ceiling.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards the ground.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "With the cable at any height, bend your knees and lean back against the weights. Maintain your body in a stationary position, and row your elbows back, keeping your forearms neutral to the movement. Hold your core strong and tight.",
    substitutes: ["seated row", "tbar row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  unilateral_dumbbell_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Leaning forward at a 45 degree angle, with your weight supported through one arm pressing on a sturdy surface, hang the dumbbell from your other arm. Ensure the leg on the same side as your supporting arm is forward. Row your elbow back and your hand to your hip. Repeat on both sides.",
    substitutes: ["unilateral seated row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  chest_supported_dumbbell_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "With your chest supported on a bench angled to a 30 to 45 degree incline, hand your arms either side with dumbbells in each. Row your elbows back with your hands on a trajectory towards your lower waist. Slowly release the weights back forward.",
    substitutes: ["seated row", "barbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  machine_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing the ceiling.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing towards your body.",
      overhand:
        "Perform this movement with a pronated grip, palms facing towards the ground.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Adjust the seat height so your hands retract back to a lower torso height. Row your elbows back.",
    substitutes: ["seated row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  machine_lat_pulldown: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards you.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing away from you.",
    },
    unit: "reps", // vs duration
    muscles: ["back"],
    description:
      "Ensure you look at the ceiling while performing this exercise. Begin by retracting your scapula down and back, and then pull the machine bar down until your thumbs can touch your chest.",
    substitutes: ["lat pulldown", "pullup"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  smith_machine_row: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing forwards.",
      overhand:
        "Perform this movement with a pronated grip, palms facing backwards.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Begin standing, with your hands slightly wider than shoulder width apart holding the bar. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows back behind you to complete the row.",
    substitutes: ["seated row", "dumbbell row"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  seated_dumbbell_overhead_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With dumbbells in each hand, begin with the weights in-line with your ears and press them directly up above your head. Lower down until your thumbs can touch your ears. Puff your chest out during this exercise.",
    substitutes: ["barbell overhead press", "arnold press"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  barbell_overhead_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Standing with the bar starting at chin height and hands slightly wider than shoulder width, press the bar up and as it moves above head height, press your head forward between your arms. Squeeze your bum throughout the duration of the exercise.",
    substitutes: ["barbell overhead press", "arnold press"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  dumbbell_lateral_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With dumbbells in each hand, pretend you're a bird trying to flap your arms, and raise the weights up either side of your body. Ensure your elbows are always at a higher height than the weights and your wrists. Slowly lower down to each side.",
    substitutes: ["unilateral cable raise", "face pulls"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  dumbbell_front_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With dumbbells in each hand down by your side, one at a time, raise the dumbbell out in front of you until it is at eye height, keeping your arm straight. Then slowly lower back down and repeat on the other side.",
    substitutes: [
      "unilateral cable raise",
      "face pulls",
      "cable_rope_front_raise",
    ],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  cable_rope_front_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With a rope handle in each hand (the cable pinned as low as possible and the cable itself, between your legs), raise the rope handles out in front of you until it is at eye height, keeping your arms straight. Then slowly lower back down.",
    substitutes: ["dumbbell front raise", "face pulls"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  unilateral_cable_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With the cable on the lowest adjustment, hold the vertical bar with one hand and lean out from the cable machine by approximately 30 degrees. Hold the handle in the other hand, and raise the handle (leading with your elbow) up to shoulder height.",
    substitutes: ["dumbbell lateral raise", "face pulls"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  cable_rope_face_pulls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Using the rope cable attachment, adjust the cable height so the pulley is just above head height. Hold the handles with your thumbs at the end of the rope, pointing towards you. Pull the rope towards your forehead, with your hands approximately ear-width apart.",
    substitutes: ["dumbbell rear delt fly", "reverse pec deck"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["push"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  machine_lat_pulldown: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand:
        "Perform this movement with a supinated grip, palms facing towards you.",
      neutral_grip:
        "Perform this movement with a neutral grip, palms facing each other.",
      overhand:
        "Perform this movement with a pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Ensure you look at the ceiling while performing this exercise. Begin by retracting your scapula down and back, and then pull the machine bar down until your thumbs can touch your chest.",
    substitutes: ["lat pulldown", "pullup"],
    workouts: {
      individual: ["back"],
      bro_split: ["pull"],
      bodybuilder_split: ["back"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  cable_push_aparts: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Grip the carabiner or handles with your pinky fingers facing backwards. Imagine walking through a forest full of vines and spread your arms apart. The cable should be pinned just above head height.",
    substitutes: ["unilateral cable raise", "cable rope face pulls"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  bentover_dumbbell_push_aparts: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "While seated and bent forward with your head to your knees, hold light dumbbells at your sides. Raise the dumbbells out to the sides, leading with your pinkies until they align with your shoulders and thumbs point down.",
    substitutes: ["unilateral cable raise", "cable rope face pulls"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [8, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  chest_supported_dumbbell_face_pulls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lie on a 30 to 45-degree inclined bench with dumbbells in each hand. Pull the dumbbells to either side of your ears, leading the movement with your elbows.",
    substitutes: ["unilateral cable raise", "cable push aparts"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  chest_supported_barbell_face_pulls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lie on a 30 to 45-degree inclined bench with a barbell gripped twice shoulder-width. Pull the barbell back until it aligns with your ears, leading the movement with your elbows.",
    substitutes: ["dumbbell face pulls", "cable push aparts"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  arnold_dumbbell_press: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Seated on a bench with back support, hold dumbbells in front of you at eye level with palms facing your face. Open your shoulders and move your elbows out to the sides until the dumbbells are next to your ears, then press them overhead.",
    substitutes: ["barbell overhead press", "dumbbell overhead press"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  lyings_ys: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lie face down on the ground with arms extended above your head, elbows tucked against your ears. Raise your hands and arms off the ground while pulling your thumbs back and squeezing your scapula together.",
    substitutes: ["face pulls"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [12, 20],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  lying_ts: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lie face down with arms extended out to the sides, elbows and hands in line with your shoulders. Rotate your hands so palms face up and thumbs point to the ceiling. Raise your arms off the ground, pulling your thumbs back and squeezing your scapula together.",
    substitutes: ["supermans"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [12, 20],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  lying_ws: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lie face down with arms extended to the sides, elbows and hands in line with your shoulders. Bend your elbows to 90 degrees, palms facing your head, and thumbs pointing to the ceiling. Raise your arms off the ground, pulling your thumbs back and squeezing your scapula together.",
    substitutes: ["plank side stars"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [12, 20],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },
  plank_side_stars: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", //vs duration
    muscles: ["shoulders"],
    description:
      "While in a plank position, extend one arm straight out to the side and then alternate with the other arm, keeping your core engaged and hips stable throughout the movement.",
    substitutes: ["lying ts"],
    workouts: {
      individual: ["shoulders"],
      bro_split: ["shoulders"],
      bodybuilder_split: ["shoulders"],
      upper_lower: ["upper"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 20],
        ratio: [3, 2],
        rest: [60, 45],
      },
      growth_hypertrophy: {
        repRanges: [15, 30],
        ratio: [2, 3],
        rest: [45, 30],
      },
    },
  },

  back_squats: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps", //vs duration
    muscles: ["quads"],
    description:
      "Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, and slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes. Rest the bar on the backs of your shoulders, behind your head.",
    substitutes: ["front squats", "leg press"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [4, 8],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  bodyweight_squat: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", //vs duration
    muscles: ["quads"],
    description:
      "Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward. Slowly lower your body down until your thighs are parallel with the ground, keeping your core tight and knees tracking in the direction of your toes.",
    substitutes: ["front squats", "leg press"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [15, 25],
        ratio: [3, 2],
        rest: [60, 45],
      },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [45, 30],
      },
    },
  },

  front_squats: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps", //vs duration
    muscles: ["quads"],
    description:
      "Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward. Slowly lower your body down until your thighs are parallel with the ground, keeping your core tight and knees tracking in the direction of your toes. Hold the bar on your shoulders, crossing your arms in front of you (elbows above the bar).",
    substitutes: ["back squats", "leg press"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [4, 8],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  goblet_squats: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps", //vs duration
    muscles: ["quads"],
    description:
      "Elevate your heels on a plate approximately 2 inches or 5 cm high. Keep your feet slightly narrower than shoulder width, and holding the dumbbell like a goblet at shoulder height, squat down, keeping your back as erect as possible.",
    substitutes: ["front squats", "leg press"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  box_squats: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", //vs duration
    muscles: ["quads"],
    description:
      "With a barbell on your shoulders, bodyweight, or holding a dumbbell, position yourself standing in front of, and facing away from, a box or chair. Place your feet shoulder-width apart and squat down, as if sitting back onto the chair. Only lightly let your bum touch the chair before standing back up.",
    substitutes: ["front squats", "leg press"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  bulgarian_split_squats: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads", "glutes"],
    description:
      "Body weight or with dumbbells in each hand, lunge forward, elevating your rear leg up approximately 20 to 30 cm (1 ft) above the ground. Keep your weight over your front leg and lunge your body down until your front thigh is parallel with the ground.",
    substitutes: ["lunges", "leg press"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [8, 12],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  lunges: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads", "glutes"],
    description:
      "Continuously lunge forward, slowly dropping your rear knee to touch the ground with each subsequent lunge. Ensure your body weight stays predominantly over your front leg.",
    substitutes: ["front squats", "bulgarian split squats"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 20],
        ratio: [3, 2],
        rest: [60, 45],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [45, 30],
      },
    },
  },

  legpress: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      wide_stance:
        "Place your feet a fair bit wider than shoulder width apart and vertically/centrally on the face of feet placement area.",
      neutral_stance:
        "Place your feet shoulder width apart and vertically/centrally on the face of feet placement area.",
      narrow_stance:
        "Place your feet 10 cm (3 in) apart and vertically/centrally on the face of feet placement area.",
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "Slowly lower the weight down until your knees are at a 90-degree angle. Then push the weight back up, ensuring not to lock-out your legs at the top.",
    substitutes: ["front squats", "back squats"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  quad_extension: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "On a quad extension machine, straighten your legs against the resistance of the machine. Face your toes in different directions to preferentially engage different parts of your quad muscles.",
    substitutes: ["goblet squats", "leg press"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  step_ups: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads", "glutes"],
    description:
      "Without jumping, step up onto an elevated surface. The key is to slowly lower yourself back down on one leg without falling.",
    substitutes: ["lunges", "front squats"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 20],
        ratio: [3, 2],
        rest: [60, 45],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [45, 30],
      },
    },
  },

  wall_sits: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "With your back against a wall and your knees making an angle of approximately 90 degrees, hold the wall sit as long as possible, without sinking down to the ground or holding yourself with your arms.",
    substitutes: ["front squats", "goblet squats"],
    workouts: {
      individual: ["legs"],
      bro_split: ["legs"],
      bodybuilder_split: ["legs"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [30, 60],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [60, 90],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  romanian_deadlifts: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      wide_stance:
        "Place your feet one and a half times as wide as shoulder width.",
      neutral_stance: "Place your feet shoulder-width distance apart.",
      narrow_stance:
        "Place your feet right beside each other so that they are touching.",
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Stand holding a barbell or dumbbells hanging at your waist, hands shoulder-width apart. With a slight bend in your knees, hinge at your hips, slightly sitting back while tilting your torso forward. Keeping your back straight, run the barbell or dumbbells back down the length of your legs (as if touching).",
    substitutes: ["dumbbell rdls"],
    workouts: {
      individual: ["hamstrings"],
      bro_split: ["hamstrings"],
      bodybuilder_split: ["hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 10],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [10, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },
  hamstring_back_extensions: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings", "glutes"],
    description:
      "On the back extension machine, lock your feet in place and while lowering your torso down over the front of the machine, resist the motion by trying to curl your heels backwards to your bum, against the foot stop.",
    substitutes: ["dumbbell rdls", "seated hamstring curl"],
    workouts: {
      individual: ["hamstrings"],
      bro_split: ["hamstrings"],
      bodybuilder_split: ["hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [8, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  unilateral_dumbbell_rdls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings", "glutes"],
    description:
      "Placing one foot forward of the other, lean your weight onto the front foot and track the dumbbells up and down said forward leg. Ensure you are maintaining a straight back while performing this exercise.",
    substitutes: ["barbell rdls", "hamstring back extensions"],
    workouts: {
      individual: ["hamstrings"],
      bro_split: ["hamstrings"],
      bodybuilder_split: ["hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [8, 12],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  seated_hamstring_curl: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "With your knees locked into place, try to pull your heels back as far as you can towards your bum.",
    substitutes: ["dumbbell rdls", "lying hamstring curls"],
    workouts: {
      individual: ["hamstrings"],
      bro_split: ["hamstrings"],
      bodybuilder_split: ["hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  tbar_rdls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "With the bar between your legs, and your feet placed slightly in front of your center of gravity, slowly sit back keeping your legs mostly straight, until the weight touches the ground. Maintain a straight back during the execution of this exercise.",
    substitutes: ["dumbbell rdls", "unilateral dumbbell rdls"],
    workouts: {
      individual: ["hamstrings"],
      bro_split: ["hamstrings"],
      bodybuilder_split: ["hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 10],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [10, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  lying_machine_hamstring_curls: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Lying on the machine, curl your heels back to your bum, and then slowly release.",
    substitutes: ["tbar rdls", "seated hamstring curl"],
    workouts: {
      individual: ["hamstrings"],
      bro_split: ["hamstrings"],
      bodybuilder_split: ["hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  lying_dumbbell_hamstring_curls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbell"],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Lying face down on the ground, hold a dumbbell up in the air between your feet, knees bent. Slowly lower the dumbbell down towards the ground, and after touching the ground, curl the dumbbell back up, heels pulling back towards your bum and up towards the ceiling.",
    substitutes: ["tbar rdls", "seated hamstring curl"],
    workouts: {
      individual: ["hamstrings"],
      bro_split: ["hamstrings"],
      bodybuilder_split: ["hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [8, 12],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  cable_leg_adduction: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "Standing adjacent to the cable machine, with the cable at the lowest placement, place the handle around your outer foot and adduct that foot out horizontally, away from the cable machine.",
    substitutes: ["cable kickbacks"],
    workouts: {
      individual: ["glutes"],
      bro_split: ["glutes"],
      bodybuilder_split: ["glutes"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  cable_kickbacks: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "Facing the cable machine, place the cable machine at the lowest placement, and with the handle wrapped around your ankle, kick your heel backwards as far as you can.",
    substitutes: ["cable leg adduction"],
    workouts: {
      individual: ["glutes"],
      bro_split: ["glutes"],
      bodybuilder_split: ["glutes"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },

  hip_thrusts: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "With your back resting on an elevated surface, or on the ground, and your knees bent to approximately 90 degrees, thrust your hips forward and tuck your chin. Without moving your heels, try to pull them back towards your bum throughout the motion.",
    substitutes: ["unilateral hip thrusts"],
    workouts: {
      individual: ["glutes"],
      bro_split: ["glutes"],
      bodybuilder_split: ["glutes"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  unilateral_hip_thrusts: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "With your back resting on an elevated surface, or on the ground, and one knee bent to approximately 90 degrees (the other leg extended), thrust your hips forward and tuck your chin. Without moving your heel, try to pull them back towards your bum throughout the motion.",
    substitutes: ["cable kickbacks"],
    workouts: {
      individual: ["glutes"],
      bro_split: ["glutes"],
      bodybuilder_split: ["glutes"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 12],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  deadlift: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["back", "hamstrings"],
    description:
      "Standing with the bar over your feet, grip it overhand shoulder-width apart, while ensuring your back remains straight throughout the entire exercise. Begin the lift by straightening your legs, dragging the bar up your shins, and as soon as the bar is above knee height, straighten your torso and lean back to lift the bar off the ground. In reverse, you start standing tall, and with a micro bend in your knees, hinge at the hips (maintaining a straight back) until the bar is over your knees, at which point your hips stop hinging and your knees start bending until the bar touches the ground. This exercise may also be done with a sumo stance.",
    substitutes: ["romanian deadlifts"],
    workouts: {
      individual: ["back", "hamstrings"],
      bro_split: ["back", "hamstrings"],
      bodybuilder_split: ["back", "hamstrings"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [6, 10],
        ratio: [3, 2],
        rest: [120, 90],
      },
      growth_hypertrophy: {
        repRanges: [10, 15],
        ratio: [2, 3],
        rest: [90, 60],
      },
    },
  },

  donkey_kicks: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "You're a donkey, on your four limbs. Your owner is particularly annoying, standing directly behind you. With one leg, kick backwards and up as much as you can to teach them a lesson.",
    substitutes: ["cable kickbacks"],
    workouts: {
      individual: ["glutes"],
      bro_split: ["glutes"],
      bodybuilder_split: ["glutes"],
      upper_lower: ["lower"],
    },
    schemes: {
      strength_power: {
        repRanges: [10, 15],
        ratio: [3, 2],
        rest: [90, 60],
      },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [60, 45],
      },
    },
  },
  good_girls: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "On the good girls machine we learn to keep our legs closed. Seated, you want to bring your knees together.",
    substitutes: ["cable kickbacks"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["glutes"],
      bro_split: { legs: ["glutes"] },
      bodybuilder_split: { legs: ["glutes"] },
      upper_lower: { lower: ["glutes"] },
    },
  },
  fire_hydrants: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "As if your weren't already a dog, hop down on all fours, with your hands underneath your pectorals. Now let your natural instincts take control, raising one leg out to the side as if to take care of business on the neighborhood firehydrant. Keep all other three points of contact station throughout this movement.",
    substitutes: ["froggy pumps"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["glutes"],
      bro_split: { legs: ["glutes"] },
      bodybuilder_split: { legs: ["glutes"] },
      upper_lower: { lower: ["glutes"] },
    },
  },
  froggy_pumps: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "Lying flat on your back, drag your feet back towards your bum until your knees are bent at a 90 degree angle. With your feet still firm on the ground and touching, drop your knees to either side of your body. Now that you are in position, push down through the outsides of your feet so your bum and lower back lift off the ground. Pause while elevated, and then lower back down.",
    substitutes: ["cable kickbacks", "fire hydrants"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["glutes"],
      bro_split: { legs: ["glutes"] },
      bodybuilder_split: { legs: ["glutes"] },
      upper_lower: { lower: ["glutes"] },
    },
  },
  bad_girls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "On the bad girls machine, or with a band around your knees while sitting on a chair, we reject conservatism by strengthening our abduction muscles, pushing our knees apart.",
    substitutes: ["cable kickbacks"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["glutes"],
      bro_split: { legs: ["glutes"] },
      bodybuilder_split: { legs: ["glutes"] },
      upper_lower: { lower: ["glutes"] },
    },
  },
  seated_calf_raises: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      toes_in:
        "Face your toes 30 degrees inwards from forwards while completing this movement.",
      standard:
        "Ensure your feet are directioned forward and shoulder width apart.",
      toes_out:
        "Face your toes 30 degrees outwards from forwards while completing this movement.",
    },
    unit: "reps",
    muscles: ["calves"],
    description:
      "Seated with a restaint above your knees, you want to plantar flex your toes, pushing your knees away from the ground.",
    substitutes: ["standing calf raises"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["calves"],
      bro_split: { legs: ["calves"] },
      bodybuilder_split: { legs: ["calves"] },
      upper_lower: { lower: ["calves"] },
    },
  },
  standing_calf_raises: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      toes_in:
        "Face your toes 30 degrees inwards from forwards while completing this movement.",
      standard:
        "Ensure your feet are directioned forward and shoulder width apart.",
      toes_out:
        "Face your toes 30 degrees outwards from forwards while completing this movement.",
    },
    unit: "reps",
    muscles: ["calves"],
    description:
      "Standing with weight loaded either in your hands or on your shoulders, you want to plantar flex your toes.",
    substitutes: ["seated calf raises"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["calves"],
      bro_split: { legs: ["calves"] },
      bodybuilder_split: { legs: ["calves"] },
      upper_lower: { lower: ["calves"] },
    },
  },
  walking_calf_raises: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["calves"],
    description:
      "With weights in each hand, walk 50 paces where on each step you want to step up on your tippy toes to the maximal extreme.",
    substitutes: ["standing calf raises"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["calves"],
      bro_split: { legs: ["calves"] },
      bodybuilder_split: { legs: ["calves"] },
      upper_lower: { lower: ["calves"] },
    },
  },
  unilateral_calf_raises: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["calves"],
    description:
      "Holding a weighted object in one hand, place one foot on an elevated surface. With the other foot free, step off the surface and stand up on the elevated surface.",
    substitutes: ["standing calf raises"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["calves"],
      bro_split: { legs: ["calves"] },
      bodybuilder_split: { legs: ["calves"] },
      upper_lower: { lower: ["calves"] },
    },
  },
  monster_walks: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["band"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "With a band around your knees, squat to a 60 degree knee bend, and crab walk side to side, then dinosaur walk front to back.",
    substitutes: ["bad girls"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["glutes"],
      bro_split: { legs: ["glutes"] },
      bodybuilder_split: { legs: ["glutes"] },
      upper_lower: { lower: ["glutes"] },
    },
  },
  dumbbell_curls: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells", "bands"],
    },
    variants: {
      hammer:
        "Perform this exercise with a neutral grip, palms facing your body throughout the movement.",
      supinated:
        "Maintain a supinated grip on the dumbbell throughout the motion - palms facing forwards through to upwards.",
      alternating:
        "Begin the curl with dumbbells in a neutral grip, finishing with your palm supinated and facing the ceiling.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Perform this exercise seated or standing with dumbbells in either hand by your sides. You can perform both hands at the same time or alternating. Curl each dumbbell upwards from your side until your elbows are fully bent, and the dumbbell is raised. Minimise swinging or shoulder usage throughout the movement.",
    substitutes: ["hammer curls"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { arms: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },

  // dumbbell_curls: {
  //     type: 'compound',
  //     meta: {
  //         environment: 'gymhome',
  //         level: [0, 1, 2],
  //         equipment: []
  //     },
  //     variants: {
  //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
  //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
  //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
  //     },
  //     unit: 'reps', //vs duration
  //     muscles: ['biceps'],
  //     description: 'Seated or standing with dumbbells in either hand by your side, begin the curl with dumbbells in a neutral grip, finishing with you palm supinated and facing the ceiling.',
  //     substitutes: ['dumbell supinated curls']
  // },
  // dumbbell_hammer_curls: {
  //     type: 'compound',
  //     meta: {
  //         environment: 'gymhome',
  //         level: [0, 1, 2],
  //         equipment: []
  //     },
  //     variants: {
  //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
  //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
  //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
  //     },
  //     unit: 'reps', //vs duration
  //     muscles: ['biceps'],
  //     description: 'Maintaining a neutral grip, curl the dumbbells in an alternating fashion.',
  //     substitutes: ['dumbbell_curls']
  // },
  rope_curls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Using the rope cable attachment at the lowest elevation, hold the ends of the rope attachment with a neutral grip and curl them inwards and upwards.",
    substitutes: ["dumbbell hammer curls"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { pull: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },
  spider_curl: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    variants: {
      hammer:
        "Perform this exercise with a neutral grip, palms facing your body throughout the movement.",
      supinated:
        "Maintain a supinated grip on the dumbbell throughout the motion - palms facing forwards through to upwards.",
      alternating:
        "Begin the curl with dumbbells in a neutral grip, finishing with your palm supinated and facing the ceiling.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "With your chest supported on an inclined bench and dumbbells in either hand, perform an alternating curl with a supinated wrist at the peak of the motion. Curl the dumbbells slightly inwards and under the bench.",
    substitutes: ["barbell curls"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { pull: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },
  barbell_curls: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      wide_grip:
        "Perform this exercise with hands spaced one and a half times shoulder width apart.",
      narrow_grip:
        "Perform this exercise with hands only a palm's width apart.",
      standard: "Perform this exercise with hands spaced shoulder width apart.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Hold the barbell with a supinated grip and reduce shoulder engagement and swinging throughout the curl.",
    substitutes: ["dumbbell curls"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { pull: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },
  drag_curls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell", "dumbbells"],
    },
    variants: {
      dumbbell: "Perform this exercise with dumbbells.",
      barbell:
        "Perform this exercise with a barbell, and space your hands slightly wider than shoulder width apart.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Holding the weight with a supinated grip, drag the weights up an imaginary line in the same plane as your torso. It is a similar movement to a row with the major difference that you are standing mostly upright, only very slightly bent forwards at the hips.",
    substitutes: ["dumbbell curls"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { pull: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },
  unilateral_hammer_cable_curl: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Holding the carabiner of the cable machine on the lowest elevation, in one hand, curl upwards and inwards so your hand finishes in the middle of your chest.",
    substitutes: ["hammer curl"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { pull: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },
  preacher_curls: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells", "barbell"],
    },
    variants: {
      underhand:
        "Hold a barbell or easy-curl bar with an underhand grip, palms facing the ceiling.",
      neutral_grip:
        "Perform this exercise with dumbbells in each hand, with a neutral grip, palms facing horizontally.",
      overhand:
        "Hold a barbell or easy-curl bar with an overhand grip, palms facing the ground.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Perform this curl with your elbows supported on a surface angled 45 degrees down and away from you, or on the preacher curl machine. It is good practice to micro-pause at the bottom of the eccentric portion of the movement.",
    substitutes: ["barbell curl"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { pull: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },
  cable_bar_curls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Using the bar cable attachment at the lowest elevation, hold each end of the bar with a supinated grip (palms facing up) and curl the weight up, minimizing shoulder engagement and swinging.",
    substitutes: ["dumbbell hammer curls"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["biceps"],
      bro_split: { pull: ["biceps"] },
      bodybuilder_split: { arms: ["biceps"] },
      upper_lower: { upper: ["biceps"] },
    },
  },
  tricep_rope_pushdown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["triceps"],
    description:
      "Attach a rope to the high pulley of a cable machine. Grasp the ends of the rope with a neutral grip and push the rope downwards until your arms are fully extended, then slowly return to the start position.",
    substitutes: ["overhead tricep extensions"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  tricep_bar_pushdown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Adjust the cable to maximum elevation. Keeping your elbows just in front of your sides, straighten your arms, pushing the weight down. Try to keep your elbows stationary in space throughout the motion.",
    substitutes: ["rope cable pushdown"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  unilateral_cable_pushdown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      overhand:
        "Use a handle attachment and press the weight down with your palm facing the ground.",
      neutral: "Hold the cable attachment with a neutral hammer grip.",
      underhand:
        "Use a handle attachment with a supinated grip, palm facing the ceiling, press/pull the weight down.",
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Adjust the cable to maximum elevation. Keeping your elbow just in front of your hip, straighten your arm, pushing the weight down. Try to keep your elbow stationary in space throughout the motion.",
    substitutes: ["rope cable pushdown"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  skull_crushers: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Lie either on a flat or on a slightly inclined surface with a barbell directly above your skull. Starting with your arms straight, lower the weight down either to your forehead or behind your head and then press it back up. Vary your grip width to what is most comfortable for you and keep your elbows tucked throughout the movement.",
    substitutes: ["face press"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  face_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "In an incline plank position with your hands pressing on something mid-chest height (hands closer than shoulder width), keep your elbows tucked and slowly lower your body/face towards the surface. Then press back up. Your elbows should track directly downwards, not flaring to either side.",
    substitutes: ["overhead skull crushers"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  overhead_skull_crusher: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell", "dumbbell", "bands"],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Performed with either a barbell, dumbbell, or cable attachment, start with the weight down behind your head while sitting vertically (elbows overhead). Straighten your arms overhead, extending the weight up above your head.",
    substitutes: ["rope cable pushdown"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  tricep_dip: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Perform with a bench behind you and your legs out in front of you, your body supported by your hands on the bench. Slowly lower your bum down in front of the bench, keeping your elbows tucked and tracking back behind you, and then press back up.",
    substitutes: ["rope cable pushdown"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  dumbbell_skull_crushers: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Lie either flat or on a slight incline with heavy dumbbells in each hand directly above your skull. Starting with your arms straight, lower the weight down either side of your forehead and then press it back up. Begin with palms facing the ceiling or a neutral grip beside your ears.",
    substitutes: ["face press"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  diamond_pushups: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Position yourself in a pushup position, but adjust your hands, bringing them inwards, so that your fingers point inwards and the tips of your fingers are touching, forming a diamond shape. Complete the diamond by connecting your thumbs at the bottom. Perform the pushup, keeping your elbows tucked in beside your body.",
    substitutes: ["face press"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  unilateral_cable_push_aways: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps", // vs duration
    muscles: ["triceps"],
    description:
      "Attach a handle to a cable machine and set it to the lowest setting. Stand with the machine to one side, grasp the handle with one hand, and press the weight away from your body until your arm is fully extended. Slowly return to the start position. Perform on both sides.",
    substitutes: ["face press"],
    schemes: {
      strength_power: { repRanges: [3, 8], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { repRanges: [8, 15], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["triceps"],
      bro_split: { push: ["triceps"] },
      bodybuilder_split: { arms: ["triceps"] },
      upper_lower: { upper: ["triceps"] },
    },
  },
  jack_knives: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Sitting on your heiny in a V shape with your knees bent and feet elevated, your hands stabilizing your body either side and slightly behind your bum, extend your legs out keeping them elevated and lean back slightly. Then bring your knees back in to your chest. Maintain a tucked core throughout this movement.",
    substitutes: ["crunches"],
    schemes: {
      strength_power: { repRanges: [8, 15], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [20, 40],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  crunches: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Lying flat on the ground with your knees bent at right angles, crunch your abs and imagine you're trying to squash a bug under your lower back deep into the ground.",
    substitutes: ["dead_bugs", "bicycle_crunches"],
    schemes: {
      strength_power: { repRanges: [10, 20], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [25, 40],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  l_sits: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Sitting with your legs straight out in front of you, or hanging, hold your legs up and your core tucked in an isometric hold. Legs should be at minimum parallel to the ground.",
    substitutes: ["banana_hold", "plank"],
    schemes: {
      strength_power: { repRanges: [5, 12], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [12, 20],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [15, 30],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  russian_twists: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Sitting on your dump-truck booty with your legs bent at 90 degrees in front of you and your feet on the ground, lean back about 30 degrees and twist your torso and shoulders, touching the ground on either side of your bum with both hands, and then repeat, both hands to the other side.",
    substitutes: ["jack_knives"],
    schemes: {
      strength_power: { repRanges: [15, 30], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [30, 50],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [40, 60],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  plank: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Be the plank. Make sure your hips are tucked, your bum squeezed, your core tight, flat as a pancake.",
    substitutes: ["banana_hold", "side_plank"],
    schemes: {
      strength_power: { repRanges: [30, 60], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [60, 90],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [90, 120],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  side_plank: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Similar to the traditional plank, you want to support your weight between your feet and one elbow as you hold your body looking perpendicular to the ground. Straight as a plank.",
    substitutes: ["banana_hold", "plank"],
    schemes: {
      strength_power: { repRanges: [20, 45], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [45, 60],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [60, 90],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  crunch_toes_touches: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Lying flat on the ground with your knees bent 90 degrees and feet flat on the ground, crunch your body up, and proceed to touch your left hand to your left foot and then your right hand to your right foot. Keep your head at the same level, just crunching your obliques on either side.",
    substitutes: ["russian_twists"],
    schemes: {
      strength_power: { repRanges: [10, 20], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [30, 45],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  dead_bugs: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Did you see that deadly bird flying overhead? Quickly, play dead, lie flat on your back and point your arms and legs directly up towards the sky. Now slowly lower one arm and the opposite leg down to the ground, keeping a tucked and tight core. Then raise them up, and repeat on with the remaining opposite limbs.",
    substitutes: ["crunches", "lying_leg_lifts"],
    schemes: {
      strength_power: { repRanges: [10, 20], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [30, 45],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  lying_leg_lifts: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Recline, relax, lie flat on your back, ready for a res... to raise your legs up to the sky and then back down to the ground. Legs straight, core tucked, if you can fit your hands under your lower back at any part of the movement then bend your knees a bit more.",
    substitutes: ["jack_knives", "hanging_knee_raises"],
    schemes: {
      strength_power: { repRanges: [10, 20], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [30, 45],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  hanging_knee_raises: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Like the monkey you are, hang from the bar, you hairy gorilla. Now raise your knees up, tuck your core, and hopefully you can touch your forehead to your knees. Release slowly down and try to reduce swinging momentum.",
    substitutes: ["lying_leg_lifts", "v_crunches"],
    schemes: {
      strength_power: { repRanges: [8, 15], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [15, 25],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [20, 35],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },

  mountain_climbers: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "duration", // vs reps
    muscles: ["abs"],
    description:
      "In a push-up position, bring one knee up to touch one elbow, and then resume push-up position. Repeat on the other side. Avoid letting your lower back and bum sag during the motion.",
    substitutes: ["plank", "kneeling_cable_crunch"],
    schemes: {
      strength_power: { duration: [30, 60], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { duration: [60, 90], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        duration: [90, 120],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  kneeling_cable_crunch: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps", // vs duration
    muscles: ["abs"],
    description:
      "You have sinned and now you must beg for forgiveness. On your knees, hold the cable rope extension behind your head with both hands (ensure it is at its maximum height). Crunch your face down and kiss the ground, then slowly release back up.",
    substitutes: ["jack_knives", "dead_bugs"],
    schemes: {
      strength_power: { repRanges: [10, 20], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [20, 30],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [30, 40],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  bicycle_crunches: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps", // vs duration
    muscles: ["abs"],
    description:
      "Lying flat on your back, bend your knees at 90 degrees and raise your bent legs above your body so your knees point to the ceiling. Now crunch one elbow up to touch the opposite knee, while extending your other leg out straight. Return to the initial position, and then repeat on the other side.",
    substitutes: ["dead_bugs", "hanging_knee_raises"],
    schemes: {
      strength_power: { repRanges: [15, 25], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: {
        repRanges: [25, 35],
        ratio: [2, 3],
        rest: [90, 60],
      },
      cardiovascular_endurance: {
        repRanges: [35, 50],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
  banana_hold: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "duration", // vs reps
    muscles: ["abs"],
    description:
      "Lying flat on your back, pretend that you are a ripe and firm banana. Curve your whole body, crunching your core and lower back flat and firm down into the ground below you, and raise your pointed arms off the ground, pointing out behind your head, and your legs off the ground at a 30-degree angle. Shiver and quiver as you acknowledge your failing core muscles.",
    substitutes: ["plank", "leg_lifts"],
    schemes: {
      strength_power: { duration: [20, 40], ratio: [3, 2], rest: [120, 60] },
      growth_hypertrophy: { duration: [40, 60], ratio: [2, 3], rest: [90, 60] },
      cardiovascular_endurance: {
        duration: [60, 90],
        ratio: [2, 4],
        rest: [60, 45],
      },
    },
    workouts: {
      individual: ["abs"],
      bro_split: { core: ["abs"] },
      bodybuilder_split: { core: ["abs"] },
      upper_lower: { core: ["abs"] },
    },
  },
};

module.exports = exercises;
