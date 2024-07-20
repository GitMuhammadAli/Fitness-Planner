'use strict';

const WORKOUTS = {
  individual: ['biceps', 'triceps', 'chest', 'back', 'shoulders', 'quads', 'hamstrings', 'glutes', 'calves', 'abs'],
  bro_split: {
    push: ['triceps', 'chest', 'shoulders'],
    pull: ['back', 'shoulders', 'biceps'],
    legs: ['glutes', 'calves', 'hamstrings', 'quads']
  },
  bodybuilder_split: {
    chest: ['chest'],
    back: ['back'],
    shoulders: ['shoulders'],
    legs: ['glutes', 'quads', 'hamstrings', 'calves'],
    arms: ['biceps', 'triceps'],
    abs: ['abs']
  },
  upper_lower: {
    upper: ['triceps', 'biceps', 'shoulders', 'chest', 'back'],
    lower: ['quads', 'calves', 'hamstrings', 'glutes']
  }
};

const workoutsData = [];

for (const [category, types] of Object.entries(WORKOUTS)) {
  if (Array.isArray(types)) {
    types.forEach(muscle => {
      workoutsData.push({
        category,
        type: 'individual',
        muscle_group: muscle,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
  } else {
    for (const [type, muscles] of Object.entries(types)) {
      muscles.forEach(muscle => {
        workoutsData.push({
          category,
          type,
          muscle_group: muscle,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
    }
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Workouts', workoutsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Workouts', null, {});
  }
};
