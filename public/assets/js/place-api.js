


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

                   $("#view").append("<h3>" + name + "</h3>" + "<br>" 
                   + address 
                   + "<br>"
                   + "<br>"
                   + "<br>"
                   + "<br>");
                }
            }
        })
    }
});    
  
