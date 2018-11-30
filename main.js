document.addEventListener("DOMContentLoaded", init);

function init(){
  
    let btn = document.querySelector(".calculate");
    btn.addEventListener("click", calculate);
}

function calculate(){    
    let weight = document.querySelector(".weight").value;
    let height = document.querySelector(".height").value;
   
    let indexBodyMass = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
   
    let   result;  
        
    switch (true) {
        case (indexBodyMass <= 16):
        result = "дефецит";
            break;
        case ((indexBodyMass > 16) && (indexBodyMass <= 18.5)):
            result = "недостаточный ";
            break;
        case ((indexBodyMass > 18.5) && (indexBodyMass <= 25)):
            result = "нормальный ";
            break;
        case ((indexBodyMass > 25) && (indexBodyMass <= 30)):
            result = "избыточный ";
            break;
        case ((indexBodyMass > 30) && (indexBodyMass <= 35)):
            result = "ожирение 1й ";
            break;
        case ((indexBodyMass > 35) && (indexBodyMass <= 40)):
            result = "ожирение 2й ";
            break;
        case (indexBodyMass > 40):
            result = "ожирение 3й ";
            break;
        
        default:
            result = "you do something wrong ";
            break;
    } 

    let answer = document.querySelector(".result");
    answer.value = result;
    answer.textContent =  result + "(ИМТ = " + indexBodyMass + ")";

};