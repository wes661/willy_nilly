var db = require("../models");
require("dotenv").config();
var bodyParser = require("body-parser");
var request = require("request")
var router = require('express').Router();
var keys = require("../keys.js"); 
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var googleApi = (keys.google);


router.get('/api/places', function(req, res, next){

	var city = req.query.city;
	

		request("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=" + googleApi.key, function(err, response, data){
			console.log(googleApi.key);
			var places = JSON.parse(data);
			var lat = (places.results[0].geometry.location.lat);
			var lng = (places.results[0].geometry.location.lng);
			console.log(lat);
			console.log(lng);
			// var userInput = "bar";
			
		
			request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=5500&type=bar&key=" + googleApi.key, function (err, response, data) {
			//JSON.parse(data).results[i].name
			var placeList = JSON.parse(data).results;
			var randomPlace = [];
			var chosen = [];
			var places;
			for (var i = 0; i < 5; i += 0) {
				//console.log(err || data);
				var num = Math.floor(Math.random()*placeList.length);
				console.log(num);
				if(!chosen.includes(num)){
					chosen.push(num);
					places = placeList[num];
					randomPlace.push(places);
					i++;
				}
				if(randomPlace.length === placeList.length){
					i = 5;
				}
				console.log(chosen);	
			}
			res.json(randomPlace);
		});


	})

});	

module.exports = router;

