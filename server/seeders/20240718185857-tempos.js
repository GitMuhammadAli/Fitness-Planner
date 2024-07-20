'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tempos', [
      { tempo: '3 0 2', createdAt: new Date(), updatedAt: new Date() },
      { tempo: '2 2 2', createdAt: new Date(), updatedAt: new Date() },
      { tempo: '4 1 1', createdAt: new Date(), updatedAt: new Date() },
      { tempo: '5 3 1', createdAt: new Date(), updatedAt: new Date() },
      { tempo: '1 0 1', createdAt: new Date(), updatedAt: new Date() },
      { tempo: '3 2 1', createdAt: new Date(), updatedAt: new Date() },
      { tempo: '2 1 1', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tempos', null, {});
  }
};
