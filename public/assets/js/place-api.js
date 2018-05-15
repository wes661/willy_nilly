


$(".findEvent").click(function(){
    if($(".toggle").hasClass("toggle--food")){
        var searchTerms = {
            city : $("#location").val(),
        }

        $("#view").empty();
        $.get("/api/places", searchTerms, function(data){
            console.log(data);
            if(data.length === 0){
                $("#view").html("No results found")
            }else{
                for(var x = 0; x < data.length; x++){
                   var name = data[x].name;
                   var address = data[x].vicinity;
                    var eventButton = $("<div class=views>");
                    eventButton.append("<br>" + "<h3>" + name + "</h3>" + "<hr>" + "<button class=address mapsLink data-toggle=modal data-target=#mapsModal>" + address +"</button>" + "<br>");
                    
                


                    $("#view").append(eventButton);


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
                        
                    })
                    mapAddress = [];
                    eventAddress;
                })
            }
        })
    }
});    
  
