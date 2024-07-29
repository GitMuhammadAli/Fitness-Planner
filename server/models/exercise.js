'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    meta: {
      type: DataTypes.JSON,
      allowNull: true
    },
    variants: {
      type: DataTypes.JSON,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    muscles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    substitutes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    workouts: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    schemes: {
      type: DataTypes.JSONB, 
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});

  return Exercise;
};
