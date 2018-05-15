var db = require("../models");
require("dotenv").config();
var bodyParser = require("body-parser");
var request = require("request")
var router = require('express').Router();
var keys = require("../keys.js"); 
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var googleApi = (keys.google);


router.get('/api/maps', function(req, res, next){

    var address = req.query.address;
    request("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key="+googleApi.key, function(err, response, data){
        // console.log(data);
        var mapAddress = JSON.parse(data);
			var lat = (mapAddress.results[0].geometry.location.lat);
			var lng = (mapAddress.results[0].geometry.location.lng);
			console.log(lat);
            console.log(lng);
            res.json(mapAddress);

            
    })

})

module.exports = router;


// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY