const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseplan = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});

const exercise = mongoose.model("Exercise", exerciseplan);
module.exports = exercise;