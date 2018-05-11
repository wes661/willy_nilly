var db = require("../models");
var bodyParser = require("body-parser");
var request = require("request")
var router = require('express').Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/api/places', function(req, res, next){
	var apiKey = 'AIzaSyCnzqPNGmrowxNR - tx0qp0KKVG8pCk_g4U';
	var userInput = "bar";
	var lat = "32.253460";
	var lon = "-110.911789";

	request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lon + "&radius=5500&type=" + userInput + "&key=" + apiKey, function (err, request, data) {
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
});	

module.exports = router;

// var placeName = restList[i].name;
// var placeVicinity = restList[i].vicinity;