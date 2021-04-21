$(function() {
    $('[data-fancybox]').fancybox({
        youtube : {
        },
    });

    $('.slider__wrapper').slick({
        dots: false,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/right.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/left.png"></button>',
        arrows: true,

    });
});