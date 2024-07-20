'use strict';
module.exports = (sequelize, DataTypes) => {
  const Scheme = sequelize.define('Scheme', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    repRangeMin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    repRangeMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ratioWork: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ratioRest: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restMin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  return Scheme;
};
