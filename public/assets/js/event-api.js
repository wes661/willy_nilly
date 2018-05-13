
  
   

$(".findEvent").click(function(){
    if($(".toggle").hasClass("toggle--events")){
        var searchTerms = {
            where : $("#location").val(),
            when : $(".date").val()
        }
        
        $("#view").empty();
        $.get("/api/events", searchTerms, function(data){
            console.log(data);
            if(data.length === 0){
                $("#view").html("No results found")
            }else{
                for(var x = 0; x < data.length; x++){
                    var title = (data[x].title);
                    var image; 
                    var map = "<a href=# data-toggle=modal data-target=#mapsModal>Get Map</a>";
                    var sTime = convert(mTime);
                    var mTime = (data[x].start_time);
                    var venue = (data[x].venue_name);
                    var venueAdress = (data[x].venue_address);
                    var description = (data[x].description);
                    var eventButton = $("<div class=views>");
                    function convert(input) {
                        return moment(input).format('dddd, MMMM Do YYYY @ h:mm A');
                    }
                    eventButton.append("<h3>" + title + "</h3>" + "<br>");
                    eventButton.append("<br>" + sTime + "<br>" + venue + "<br>" + venueAdress + "<br>" + "<br>");
                    eventButton.append("<hr>")
                    eventButton.append(map);
                    

                   $ ("#view").append(eventButton);
                }
            }    
        });
    }    

})

