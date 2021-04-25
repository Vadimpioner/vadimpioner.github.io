
// МЕНЮ
const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu__list'),
menuClose = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

document.addEventListener('keydown', (e) => { // событие keydown срабатывает при нажатии кнопок
    if (e.code === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ТАБЫ

const tabs = document.querySelectorAll('.tabs__header-item');
const tabsContent = document.querySelectorAll('.tabs__content-item');
const tabsParent = document.querySelector('.tabs__header');

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.display = 'none'
    });
    tabs.forEach(item => {
        item.classList.remove('active');
    });
}
hideTabContent();

function showTabContent(i = 0) {
    tabsContent[i].style.display = 'grid';
    tabs[i].classList.add('active');
}
showTabContent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabs__header-item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

// МОДАЛЬНОЕ ОКНО

function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger);
    modal = document.querySelector(modal);
    close = document.querySelector(close);
    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none'
        document.body.style.overflow = '';
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
            document.body.style.overflow = '';
        }
    })
}

bindModal('.button', '.wrapper', '.modal__close');

// СЛАЙДЕР

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.arrows__left',
      prevEl: '.arrows__right',
    },
    breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    }
});

// МАСКА ТЕЛЕФОНА
$('input[name=phone]').mask("+375 (99) 999-99-99");

// ПЛАВНЫЙ СКРОЛЛ
$("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});

// КУРСОР

function changeCursor() {
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.follower')
    const links = document.querySelectorAll('.item')

    let postX = 0,
        postY = 0

    let mouseX = 0,
        mouseY = 0

    TweenMax.to({}, 0.01, {
        repeat: -1,
        onRepeat: () => {
            postX += (mouseX - postX) / 2
            postY += (mouseY - postY) / 2
            TweenMax.set(follower, {
                css: {
                    left: postX - 12,
                    top: postY - 12
                }
            })
            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
        }
    })

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX
        mouseY = e.clientY
    })

    links.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursor.classList.add('active')
            follower.classList.add('active')
        })
        elem.addEventListener('mouseleave', () => {
            cursor.classList.remove('active')
            follower.classList.remove('active')
        })
    })
}
changeCursor()