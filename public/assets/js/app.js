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

        $(toggle).toggleClass('toggle--on')
            .toggleClass('toggle--off')
            .addClass('toggle--moving');

        setTimeout(function () {
            $(toggle).removeClass('toggle--moving');
        }, 200)
    });
});

document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});


