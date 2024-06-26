document.addEventListener('DOMContentLoaded', function(){ //document.ready

    /*js begin*/
    var element = document.querySelectorAll('.checkbox-block .check-container');
    for(var i = 0; i < element.length; i++){
        element[i].addEventListener("click", function(event){
        var mas = new Array();

        var parent = event.target.closest('.checks');
        var childs =  parent.querySelectorAll('.checkmark');

        for(var k = 0; k < childs.length; k++){
            childs[k].classList.remove('check');
        }

        var element2 = parent.querySelectorAll('.check-container');
        for(var m = 0; m < element2.length; m++){
            var val = element2[m].querySelector('span').innerText;
            if(element2[m].querySelector('input').checked) {
            mas.push(val);
            }
            /*alert(val);*/
        }

        parent.closest('.checkbox-block').querySelector('input.hidfield').setAttribute("value", mas);

        }, false); 
    }
    /*js end*/
  
});
  