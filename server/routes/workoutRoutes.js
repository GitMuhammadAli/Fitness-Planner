const express = require('express');
const router = express.Router();
const workoutController = require('../controller/workoutController');

router.get('/tempos', workoutController.getTempos);
router.get('/schemes', workoutController.getSchemes);
router.get('/workouts', workoutController.getWorkouts);
router.get('/workoutsCategory', workoutController.getWorkoutsCategory);
router.get('/individualType', workoutController.getWorkoutIndividualType);
router.get('/broSplitWorkouts', workoutController.getBroSplitWorkoutstype);
router.get('/bodybuilderSplitWorkouts', workoutController.getBodybuilderSplitWorkoutstype);
router.get('/upperLowerWorkouts', workoutController.getUpperLowerWorkoutstype);
router.get('/exercises', workoutController.getExercises);
router.get('/exercises/:id', workoutController.getExerciseById);
router.get('/workoutsSchemes', workoutController.getWorkoutsSchemes);

module.exports = router;
