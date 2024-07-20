'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tempo = sequelize.define('Tempo', {
    tempo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  return Tempo;
};
