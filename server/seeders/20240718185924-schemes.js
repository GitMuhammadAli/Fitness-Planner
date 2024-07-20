'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Schemes', [
      {
        name: 'strength_power',
        repRangeMin: 3,
        repRangeMax: 8,
        ratioWork: 3,
        ratioRest: 2,
        restMin: 120,
        restMax: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'growth_hypertrophy',
        repRangeMin: 8,
        repRangeMax: 15,
        ratioWork: 2,
        ratioRest: 3,
        restMin: 90,
        restMax: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cardiovascular_endurance',
        repRangeMin: 12,
        repRangeMax: 30,
        ratioWork: 2,
        ratioRest: 4,
        restMin: 60,
        restMax: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Schemes', null, {});
  }
};
