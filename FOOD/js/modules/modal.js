function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // оставляем пустые ковычки; браузер поставит дефолтное значение
}

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
}

function modal(triggerSelector, modalSelector) {
    const button = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);

    button.forEach(btn => { // перебираем потому что стоит querySelectorAll а мы работаем с несколькими кнопками
        btn.addEventListener('click', () => openModal(modalSelector));
    });

    // ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПРИ КЛИКЕ ВНЕ ЕГО
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') { // target элемент на котором происходит событие
            closeModal(modalSelector);
        }
    });

    // ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПРИ нажатии ESCAPE
    document.addEventListener('keydown', (e) => { // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && modal.classList.contains('show')) { // && проверяем с помощью contains содержит ли modal значенние 'show'
            closeModal(modalSelector);
        }
    });

    // ПОЯВЛЕНИЕ МОДАЛЬНОГО ОКНА ЧЕРЕЗ ПРОКРУТКУ СТРАНИЦЫ
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { // если пользователь долистал до конца страницы появляется модальное окно
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll); // удаляем обработчик событий 
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };