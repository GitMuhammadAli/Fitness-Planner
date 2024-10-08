'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schemes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      repRangeMin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      repRangeMax: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ratioWork: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ratioRest: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      restMin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      restMax: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schemes');
  }
};
