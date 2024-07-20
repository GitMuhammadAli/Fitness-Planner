const express = require('express');
const router = express.Router();
const workoutController = require('../controller/workoutController');

router.get('/tempos', workoutController.getTempos);
router.get('/schemes', workoutController.getSchemes);
router.get('/workoutsCategory', workoutController.getWorkoutsCategory);
router.get('/exercises', workoutController.getExercises);
router.get('/exercises/:id', workoutController.getExerciseById);

module.exports = router;
