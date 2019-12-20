//Ex8.js
//Code par Michèle Villeneuve
//2019/12/19

//Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))

//var formule = Number((i - 32) * 5/9);
var i;


for (i = Number(-40); i <= 40; i+=5){
    document.write(((i - 32) * 5/9) + "<br>");
}