// PLAY
$('[data-fancybox]').fancybox({
    youtube : {
    },
});

// СЛАЙДЕР
$('.blog-slide').slick({
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/blog-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/blog-right.svg"></button>',
});

$('.blog__content-block-slider').slick({
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/tag-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/tag-right.svg"></button>',

});

