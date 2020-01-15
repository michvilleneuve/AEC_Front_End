//Ex8.js
//Code par Michèle Villeneuve
//2019/12/19

//Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))



for (var i = Number(-40); i <= 40; i+=5){
    document.write(((i - 32) * 5/9) + "<br>");
}


//Corrigé :
// var celcius;
//
// for(var f=-40;f<=40;f+=5){
//    celcius = (5/9) * (f-32);
//    document.write(f + " Fahrenheits = " + celcius.toFixed(2) + " Celcius<br>");
// }
