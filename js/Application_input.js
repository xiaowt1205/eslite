var files = document.querySelectorAll('.files')
var file_ipt = document.querySelectorAll('.fileInput')
var lastFile = document.querySelectorAll('.lastFile')
var fileNames = document.querySelectorAll('.fileName')


file_ipt.forEach(function (element, index) {
    element.onclick = function () {
        let nowVal = element.value
        if (nowVal == "") {

        } else {
            lastFile[index].classList.add('active')
            lastFile[index].innerHTML = `<div>${nowVal.split("\\").pop()}<div class="delete" onclick="remove(this)"></div></div>`
        }
    }
    element.onchange = function () {
        let iptVal = element.value
        fileNames[index].innerHTML = iptVal
    }
});


function remove(el) {
    var li = el.parentNode.parentNode;
    var div = el.parentNode;
    // console.log(element)
    li.classList.remove('active')
    div.remove();
}