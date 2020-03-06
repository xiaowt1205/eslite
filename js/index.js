var swiper = new Swiper('.banner .swiper-banner', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.vendor_area .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 1200px
        768: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: '.vendor_area .arrow_button-next',
        prevEl: '.vendor_area .arrow_button-prev',
    },
});
var swiper = new Swiper('.vendor_area-mob .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 1200px
        768: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: '.vendor_area-mob .arrow_button-next',
        prevEl: '.vendor_area-mob .arrow_button-prev',
    },
});

var doOnce = false;

function dynamicNumberCounter(scrollPos, id, setNum) {
    var inner = document.getElementById(id);

    var num = 0;
    var set = null;
    var AddNumdelay = 50;
    var setNum = setNum;

    if ((document.body.scrollTop >= scrollPos && document.body.scrollTop <= scrollPos + 150) || (document.documentElement.scrollTop >= scrollPos && document.documentElement.scrollTop <= scrollPos + 150)) {
        if (doOnce === false) {
            inner.innerHTML = 0
            set = setInterval(function () {
                var percent_num = parseInt(setNum / 10);
                if (num >= setNum) {
                    num = setNum;
                    inner.innerHTML = num;
                    clearInterval(set);
                    doOnce = true;
                } else {
                    num += percent_num;
                }
                inner.innerHTML = num
            }, AddNumdelay);
        }
    }
}