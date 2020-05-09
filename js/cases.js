$(window).scroll(function () {
    var scrolledY = $(window).scrollTop();
    // console.log("RRR")
    // $('.cases-img').css('background-position-x', ($('.cases-img').offset().left) + 'px ');
    // $('.cases-img').css('background-position-y', (scrolledY - $('.cases-img').offset().top) + 'px ');
});

$(function () {
    $('.cases-img').css('background-size', ($('.cases-img').width()) + 'px ');
    $('.cases-img').css('background-attachment', 'scroll');
    $('.cases-img').css('background-position-x', 'left');

    $(window).scroll(function () {
        var imgPosY = $('.cases-img').offset().top;

        if ($(this).scrollTop() > (imgPosY)) {
            console.log("change to fixed")
            $('.cases-img').css('background-attachment', 'fixed');
            $('.cases-img').css('background-position-x', ($('.cases-img').offset().left) + 'px ');
        }
        else {
            console.log("change to scroll")
            $('.cases-img').css('background-attachment', 'scroll');
            $('.cases-img').css('background-position-x', 'left');

        }
    });
})
