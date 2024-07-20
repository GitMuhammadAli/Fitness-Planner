'use strict';

module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define('Workout', {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    muscle_group: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});



  return Workout;
};
