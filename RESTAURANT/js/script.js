/* слайдер */
$(document).ready(function() {
    $('.slide__wrapper').slick({
        dots: true,
        speed: 1000,
        /*         autoplay: true,
                autoplaySpeed: 2000, */
        arrows: false,

    });
    /* слайдер 2 */
    $(window).on('load resize', function() {
        if ($(window).width() < 752) {
            $('.price__wrapper:not(.slick-initialized)').slick({
                centerMode: true,
                dots: false,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                arrows: false
            });
        } else {
            $(".price__wrapper.slick-initialized").slick("unslick");
        }
    });
    /*  $('.price__wrapper').slick({
        dots: false,
        speed: 1000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
 */
    /* маска номера телефона */
    $('input[name=phone]').mask("+375 (99) 999-99-99");

    /* -----меню----- */
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');
    close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('menu_active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });

    /* плавный скролл */
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});