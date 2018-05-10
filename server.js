var express = require("express");
var bodyParser = require("body-parser");
var eventRoute = require('./routes/event-api-routes');
var userRoute = require('./routes/user-api-routes');
var placeRoute = require('./routes/place-api-routes');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

app.use('/', eventRoute);
app.use('/', userRoute);
app.use('/', placeRoute);









db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  