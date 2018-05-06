$(".findEvent").on("click", function(event){
    console.log("running");
  
    $("#view").empty();
  
    var oArgs = {
  
        app_key: "sKt9rvK6F3HzJdxb",
  
        what: $("#what").val().trim(),
  
        where: $("#where").val().trim(),
  
        when: $("#when").val().trim(),
  
        page_size: 50,
  
        sort_order: "popularity",
  
     };
  
     EVDB.API.call("/events/search", oArgs, function(oData) {
        console.log(oData);
  
  
          var eventList =  oData.events.event
          var randomEvent = [];
          var events;
          for(var i = 0; i < 5; i++ ){
            var num = Math.floor(Math.random()*oData.events.event.length);
            console.log(num);
            events = eventList[num];
            randomEvent.push(events);
          }
  
          for(var x = 0; x < randomEvent.length; x++){
            var title = (randomEvent[x].title);
            var image; 
            if(randomEvent[x].image){
              image = (randomEvent[x].image.thumb.url);
            }else{
              image = "http://via.placeholder.com/48x48"
            }
            var mTime = (randomEvent[x].start_time);
            var venue = (randomEvent[x].venue_name);
            var venueAdress = (randomEvent[x].venue_address);
            var description = (randomEvent[x].description);
            function convert(input) {
              return moment(input).format('dddd, MMMM Do YYYY @ h:mm A');
            }
  
            var sTime = convert(mTime);
  
  
            $("#view").append("<h3>" + title + "</h3>" + "<br>");
  
            var imageHTML = $('<img>');
            $(imageHTML).attr("src", image);
            $("#view").append(imageHTML);
            $("#view").append("<br>" +
            sTime +
            "<br>" +
            venue +
            "<br>" +
            venueAdress +
            "<br>" +
            "<br>" +
            "<br>");
            
  
  
            
          }
  
      });
  
     })