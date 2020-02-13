$('.menu-btn').click(function () {
    $('.menu-btn').toggleClass('active');
    // $('.menu').toggleClass('active');
    if ($('.menu').hasClass('active')) {
        $('.menu').addClass('fadeout')
        setTimeout(
            function () {
                $('.menu').removeClass('active')
                $('.menu').removeClass('fadeout')
            }, 600
        )
    } else {
        $('.menu').addClass('active')
    }
})

var swiper = new Swiper('.swiper-banner', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});