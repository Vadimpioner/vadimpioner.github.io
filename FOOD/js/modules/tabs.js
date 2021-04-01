function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);
    const tabsParent = document.querySelector(tabsParentSelector);

    function hideTabsContent() { // тут мы скрываем
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); // fade - класс анимации с css
        });
        tabs.forEach(item => { // скрываем класс активности
            item.classList.remove(activeClass); // точку не нужно ставить тк и так работаем с классами
        });
    }
    hideTabsContent();

    function showTabContent(i) { // тут мы показываем
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass); // добавляем класс активности
    }
    showTabContent(0); // 0 - это первый слайд

    tabsParent.addEventListener('click', (e) => {
        const target = e.target; // выносим сведения о КАКОЙ-ТО переменной в отдельную переменную
        if (target && target.classList.contains(tabsSelector.slice(1))) { // contains - сведения должны быть true
            // СМЫСЛ ТАКОЙ: перебираем наши табы tabheader__item; У табов два аргумента название и номер по порядку; Если сравнение проходит(ТУТ УЗЛЫ СРАВНИВАЮТСЯ ПОХОДУ) выводим переменные; 
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabContent(i); // указываем номер по порядку 
                }
            });
        }
    });
}

export default tabs;