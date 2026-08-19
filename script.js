$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000
});

$('.prev-btn').click(function () {
    $('.testimonial-slider').slick('slickPrev');
});
$('.next-btn').click(function () {
    $('.testimonial-slider').slick('slickNext');
});