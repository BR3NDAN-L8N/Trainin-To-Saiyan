const db = require("../models");
const express = require("express");
const router = express.Router();

// assigning functions to router
// router.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.get("/user", (req, res) => {
//     db.User.find({})
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.post("/submit", ({ body }, res) => {
//     db.Workout.create(body)
//         .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.get("/populated-workouts", (req, res) => {
//     db.User.find({})
//         .populate("workouts")
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// ***************************
// Your created ones below here

// export router with new functions
module.exports = function (app) {

    //  GET workouts from database
    app.get("/api/workouts", (req, res) => {
        db.Workouts.find({}, (error, data) => {  //  find all workouts
            if (error) {
                res.send(error);
            } else {
                res.json(data);  //  send all workouts back
            }
        });
    });

    app.post("/api/workouts", ({ body }, res) => {

        res.send("api/workouts POST was run");
    });

    app.put("/api/workouts/:id", async (req, res) => {

        id = req.params.id;
        // data = req.body;
        // newWorkout = await db.Workout.create(data);


        db.Workouts.findByIdAndUpdate(id, exercises.push(req.body), { new: true })
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });

};


// Workouts.findById(id, function (err, workouts) {});