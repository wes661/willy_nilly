var db = require("../models");
var router = require('express').Router();
var bodyParser = require("body-parser");
var request = require('request');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/api/events', function(req, res){
var searchTerms = req.query.what;
console.log(searchTerms);
var apikey = 'sKt9rvK6F3HzJdxb';
request("http://api.eventful.com/json/events/search?app_key=" + apikey + "&keywords=" + searchTerms + "&page_size=50", function(err, request, data){
    var eventList =  JSON.parse(data).events.event
    var randomEvent = [];
    var events;
    for(var i = 0; i < 5; i++ ){
      var num = Math.floor(Math.random()*eventList.length);
      console.log(num);
      events = eventList[num];
      randomEvent.push(events);
    }


    res.json(randomEvent);
});
})
module.exports = router;