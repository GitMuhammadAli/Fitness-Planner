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
        type: Sequelize.STRING, // Adjust length if needed
        allowNull: false
      },
      type: {
        type: Sequelize.STRING(1000), // Adjust length if needed
        allowNull: false
      },
      meta: {
        type: Sequelize.JSON, // JSON type for structured data
        allowNull: true
      },
      variants: {
        type: Sequelize.JSON, // JSON type for structured data
        allowNull: true
      },
      unit: {
        type: Sequelize.STRING(1000), // Adjust length if needed
        allowNull: true
      },
      muscles: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Handle arrays of strings
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(1000), // Adjust length if needed
        allowNull: true
      },
      substitutes: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Handle arrays of strings
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
    await queryInterface.dropTable('Exercises');
  }
};
