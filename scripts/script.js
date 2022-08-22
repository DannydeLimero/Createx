$(document).ready(function() {
    $('.benefits__btn').click(function() {
        $('.benefits__btn').removeClass('active');
        $(this).addClass('active')
    });
    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
});