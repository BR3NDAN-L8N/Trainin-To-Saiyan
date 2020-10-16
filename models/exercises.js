const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;