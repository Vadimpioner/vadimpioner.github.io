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

    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close'),
    menuLink = document.querySelectorAll('.menu__season-list');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    // menuLink.forEach(item => {
    //     item.querySelector("a").addEventListener('click', () => {
    //         menu.classList.remove('active');
    //         document.body.style.overflow = '';

    //     });
    // });

document.addEventListener('keydown', (e) => { // событие keydown срабатывает при нажатии кнопок
    if (e.code === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
});
});