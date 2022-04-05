$(document).ready(function () {

    $('.header__burger').click(function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('show');
        $('main.main').toggleClass('move');
    });





});