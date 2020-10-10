const mongoose = require('mongoose');
const schema = mongoose.Schema;

const workoutschema = new schema({
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

const workout = mongoose.model("Workout", workoutschema);
module.exports = workout;