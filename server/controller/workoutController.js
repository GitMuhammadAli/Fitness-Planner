const { Tempo, Scheme, Exercise , Workout } = require('../models');

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
    const { Sequelize } = require('sequelize');
    const workout = await Workout.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('category')), 'category']
      ]
    });
    res.json(workout);
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
      res.status(404).json({ message: 'Exercise not found' });
    }
  }
};

module.exports = workoutController;
