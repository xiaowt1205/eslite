var swiper = new Swiper('.swiper-banner', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



var doOnce = false;

function dynamicNumberCounter(scrollPos, id, setNum) {
    var inner = document.getElementById(id);
    
    var num = 0;
    var set = null;
    var AddNumdelay = 50;
    var setNum = setNum;

    if ((document.body.scrollTop >= scrollPos && document.body.scrollTop <= scrollPos+150) || (document.documentElement.scrollTop >= scrollPos && document.documentElement.scrollTop <= scrollPos+150)) {
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