$(function () {
    $("#datepicker_start").datepicker({
        dateFormat: 'yy/mm/dd'
    });
});
$('.start .clearBTN').click(function () {
    $('#datepicker_start').val("");
})

$(function () {
    $("#datepicker_end").datepicker({
        dateFormat: 'yy/mm/dd'
    });
});

$('.end .clearBTN').click(function () {
    $('#datepicker_end').val("");
})



$('#datepicker_start').click(function () {
    var prev = document.querySelector('.ui-datepicker-prev');
    prev.childNodes[0].innerHTML = '';
    $(prev.childNodes[0]).addClass('fas fa-chevron-left')
    $(prev.childNodes[0]).removeClass('ui-icon ui-icon-circle-triangle-e')
    var next = document.querySelector('.ui-datepicker-next');
    $(next.childNodes[0]).addClass('fas fa-chevron-right')
    $(next.childNodes[0]).removeClass('ui-icon ui-icon-circle-triangle-e')
    next.childNodes[0].innerHTML = '';
}
)
$('#datepicker_end').click(function () {
    var prev = document.querySelector('.ui-datepicker-prev');
    $(prev.childNodes[0]).addClass('fas fa-chevron-left')
    $(prev.childNodes[0]).removeClass('ui-icon ui-icon-circle-triangle-e')
    prev.childNodes[0].innerHTML = '';
    var next = document.querySelector('.ui-datepicker-next');
    $(next.childNodes[0]).addClass('fas fa-chevron-right')
    $(next.childNodes[0]).removeClass('ui-icon ui-icon-circle-triangle-e')
    next.childNodes[0].innerHTML = '';
}
)



$(function () {
    $("#datepicker").datepicker({
        dateFormat: 'yy/mm/dd'
    });
});
$('.data_btn .clearBTN').click(function () {
    $('#datepicker').val("");
})

$('#datepicker').click(function () {
    var prev = document.querySelector('.ui-datepicker-prev');
    prev.childNodes[0].innerHTML = '';
    $(prev.childNodes[0]).addClass('fas fa-chevron-left')
    $(prev.childNodes[0]).removeClass('ui-icon ui-icon-circle-triangle-e')
    var next = document.querySelector('.ui-datepicker-next');
    $(next.childNodes[0]).addClass('fas fa-chevron-right')
    $(next.childNodes[0]).removeClass('ui-icon ui-icon-circle-triangle-e')
    next.childNodes[0].innerHTML = '';
}
)