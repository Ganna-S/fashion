$(function () {

    $('.header__menu-btn').on('click', function () {
        $('.header__box-menu').addClass('active');
    });
    $('.close-btn').on('click', function () {
        $('.header__box-menu').removeClass('active');
    });

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
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 1051,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 711,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
        ]

    });
    $('.about__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prew"><img src="../images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 1051,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]

    });
});