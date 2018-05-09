var db = require("../models");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request")
var router = require('express').Router();
var bodyParser = require("body-parser");
var request = require('request');
var PORT = process.env.PORT || 3000;
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var apiKey = 'AIzaSyCnzqPNGmrowxNR - tx0qp0KKVG8pCk_g4U';
var userInput = "restaurant";
var lat = "32.253460";
var lon = "-110.911789";

request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lon + "&radius=5500&type=" + userInput + "&key=" + apiKey, function (err, res, bod) {
	//JSON.parse(bod).results[i].name
	var restList = JSON.parse(bod).results;
	//console.log(restList)
	for (var i = 0; i < restList.length; i++) {
		//console.log(err || bod);
		console.log(restList[i].name);
		console.log(restList[i].vicinity);

	}

});

