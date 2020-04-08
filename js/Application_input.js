var files = document.querySelectorAll('.fileInput')
var fileNames = document.querySelectorAll('.fileName')


files.forEach(function(element,index){
    element.onchange = function(){
        var iptVal = element.value
        fileNames[index].innerHTML = iptVal
    }
});


