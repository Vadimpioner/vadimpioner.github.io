// // ТАБЫ
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() { // тут мы скрываем
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); // fade - класс анимации с css
        });
        tabs.forEach(item => { // скрываем класс активности
            item.classList.remove('tabheader__item_active'); // точку не нужно ставить тк и так работаем с классами
        });
    }
    hideTabsContent();

    function showTabContent(i) { // тут мы показываем
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); // добавляем класс активности
    }
    showTabContent(0); // 0 - это первый слайд

    tabsParent.addEventListener('click', (e) => {
        const target = e.target; // выносим сведения о КАКОЙ-ТО переменной в отдельную переменную
        if (target && target.classList.contains('tabheader__item')) { // contains - сведения должны быть true
            // СМЫСЛ ТАКОЙ: перебираем наши табы tabheader__item; У табов два аргумента название и номер по порядку; Если сравнение проходит(ТУТ УЗЛЫ СРАВНИВАЮТСЯ ПОХОДУ) выводим переменные; 
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabContent(i); // указываем номер по порядку 
                }
            });
        }
    });

    // // ТАЙМЕР
    const deadline = ('2021-04-23');

    function getTimeRemaining() { //функция по расчету промежутков
        const t = Date.parse(deadline) - Date.parse(new Date()), // создаем локальную переменную в которую методом Date.parse разбираем строковое значение и переводим его в милисекунды. от этих милисекунд отнимаем также переведенное в милисекунды ВРЕМЯ ДАТЫ ИЗ СИСТЕМЫ. получаем разницу которую и будет отщитывать таймер.
            days = Math.floor((t / (1000 * 60 * 60 * 24))), //  вычисляем дни. выводим разультат без остатся через math.floor. РАЗНИЦУ делим на произведение (тысяча милисекунд  умноженые на 60(так получаем количество милисекунд в одной минуте) умноженые ещё раз на 60(получаем сколько в одном часе) и умножаем еще раз на 24 часа(и получаем сколько в сутках будет милисекунд) ). арифметика в скобках - получение милисекунд в одних сутках.  разницу в милисекундах делим на милисекунды в одних сутках и получаем СКОЛЬКО СУТОК ОСТАЛОСЬ ДО ОКОНЧАНИЕ НАШЕЙ ДАТЫ.
            hours = Math.floor((t / (1000 * 60 * 60) % 24)), // (нашу разницу милисекунд делим на количество милисекунд в одном часе) делим это % на 24 и % возвращает нам остаток от деления. (пример%: 5 % 2 = 1.  5/2=4 и 1 в остатке)
            minutes = Math.floor((t / 1000 / 60) % 60), // (разницу делим на 1000 и получаем количество секунд которые у нас есть, потом делим на 60 и получаем количество минут) % 60 т.к. в одной минуте шестьдесят секунд. и получаем остаток деления минут. (примечание: он не должен быть больше чем 60).
            seconds = Math.floor((t / 1000) % 60); // (остаток делем на 100 и получаем колиество секунд внутри милисекунд) и % остаток от 60. 

        return { //функция возвращает обьект в котором на основе расчетов получены отдельные данные.
            'total': t, // разница
            'days': days, // дни
            'hours': hours, //часы
            'minutes': minutes, //минуты
            'seconds': seconds //секунды
        };
    }

    function getZero(num) { // добавления нуля к числам до 10. если было 2 останет 02. было 6 станет 06. 10 и дальше не изменяется т.к. двухзначное. аргументом передается какое-то число.
        if (num >= 0 && num < 10) { // сработает если число больше или равно нули И меньше десяти.
            return `0${num}`; //возвращаем добавочный ноль и то число которое было передано в аргумент.
        } else { // если число больше 10
            return num; // просто возвращаем его и ничего не делаем т.к. не надо.
        }
    }


    function setClock(selector, endtime) { // функция установки таймера на страничке. принимает 2 аргумента.

        //элементы со страницы:
        const timer = document.querySelector(selector), // переменная таймер - получаем в нее таймер. если их на странице будет несколько, то их селектор передается сюда первым аргументом.
            days = timer.querySelector('#days'), // получаем айди #days обращаясь не к документу а сразу к таймеру
            hours = timer.querySelector('#hours'), // получаем айди #hours обращаясь не к документу а сразу к таймеру
            minutes = timer.querySelector('#minutes'), // получаем айди #minutes обращаясь не к документу а сразу к таймеру
            seconds = timer.querySelector('#seconds'), // получаем айди #seconds обращаясь не к документу а сразу к таймеру
            timeInterval = setInterval(updateClock, 1000); // устанавливаем, что с интервалом в секунду будем запускать функцию updateClock. имитация стрелки часов. тик-так :)

        updateClock(); // запускается тут, для того, что бы не было скачков и она начинала действовать с момента загрузки страницы.

        function updateClock() { // помещаем таймер на страницу. теперь об будет виден глазу.
            const t = getTimeRemaining(endtime); // в локальную переменную  засовываем "функция по расчету промежутков" написаную первой(которая вычисляет всё и переносит итоги в обьект). теперь в t хранится этот обьект с уже полученными данными.

            // закидываем всё это дело в верстку
            days.innerHTML = getZero(t.days); // в полученный выше (days = timer.querySelector('#days')) #days закидывает значение из обьета, проверяя, надо ли подставлять ноль или нет.
            hours.innerHTML = getZero(t.hours); // в полученный выше (hours = timer.querySelector('#hours')) #hours закидывает значение из обьета, проверяя, надо ли подставлять ноль или нет.
            minutes.innerHTML = getZero(t.minutes); // в полученный выше (minutes = timer.querySelector('#minutes')) #minutes закидывает значение из обьета, проверяя, надо ли подставлять ноль или нет.
            seconds.innerHTML = getZero(t.seconds); // в полученный выше (seconds = timer.querySelector('#seconds')) #seconds закидывает значение из обьета, проверяя, надо ли подставлять ноль или нет.

            if (t.total <= 0) { // проверяем у обьекта созданного первой функцией getTimeRemaining() свойство total, и если оно равняется нулю, значит таймер истек, интервал останавливается и таймер больше не идет.
                clearInterval(timeInterval); // собственно сама отмена таймера.
            }

        }

    }

    setClock('.timer', deadline); // запускаем функцию установки времени для определенного таймера. передаем первым аргументом тот таймер на сайте на который нужно установить отсчет. а вторым аргументом сам дедлайн в формате строчки 

    // МОДАЛЬНЫЕ ОКНА

    const button = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    }

    button.forEach(btn => { // перебираем потому что стоит querySelectorAll а мы работаем с несколькими кнопками
        btn.addEventListener('click', openModal);
    });

    function closeModal() { // создаем функцию чтобы в дальнейшем ее переиспользовать
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; // оставляем пустые ковычки; браузер поставит дефолтное значение
    }


    // ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПРИ КЛИКЕ ВНЕ ЕГО
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') { // target элемент на котором происходит событие
            closeModal();
        }
    });

    // ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПРИ нажатии ESCAPE
    document.addEventListener('keydown', (e) => { // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && modal.classList.contains('show')) { // && проверяем с помощью contains содержит ли modal значенние 'show'
            closeModal();
        }
    });

    // ПОЯВЛЕНИЕ МОДАЛЬНОГО ОКНА ЧЕРЕЗ ПРОКРУТКУ СТРАНИЦЫ
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { // если пользователь долистал до конца страницы появляется модальное окно
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // удаляем обработчик событий 
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    // ИСПОЛЬЗУЕМ КЛАССЫ ДЛЯ КАРТОЧЕК

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            // задаем класс по умолчанию
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => {
                    element.classList.add(className);
                });
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();

    // ФОРМЫ

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    // создаем окно благодарности пользователю 

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide'); // скрывем предыдущий контент модальнного окна
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog'); // добовляем классы созданной переменной thanksModal
        // формируем верстку которая будет находиться в модальном окне
        thanksModal.innerHTML = `
        <div class = "modal__content">
            <div class = "modal__close" data-close>×</div>
            <div class = "modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal); // в .modal добовляем наш новый блок thanksModal

        // возвращаем обратно старое модальное окно. делеам это если пользователь будет осущ запрос еще раз 
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
});