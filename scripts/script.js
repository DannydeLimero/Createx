$(document).ready(function() {
    $('.benefits__btn').click(function() {
        $('.benefits__btn').removeClass('active');
        $(this).addClass('active')
    });
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        speed:750,
        wairForAnimate:false
    });
    $('.slider-wide').slick({
        slidesToShow: 1,
        infinite: false,
        speed:750,
        wairForAnimate:false,
        dots:true
    });
});