var m = prompt("укажите свою массу тела");
var h = prompt("укажите свой рост");

var imt = parseFloat(m) /(parseFloat(h) *parseFloat(h));
//alert (imt);
console.log(imt);
switch (true) {
    case (imt <= 16):
        alert("дефецит");
        break;
    case ((imt > 16) && (imt<=18.5)):
        alert("недостаточный");
        break;
    case ((imt > 18.5) && (imt<=25)):
        alert("нормальный");
        break;
    case ((imt > 25) && (imt<=30)):
        alert("избыточный");
        break;
    case ((imt > 30) && (imt<=35)):
        alert("ожирение 1й");
        break;
    case ((imt > 35) && (imt<=40)):
        alert("ожирение 2й");
        break;
    case (imt > 40):
        alert("ожирение 3й");
        break;
    

    default:
    alert("you do something wrong");
        break;
}