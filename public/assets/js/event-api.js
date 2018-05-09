
  
   

$(".findEvent").click(function(){
    var searchTerms = {
        where : $("#location").val(),
        when : $(".date").val()
    }
    // var where = $("#location").val();
    // var when = $("#date").val();
    // console.log(when);
    // console.log(where);
    
       


    // getEvents();


  
       
  
  

    $("#view").empty();
    $.get("/api/events", searchTerms, function(data){
        console.log(data);
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
            "<br>");
        }
    })

})

//   var oArgs = {
  
//     app_key: "sKt9rvK6F3HzJdxb",

//     what: $("#what").val().trim(),

//     where: $("#where").val().trim(),

//     when: $("#when").val().trim(),

//     page_size: 50,

//     sort_order: "popularity",
// }