const { Tempo, Scheme, Exercise, Workout } = require("../models");
const CustomMethods = require("../Services/CustomMethods");

const workoutController = {
  async getTempos(req, res) {
    try {
      const tempos = await Tempo.findAll();
      res.json(tempos);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getSchemes(req, res) {
    try {
      const schemes = await Scheme.findAll();
      res.json(schemes);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getWorkoutsCategory(req, res) {
    try {
      const workout = await CustomMethods.getWorkoutsCategory();
      res.json(workout);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getExercises(req, res) {
    try {
      const exercises = await Exercise.findAll();
      res.json(exercises);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getExerciseById(req, res) {
    try {
      const exercise = await Exercise.findOne({ where: { id: req.params.id } });
      if (exercise) {
        res.json(exercise);
      } else {
        res.status(404).json({ message: "Exercise not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getWorkoutsSchemes(req, res) {
    try {
      const workoutSchemes = await CustomMethods.getWorkoutSchemes();
      res.json(workoutSchemes);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getWorkouts(req, res) {
    try {
      const workouts = await Workout.findAll();
      res.json(workouts);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getWorkoutIndividualType(req, res) {
    try {
      const workout = await CustomMethods.getWorkoutsindividualtype();
      res.json(workout);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getBroSplitWorkoutstype(req, res) {
    try {
      const workout = await CustomMethods.getBroSplitWorkoutstype();
      res.json(workout);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getBodybuilderSplitWorkoutstype(req, res) {
    try {
      const workout = await CustomMethods.getBodybuilderSplitWorkoutstype();
      res.json(workout);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },

  async getUpperLowerWorkoutstype(req, res) {
    try {
      const workout = await CustomMethods.getUpperLowerWorkoutstype();
      res.json(workout);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  }
};

module.exports = workoutController;
