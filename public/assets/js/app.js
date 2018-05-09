// Submit button JS
$(document).ready(function () {
    $(".cta").click(function () {
        $("form").slideDown(250);
        if ($("form").is(":visible")) {
            $(".cta").css('cursor', 'default');
        }
        $("#location").focus();
    });
});

document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});
