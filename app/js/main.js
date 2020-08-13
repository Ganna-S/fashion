$(function () {

    $('.main-screen__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.bestsellers__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-arrow slick-prew"><img src="../images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-right.svg" alt=""></button>',
        
    });
});