
var mapAddress = [];  
var eventAddress;   

$(".findEvent").click(function(){
    if($(".toggle").hasClass("toggle--events")){
        var searchTerms = {
            where : $("#location").val(),
            when : $(".date").val()
        }
        
        $("#view").empty();
        $.get("/api/events", searchTerms, function(data){
            console.log(data);
            var mapsTitle;
            if(data.length === 0){
                $("#view").html("No results found")
            }else{
                for(var x = 0; x < data.length; x++){
                    var title = (data[x].title);
                    
                    var image; 
                    // var map = "<a href=# data-toggle=modal class=mapsLink data-target=#mapsModal>Get Map</a>";
                    var sTime = convert(mTime);
                    var mTime = (data[x].start_time);
                    var venue = (data[x].venue_name);
                    var venueAddress = (data[x].venue_address);
                    var city = (data[x].city_name);
                    var state = (data[x].region_abbr);
                    var description = (data[x].description);
                    var eventButton = $("<div class=views>");
                    function convert(input) {
                        return moment(input).format('dddd, MMMM Do YYYY @ h:mm A');
                    }
                    eventButton.append("<h3>" + title + "</h3>" + "<br>");
                    eventButton.append("<br>" + sTime + "<br>" + venue + "<br>" + "<button class=address mapsLink data-toggle=modal data-target=#mapsModal>" + venueAddress + "," + city + "," + state + "</button>" + "<br>" + "<br>");
                    eventButton.append("<hr>")
                    // eventButton.append(map);
                   

                   $ ("#view").append(eventButton);
                
                   
                
                }
            } 
            $(".address").click(function(){
                console.log(this);
                mapAddress.push(this);
                eventAddress = mapAddress[0].firstChild.data;
                console.log(eventAddress.toString());
                var addressQuery = {
                    address : eventAddress
                }

                $.get("/api/maps", addressQuery, function(data){
                    var lat =(data.results[0].geometry.location.lat);
                    var lng =(data.results[0].geometry.location.lng);

                    console.log(lat);
                    console.log(lng);

                    var map;

                    function initMap() {
                        center = { lat: lat, lng: lng },
                        map = new google.maps.Map(document.getElementById('map'), {
                            center: center,
                            zoom: 15
                        });
                        var marker = new google.maps.Marker({
                            position: center,
                            map: map
                        });
                    }
                    initMap();
                    // document.querySelector('#mapsModal').addEventListener('click', function () {

                        
                        
                    // });
                    
                    
                })
                mapAddress = [];
                eventAddress;
            })
               
        });
    }    

})


