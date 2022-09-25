$(document).ready(function() {
    $('.benefits__btn').click(function() {
        $('.benefits__btn').removeClass('active');
        $(this).addClass('active')
    });
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
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
    $('.courses-in-details__btn').click(function() {
        $('.courses-in-details__btn').removeClass('active');
        $(this).addClass('active')
    });
    $('.program-fisher__list-item').click(function() {
        $(this).toggleClass('active')
    });
    $('.other-courses__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        speed:750,
        wairForAnimate:false
    });
});