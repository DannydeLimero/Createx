$(document).ready(function() {
    $('.benefits__btn').click(function() {
        $('.benefits__btn').removeClass('active');
        $(this).addClass('active')
    });
});