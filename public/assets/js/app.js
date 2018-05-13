// Submit button JS
$(document).ready(function () {
    // main slide down for finding random event
    $('#loader').hide();
    $(".cta").click(function () {
        $("form").slideDown(250);
        if ($("form").is(":visible")) {
            $(".cta").css('cursor', 'default');
        }
        $("#location").focus();
    });

    // onclick for the toggle between food and events
    $('.toggle').click(function (e) {
        if ($(".toggle").hasClass("toggle--events")) {
            $('.date').hide()
            $('.eventLocation').addClass('foodLocation').removeClass('eventLocation');
            $(".cta").text("Eat Something Tasty!")
        } else {
            $('.date').show()
            $('.foodLocation').addClass('eventLocation').removeClass('foodLocation');
            $(".cta").text("Do Something Fun!")
        }
        var toggle = this;

        e.preventDefault();

        $(toggle).toggleClass('toggle--food')
            .toggleClass('toggle--events')
            .addClass('toggle--moving');

        setTimeout(function () {
            $(toggle).removeClass('toggle--moving');    
        }, 200)
    });
    // event modal on click timeout so the API can populate
    $(".findEvent").click(function (){
        $('#loader').show();
        setTimeout(function () {
            $('#loader').hide();
            $('#eventModal').modal('show');
        }, 3000);
    })
});

// onclick for the login switch to sign up //
document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});

// Login form validation and css changes upon failure //
function validateLogin() {
    var x = document.forms["login"]["email"].value;
    var y = document.forms["login"]["password"].value;
    if (x == "") {
        $(".loginEmail").css({ "border-bottom": "2px solid #ff0000" });
        $(".loginEmail1").css({ "color": "#ff0000" });
    } else {
        $(".loginEmail1").css({ "color": "#cfcfcf" });
        $(".loginEmail").css({ "border-bottom": "1px solid #000000" });
    }
    if (y == "") {
        $(".loginPassword").css({ "border-bottom": "2px solid #ff0000" });
        $(".loginPassword1").css({ "color": "#ff0000" });
        return false;
    } else {
        $(".loginPassword1").css({ "color": "#cfcfcf" });
        $(".loginPassword").css({ "border-bottom": "1px solid #000000" });
    }
}

// sign up form validation and css changes upon failure //
function validateSignUp() {
    var a = document.forms["signUp"]["firstname"].value;
    var b = document.forms["signUp"]["lastname"].value;
    var c = document.forms["signUp"]["email"].value;
    var d = document.forms["signUp"]["password"].value;
    if (a == "") {
        $(".firstName").css({ "border-bottom": "2px solid #ff0000" });
        $(".firstName1").css({ "color": "#ff0000" });
    } else {
        $(".firstName1").css({ "color": "#cfcfcf" });
        $(".firstName").css({ "border-bottom": "1px solid #000000" });
    }

    if (b == "") {
        $(".lastName").css({ "border-bottom": "2px solid #ff0000" });
        $(".lastName1").css({ "color": "#ff0000" });
    } else{
        $(".lastName1").css({ "color": "#cfcfcf" });
        $(".lastName").css({ "border-bottom": "1px solid #000000" });
    }
    if (c == "") {
        $(".signupEmail").css({ "border-bottom": "2px solid #ff0000" });
        $(".signupEmail1").css({ "color": "#ff0000" });
    } else {
        $(".signupEmail1").css({ "color": "#cfcfcf" });
        $(".signupEmail").css({ "border-bottom": "1px solid #000000" });
    }
    if (d == "") {
        $(".signupPassword").css({ "border-bottom": "2px solid #ff0000" });
        $(".signupPassword1").css({ "color": "#ff0000" });
        return false;
    } else {
        $(".signupPassword1").css({ "color": "#cfcfcf" });
        $(".signupPassword").css({ "border-bottom": "1px solid #000000" });
    }
}
// Start of Google Maps //
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









