const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const routesDB = require("./routes/db");
const routesHTML = require("./routes/html");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//  routes for our app to direct traffic
app.use("/", routesDB);
require("./routes/html")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trainin-to-saiyan", { useNewUrlParser: true })
  .then(function () {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });
  });

