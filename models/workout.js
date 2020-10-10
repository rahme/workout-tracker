const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workoutplan = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    } 
});

const workout = mongoose.model("Workout", workoutplan);
module.exports = workout;