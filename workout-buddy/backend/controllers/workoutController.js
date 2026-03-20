const Workout = require('../models/Workout')

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

// POST workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body

  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// DELETE workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  const workout = await Workout.findByIdAndDelete(id)

  if (!workout) {
    return res.status(404).json({ error: 'Workout not found' })
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout
}