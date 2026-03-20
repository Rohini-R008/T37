const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const workoutRoutes = require('./routes/workouts')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & listening')
    })
  })
  .catch((err) => console.log(err))