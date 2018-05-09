var db = require("../models");
var router = require('express').Router();
var bodyParser = require("body-parser");
var request = require('request');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/api/events', function(req, res, next){
// var what = req.query.what;
var where = req.query.where;
var when = req.query.when;
// console.log(what);
console.log(where);
console.log(when);
var apikey = 'sKt9rvK6F3HzJdxb';
request("http://api.eventful.com/json/events/search?app_key=" + apikey + "&keywords=all&location=" + where + "&date=" + when + "&page_size=50", function(err, request, data){
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