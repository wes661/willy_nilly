
  
   

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
                    if(data[x].image){
                    image = (data[x].image.thumb.url);
                    }else{
                    image = "http://via.placeholder.com/48x48"
                    }
                    var mTime = (data[x].start_time);
                    var venue = (data[x].venue_name);
                    var venueAdress = (data[x].venue_address);
                    var description = (data[x].description);
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
                    "<hr>");
                }
            }    
        });
    }    

})

