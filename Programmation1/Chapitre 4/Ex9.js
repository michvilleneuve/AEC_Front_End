//Ex9.js
//Codé par Michèle Villeneuve
//2020-01-16

//Lire 10 nombres quelconques et les placer dans un tableau.
// Par la suite, trouver le plus petit et le plus grand de ces nombres.
//Nombres quelconque = nombres aléatoires

var tab = [0];
var nbHaut = 0;
var nbBas = 999999;

for (var i = 0;i < 10;i++){
    tab[i] = Math.floor(Math.random() * 100);
}

for (var i = 0;i < tab.length;i ++){
    if (tab[i] > nbHaut) {
        nbHaut = tab[i];

    }
    else if(tab[i] < nbBas){
        nbBas = tab[i];
    }
}

console.log(tab);
document.write("Le nombre le plus élevé est : " + nbHaut + "<br>");
document.write("Le nombre le moins élevé est : " + nbBas);
//
// //Corrigé
// var tableau = [];
// var max = 0;
// var min = 9999999;
//
// for(var i = 0;i<10;i++){
//  tableau[i] = Math.floor(Math.random() * 100);
// }
//
// //On passe tous les éléments du tableau pour trouver le min et max.
// for(var j = 0;j<10;j++){
//  if(tableau[j] < min){
//    min = tableau[j];
//  }
//
//  if(tableau[j] > max){
//    max = tableau[j];
//  }
// }
// document.write("Le minimum est " + min + "<br>");
// document.write("Le maximum est " + max);