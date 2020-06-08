var swiper = new Swiper('.banner .swiper-banner', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var footer_swiper = new Swiper('.vendor_area .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 1200px
        768: {
            slidesPerView: 3,
        },
        1200: {
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
var statistics = document.querySelector("#Statistics")

function dynamicNumberCounter(id,setNum) {
    var inner = document.getElementById(id);

    var num = 0;
    var set = null;
    var AddNumdelay = 50;
    var setNum = setNum;

    // if ((document.body.scrollTop >= 400 && document.body.scrollTop <= 400 + 150) || (document.documentElement.scrollTop >= 400 && document.documentElement.scrollTop <= 400 + 150)) {
    if (document.body.scrollTop >= pageY(statistics)|| document.documentElement.scrollTop >= pageY(statistics) - 100) {
        console.log(document.documentElement.scrollTop+"  "+"  "+pageY(statistics));
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
                inner.innerHTML = numberWithCommas(num)
            }, AddNumdelay);
        }
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.onscroll = function () {
    dynamicNumberCounter("total_0", 4100000);
    dynamicNumberCounter("total_1", 600000);
}

$('.aside-btn-title').click(function () {
    $(this).toggleClass('active')
})


//06-08 get element position Y axis in page
function pageY(elem) {
    return elem.offsetParent ? elem.offsetTop + pageY(elem.offsetParent) : elem.offsetTop;
}
