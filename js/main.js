$('.menu-btn-pc').click(function () {
    $('.menu-btn-pc').toggleClass('active');
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
    $('.pc-collapse').each(function () {
        $(this).collapse('hide');
    });
});


var btn = $('#BackTop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

if($('.pageNumber .number').length >= 1){
    $('.pageNumber .number').each(function(index){
        $(this).click(function(){
            $('.pageNumber .number').removeClass('active')
            $(this).addClass('active')
        })
        
    })  
}
