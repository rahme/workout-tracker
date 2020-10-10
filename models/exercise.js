const mongoose = require('mongoose')
const schmea = mongoose.Schmea

const exerciseschema = new schmea({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
})

const exercise = mongoose.model("Exercise", exerciseschema)
module.exports = exercise