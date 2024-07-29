'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Exercises', {
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
      type: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      meta: {
        type: Sequelize.JSONB,  // Changed to JSONB
        allowNull: true
      },
      variants: {
        type: Sequelize.JSONB,  // Changed to JSONB
        allowNull: true
      },
      unit: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      muscles: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      substitutes: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      workouts: {
        type: Sequelize.JSONB,  // Changed to JSONB
        allowNull: true
      },
      schemes: {
        type: Sequelize.JSONB,  // Changed to JSONB
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')  // Added default value
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')  // Added default value
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Exercises');
  }
};
