//Ex4.js
//Codé par Michèle Villeneuve
//2020-01-09

//Créez un tableau nommé tab2Exp avec 16 cases entières. À l’aide d’une boucle et de Math.pow,
// insérez les bonnes valeurs dans le tableau.
// exp : tab2Exp[0] = 1;    // 2exp0
// ...
// exp : tab2Exp[4] = 16;  // 2exp4
// exp : tab2Exp[5] = 32;  // 2exp5

var i;
var tab2Exp;

for (i = 0;i <= 16;i++){
    tab2Exp = [Math.pow(2, i)];
    document.write(tab2Exp + "</br>");
}

