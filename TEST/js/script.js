// SLIDER-1
$('.slider__wrapper').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    pauseOnHover: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    arrows: true,
});

// // SLIDER-2
// $(document).ready(function () {
//     $('.promo__wrapper').slick({
//         slidesToShow: 4,
//         infinite: false,
//         variableWidth: true,
//         prevArrow:
//             '<button type="button" class="slick-prev"><img src="icons/left-orange.svg"></button>',
//         nextArrow:
//             '<button type="button" class="slick-next"><img src="icons/right-orange.svg"></button>',
//         arrows: true,
//         dots: true,
//     });
//     var dots = $('.promo__wrapper li');
//     //вешаем обработчик на наши точки
//     dots.click(function () {
//         var $this = $(this);
//         dots.removeClass('before after');
//         //отображаем 2 предыдущие точки
//         $this.prev().addClass('before').prev().addClass('before');
//         //отображаем 2 следующие точки
//         $this.next().addClass('after').next().addClass('after').next();

//         //если мы в самом начале - добавляем пару последующих точек
//         if (!$this.prev().length) {
//             $this.next().next().next().addClass('after');
//         }
//         //на 2й позиции - добавляем одну точку
//         if (!$this.prev().prev().length) {
//             $this.next().next().next().addClass('after');
//         }
//         //в самом конце - добавляем пару доп. предыдущих точек
//         if (!$this.next().length) {
//             $this.prev().prev().prev().addClass('before');
//         }
//         //предпоследний элемента - добавляем одну пред. точку
//         if (!$this.next().next().length) {
//             $this.prev().prev().prev().addClass('before');
//         }
//     });
//     dots.eq(0).click(); //кликаем на первую точку
// });

// MENU
function menuAdaptive(hamburger, menu, menuClose, menuLink) {
    hamburger = document.querySelector(hamburger);
    menu = document.querySelector(menu);
    menuClose = document.querySelector(menuClose);
    // menuLink = document.querySelectorAll(menuLink);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    // menuLink.forEach((item) => {
    //     item.querySelector('a').addEventListener('click', () => {
    //         menu.classList.remove('active');
    //         document.body.style.overflow = '';
    //     });
    // });

    document.addEventListener('keydown', (e) => {
        // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

menuAdaptive('.hamburger', '.menu', '.menu__close' /* '.menu__link' */);

// BTN HEADER

let li = document.querySelector('.one__li a');

li.onclick = function () {
    let liMore = document.querySelector('.drop-down');
    function toggle(el) {
        el.style.display = el.style.display == 'none' ? 'block' : 'none';
    }
    toggle(liMore);
};

// SLIDER 2
$(document).ready(function () {
    function setBoundries(slick, state) {
        if (state === 'default') {
            slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
        }
    }

    // Slick Selector.
    var slickSlider = $('.promo__wrapper');
    var maxDots = 5;
    var transformXIntervalNext = -18;
    var transformXIntervalPrev = 18;

    slickSlider.on('init', function (event, slick) {
        $(this).find('ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
        $(this)
            .find('ul.slick-dots li')
            .each(function (index) {
                $(this).addClass('dot-index-' + index);
            });
        $(this).find('ul.slick-dots').css('transform', 'translateX(0)');
        setBoundries($(this), 'default');
    });

    var transformCount = 0;
    slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var totalCount = $(this).find('.slick-dots li').length;
        if (totalCount > maxDots) {
            if (nextSlide > currentSlide) {
                if (
                    $(this)
                        .find('ul.slick-dots li.dot-index-' + nextSlide)
                        .hasClass('n-small-1')
                ) {
                    if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
                        transformCount = transformCount + transformXIntervalNext;
                        $(this)
                            .find('ul.slick-dots li.dot-index-' + nextSlide)
                            .removeClass('n-small-1');
                        var nextSlidePlusOne = nextSlide + 1;
                        $(this)
                            .find('ul.slick-dots li.dot-index-' + nextSlidePlusOne)
                            .addClass('n-small-1');
                        $(this)
                            .find('ul.slick-dots')
                            .css('transform', 'translateX(' + transformCount + 'px)');
                        var pPointer = nextSlide - 3;
                        var pPointerMinusOne = pPointer - 1;
                        $(this)
                            .find('ul.slick-dots li')
                            .eq(pPointerMinusOne)
                            .removeClass('p-small-1');
                        $(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
                    }
                }
            } else {
                if (
                    $(this)
                        .find('ul.slick-dots li.dot-index-' + nextSlide)
                        .hasClass('p-small-1')
                ) {
                    if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
                        transformCount = transformCount + transformXIntervalPrev;
                        $(this)
                            .find('ul.slick-dots li.dot-index-' + nextSlide)
                            .removeClass('p-small-1');
                        var nextSlidePlusOne = nextSlide - 1;
                        $(this)
                            .find('ul.slick-dots li.dot-index-' + nextSlidePlusOne)
                            .addClass('p-small-1');
                        $(this)
                            .find('ul.slick-dots')
                            .css('transform', 'translateX(' + transformCount + 'px)');
                        var nPointer = currentSlide + 3;
                        var nPointerMinusOne = nPointer - 1;
                        $(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
                        $(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
                    }
                }
            }
        }
    });

    $('.promo__sum').slick({
        slidesToShow: 4,
        infinite: false,
        variableWidth: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="icons/left-orange.svg"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="icons/right-orange.svg"></button>',
        arrows: true,
        dots: true,
    });
});
