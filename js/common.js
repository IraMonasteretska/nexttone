$(document).ready(function () {

    $('.header__burger').click(function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('show');
        $('main.main').toggleClass('move');
    });


    if ($(".js-player").length) {
        const players = Plyr.setup('.js-player');
    }

    // $('.mainslider').slick({
    //     infinite: false,
    //     speed: 1200,
    //     adaptiveHeight: true,
    //     arrows: false,
    //     // autoplay: true,
    //     // autoplaySpeed: 3000,
    //     // appendArrows: $('.mainstep__btns'),
    //     // prevArrow: '<a href="#" class="mainstep__btns-back"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292894 8.70711C-0.0976315 8.31658 -0.0976314 7.68342 0.292894 7.29289L6.65686 0.928931C7.04738 0.538407 7.68054 0.538407 8.07107 0.928931C8.46159 1.31946 8.46159 1.95262 8.07107 2.34314L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292894 8.70711ZM18 9L1 9L1 7L18 7L18 9Z" fill="#3A3A3A" /></svg>Back</a>',
    //     // nextArrow: '<a href="#" class="mainstep__btns-next">Learn more<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928931C10.9526 0.538407 10.3195 0.538407 9.92893 0.928931C9.53841 1.31946 9.53841 1.95262 9.92893 2.34314L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM8.74228e-08 9L17 9L17 7L-8.74228e-08 7L8.74228e-08 9Z" fill="#FFF500" /></svg></a>',
    // });


    if ($('.mySwiper').length) {
        var swiper = new Swiper(".mySwiper", {
            calculateHeight: true,
            speed: 800,
            loop: true,
            autoplay: {
                delay: 9000,
            },
            minimumVelocity: 2,
            onSlideChangeStart: function () {
                resizeSwiper();
            },
        });
        swiper.on('slideChangeTransitionStart', () => {
            $('.colapsenav').slideUp();
            $(this).parents('.mainstep').next('.colapsenav').removeClass('show');
            $('.mainstep .mainstep__btns a.mainstep__btns-back').removeClass('show');
        });
    }








    $('.mainslider .mainstep__btns-next.opennav').click(function (e) {
        e.preventDefault();
        $(this).parents('.mainstep').next('.colapsenav').show();
        $(this).parents('.mainstep').next('.colapsenav').addClass('show');


    });
    $('.mainslider .mainstep__btns-back').click(function (e) {
        e.preventDefault();
        $(this).parents('.mainstep').next('.colapsenav').hide();
        $(this).parents('.mainstep').next('.colapsenav').removeClass('show');
    });



    $(".mainstep__btns-next.opennav").click(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 0);
    });








    // next btn - remove disabled



    $('.checkssection__blockwrapper input').change(function () {
        if ($('.checkssection__blockwrapper input:checked').length) {
            $(this).parents('.row').next('.mainstep__btns').find('.mainstep__btns-next').removeClass('disabled');
        } else {
            $(this).parents('.row').next('.mainstep__btns').find('.mainstep__btns-next').addClass('disabled');
        }
    });


    $(".mainstep .mainstep__btns-next.opennav, .mainstep .mainstep__btns-back").click(function () {
        if ($('.colapsenav').hasClass('show')) {
            $('.mainstep .mainstep__btns a.mainstep__btns-back').addClass('show');
        } else {
            $('.mainstep .mainstep__btns a.mainstep__btns-back').removeClass('show');
        }
    });








});