// 
// DEPENDENCIES
//
var path = require("path");

module.exports = function (app) {
    // adding a function to "app" in server.js
    // regex looks for "/exercise" and fires this function
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};