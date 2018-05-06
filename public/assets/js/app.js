// Submit button JS
$(document).ready(function () {
    $(".cta").click(function () {
        $("form").slideDown(250);
        if ($("form").is(":visible")) {
            $(".cta").css('cursor', 'default');
        }
        $("#email").focus();
    });
});