document.addEventListener("DOMContentLoaded", init);

function init(){
  
    let btn = document.querySelector(".calculate");
    btn.addEventListener('click', function(e) {
        let w = document.querySelector(".weight").value;
        let h = document.querySelector(".height").value;
       
        let imt = parseFloat(w) /(parseFloat(h) *parseFloat(h));
       
        var   result;  
        if (imt <= 16){
            result = "дефецит ("+imt+")";
        }
        else
        if    (imt<=18.5) {
            result = "недостаточный ("+imt+")";    
        }
        else
            if(imt<=25){
                result = "нормальный("+imt+")";
            }
        else
        if (imt<=30){
            result = "избыточный("+imt+")";
        }
        else 
        if (imt<=35){
            result = "ожирение 1й("+imt+")";
        }else
        if  (imt<=40){
            result = "ожирение 2й("+imt+")";
        }
        else {
            result = "ожирение 3й("+imt+")";
        }
        let answer = document.querySelector(".result");
        answer.value = result;
        answer.textContent=result;

    });
    

}