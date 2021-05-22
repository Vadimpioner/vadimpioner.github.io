// СЛАЙДЕР
$('.top__wrapper').slick({
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

});

// ТАБЫ
var mixer = mixitup('.tabs__wrapper', {
    load: {
        filter: '.two'
    }
});