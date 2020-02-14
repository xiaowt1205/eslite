$('.menu-btn').click(function () {
    $('.menu-btn').toggleClass('active');
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



    
$('.collapse').on('show.bs.collapse', function () {
    $('.collapse').each(function () {
        $(this).collapse('hide');
    });
});