const db = require("../models");
const express = require("express");

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

// export app with new functions
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

    //  add an exercise to current workout
    app.put("/api/workouts/:id", (req, res) => {

        db.Workouts.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
            .then(exercises => {
                res.json(exercises);
            })
            .catch(err => {
                res.json(err);
            });


    });

    //  GET workouts from database
    app.get("/api/workouts/range", (req, res) => {
        db.Workouts.find({}, (error, data) => {  //  find all workouts
            if (error) {
                res.send(error);
            } else {
                res.json(data);  //  send all workouts back
            }
        });
    });

};


// Workouts.findById(id, function (err, workouts) {});