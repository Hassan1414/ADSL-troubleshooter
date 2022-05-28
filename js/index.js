var inputs = document.querySelectorAll('input')
var answers = document.querySelectorAll('.answer')


function toggleElementDisplay(){
for (let i = 0; i < inputs.length; i++) {

    if(inputs[i].checked){
       answers[i].className = "d-block";
    }else{
        answers[i].className = "d-none";
    }
    
}
}