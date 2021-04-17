$(document).ready(function() {
    $('.slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__area'
      });
      $('.slider__area').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__wrapper',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

    /* плавный скролл */
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    $('.blog__wrapper-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      nextArrow: '<button type="button" class="slick-next"><img src="icons/str2.png"></button>',
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/str1.png"></button>',
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
});