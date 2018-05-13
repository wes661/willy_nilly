var db = require("../models");
require("dotenv").config();
var router = require('express').Router();
var bodyParser = require("body-parser");
var request = require('request');
var keys = require("../keys.js"); 
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var eventApi = (keys.eventful);

router.get('/api/events', function(req, res, next){
  var where = req.query.where;
  var when = req.query.when;
  request("http://api.eventful.com/json/events/search?app_key=" + eventApi.key + "&keywords=all&location=" + where + "&date=" + when + "&page_size=50", function(err, request, data){
    var eventCount = JSON.parse(data).events
    var randomEvent = [];
    if(eventCount === null){
      console.log("No results found");
    }else{
      var eventList =  JSON.parse(data).events.event
      var chosen = [];
      var events;
      
      for(var i = 0; i < 5; i += 0 ){
        var num = Math.floor(Math.random()*eventList.length);
        console.log(num);
        
        if(!chosen.includes(num)){
          chosen.push(num);
          events = eventList[num];
          randomEvent.push(events);
          i++;
        }
        if(randomEvent.length === eventList.length){
          i = 5;
        }
        console.log(chosen);
      }
    }  
      res.json(randomEvent);
  });
});
module.exports = router;