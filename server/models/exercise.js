'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: {
    type: DataTypes.STRING(1000), // Define the maximum length of the string
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(1000), // Define the maximum length of the string
    allowNull: false
  },
  meta: {
    type: DataTypes.JSON, // Store JSON data
    allowNull: true
  },
  variants: {
    type: DataTypes.JSON, // Store JSON data
    allowNull: true
  },
  unit: {
    type: DataTypes.STRING(1000), // Define the maximum length of the string
    allowNull: true
  },
  muscles: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(1000), // Define the maximum length of the string
    allowNull: true
  },
  substitutes: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
  }, 
  
  
  {});
  return Exercise;
};
