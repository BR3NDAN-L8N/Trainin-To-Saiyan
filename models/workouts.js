const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    name: {
        name: String
    },
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            id: {
                type: Schema.Types.ObjectId,
            },
            type: {
                type: String
            },
            name: {
                type: String
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
