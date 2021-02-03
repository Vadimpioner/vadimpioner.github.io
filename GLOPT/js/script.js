$(document).ready(function() {

    /* -----меню----- */
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuClose = document.querySelector('.menu__close'),
        menuLink = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('menu_active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });

    menuLink.forEach(item => {
        item.querySelector("a").addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    /* слайдер */
    $('.comments__wrapper').slick({
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/right.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/left.png"></button>',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        }, ]

    });
    /* маска номера телефона */
    $('input[name=phone]').mask("+375 (99) 999-99-99");

    /* плавный скролл */
    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});