var db = require("../models");
var router = require('express').Router();
var bodyParser = require("body-parser");
var request = require('request');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get("/api/users", function(req, res){
    db.User.findAll({}).then(function(result){
        return res.json(result);
    })
})

router.post("/api/newuser", function(req, res) {
    // Take the request...
    var user = req.body;

    // Then add the character to the database using sequelize
    db.User.create({
      name: user.name,
      location: user.location
    });
  });
  module.exports = router;