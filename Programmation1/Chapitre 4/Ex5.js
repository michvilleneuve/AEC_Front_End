//Ex5.js
//Codé par Michèle Villeneuve
//2020-01-09

//Modifiez le numéro précédent pour trouver le plus grand nombre possible en JavaScript.

var i;
var tab2Exp;

for (i = 0;i <= 1024;i++){
    tab2Exp = [Math.pow(2, i)];
    document.write(tab2Exp + "</br>");
}

