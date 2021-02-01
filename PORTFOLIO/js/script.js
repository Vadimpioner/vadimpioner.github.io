/* скрипт меню */
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close'),
    menuLink = document.querySelectorAll('.menu__link');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(item => {
    item.querySelector("a").addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

/* скрипт автоматического изменения шкалы умений */
const counters = document.querySelectorAll('.skills__percent-nomber'),
    lines = document.querySelectorAll('.skills__percent-line');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


/* скрипт плавного скролла */
$("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});

$('.form').submit(function() {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
});


$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});