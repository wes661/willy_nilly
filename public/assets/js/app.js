// Submit button JS
$(document).ready(function () {
    $(".cta").click(function () {
        $("form").slideDown(250);
        if ($("form").is(":visible")) {
            $(".cta").css('cursor', 'default');
        }
        $("#location").focus();
    });
    $('.toggle').click(function (e) {
        var toggle = this;

        e.preventDefault();

        $(toggle).toggleClass('toggle--food')
            .toggleClass('toggle--events')
            .addClass('toggle--moving');

        setTimeout(function () {
            $(toggle).removeClass('toggle--moving');    
        }, 200)
    });

});
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 32.253460, lng: -110.911789 },
        zoom: 8
    });
}
document.querySelector('#mapsModal').addEventListener('click', function () {
    initMap();
});

document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});



