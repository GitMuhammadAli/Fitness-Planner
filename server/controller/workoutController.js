const { Tempo, Scheme, Exercise, Workout } = require("../models");
const CustomMethods = require("../Services/CustomMethods");
const workoutController = {
  async getTempos(req, res) {
    const tempos = await Tempo.findAll();
    res.json(tempos);
  },

  async getSchemes(req, res) {
    const schemes = await Scheme.findAll();
    res.json(schemes);
  },
  async getWorkoutsCategory(req, res) {
    try {
      const workout = await CustomMethods.getWorkoutsCategory();
      res.json(workout);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getExercises(req, res) {
    const exercises = await Exercise.findAll();
    res.json(exercises);
  },

  async getExerciseById(req, res) {
    const exercise = await Exercise.findOne({ where: { id: req.params.id } });
    if (exercise) {
      res.json(exercise);
    } else {
      res.status(404).json({ message: "Exercise not found" });
    }
  },
};

module.exports = workoutController;
