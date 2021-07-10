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

// MENU
function menuAdaptive(hamburger, menu, menuClose, menuLink, menuLinkTwo, menuLinkThree) {
    hamburger = document.querySelector(hamburger);
    menu = document.querySelector(menu);
    menuClose = document.querySelector(menuClose);
    menuLink = document.querySelectorAll(menuLink);
    menuLinkTwo = document.querySelectorAll(menuLinkTwo);
    menuLinkThree = document.querySelectorAll(menuLinkThree);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    menuLink.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    menuLinkTwo.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    menuLinkThree.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', (e) => {
        // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

menuAdaptive(
    '.hamburger',
    '.menu',
    '.menu__close',
    '.header__search-favorites',
    '.header__search-basket',
    '.header__wrapper li',
);

// BTN HEADER
let li = document.querySelector('.one__li a');
li.onclick = function () {
    let liMore = document.querySelector('.drop-down');
    function toggle(el) {
        el.style.display = el.style.display == 'flex' ? 'none' : 'flex';
    }
    toggle(liMore);
};

// MODAL BUY

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
