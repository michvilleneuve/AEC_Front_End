//Ex9.js
//Code par Michèle Villeneuve
//2019/12/19

//9. Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.

var i;

//formule = Number((i - 32) * 5/9);

for (i = Number(10); i <= 20; i++){
    document.write(((i - 32) * 5/9) + "<br>");
}