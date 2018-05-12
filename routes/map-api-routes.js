var db = require("../models");
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request")
var router = require('express').Router();
var PORT = process.env.PORT || 8080;
var app = express();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var apiKey = 'AIzaSyCnzqPNGmrowxNR - tx0qp0KKVG8pCk_g4U';

// turn by turn directions
request("https://maps.googleapis.com/maps/api/directions/json?origin=Tucson&destination=Phoenix&key=" + apiKey, function (err, res, bod) {
	var inst = JSON.parse(bod).routes[0].legs[0];
	//console.log(inst);
	console.log(inst.start_address);
	console.log(inst.duration);
	console.log(inst.end_address);
	for (var i = 0; i < inst.steps.length; i++) {
		console.log(inst.steps[i].html_instructions);
	}

})

