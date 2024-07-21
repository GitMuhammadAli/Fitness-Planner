const { Workout, Sequelize, Scheme } = require("../models");

exports.getWorkoutsCategory = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("category")), "category"],
    ],
  });
};

exports.getWorkoutsindividualtype = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("muscle_group")), "muscle_group"],
    ],
    where: {
      type: "individual",
    },
    order: ["muscle_group"],
  });
};

exports.getBroSplitWorkoutstype = async () => {
  return await Workout.findAll({
    attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("type")), "type"],

    ],
    where: {
      category: "bro_split",
    },
    order: ["type"],
  });
};

exports.getBodybuilderSplitWorkoutstype = async () => {
  return await Workout.findAll({
    attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("type")), "type"],

    ],
    where: {
      category: "bodybuilder_split",
    },
    order: ["type"],
  });
};

exports.getUpperLowerWorkoutstype = async () => {
  return await Workout.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("type")), "type"],
    ],
    where: {
      category: "upper_lower",
    },
    order: ["type"],
  });
};

exports.getWorkoutSchemes = async () => {
  return await Scheme.findAll({
    attributes: ["name"],
  });
};

