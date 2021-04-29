// MENU

function menuAdaptive(hamburger, menu, menuClose, menuLink) {
    hamburger = document.querySelector(hamburger)
    menu = document.querySelector(menu)
    menuClose = document.querySelector(menuClose)
    menuLink = document.querySelectorAll(menuLink);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    menuLink.forEach(item => {
        item.querySelector("a").addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
    
        });
    });

    document.addEventListener('keydown', (e) => { // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

menuAdaptive('.hamburger', '.menu', '.menu__close', '.menu__link')


// TABS

function tabsBoy(tabs, tabsContent, tabsParent) {
    tabs = document.querySelectorAll(tabs);
    tabsContent = document.querySelectorAll(tabsContent);
    tabsParent = document.querySelector(tabsParent);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none'
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }
    hideTabContent();
    
    function showTabContent(i) {
        tabsContent[i].style.display = 'grid';
        tabs[i].classList.add('active');
    }
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
    
        if (target) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

tabsBoy('.clickSpan', '.tabs__header-content', '.tabs');

//  VIDEO

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
});

// SLIDER

const swiper = new Swiper('.slider-vuga', {
    spaceBetween: 35,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.arrows__left',
      prevEl: '.arrows__right',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 3,
        }
    }
});

// SLIDER 2

const slider = new Swiper('.slider-buga', {
    spaceBetween: 35,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.arrows__l',
      prevEl: '.arrows__r',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
    }
});