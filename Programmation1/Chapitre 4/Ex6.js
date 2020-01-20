//Ex6.js
//Codé par Michèle Villeneuve
//2020-01-09

//Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
// Vous décidez manuellement des valeurs qui seront dans le tableau (prompt) (ce n’est pas random)
// et affichez ces valeurs à l’aide d’une boucle Pour.

var array = [];
var choix;

for (var i = 0;i < 10;i++){
    choix = prompt("Entrez pile ou face :");
    array[i] = choix;
    document.write(array[i] + "<br>");
}



// var tableau = [];
//
// tableau[0]="vrai";
// tableau[1]="faux";
// tableau[2]="faux";
// tableau[3]="vrai";
// tableau[4]="vrai";
// tableau[5]="vrai";
// tableau[6]="faux";
// tableau[7]="faux";
// tableau[8]="vrai";
// tableau[9]="faux";
//
//
// for (var i=0; i<tableau.length-1; i++){
//     document.write(tableau[i] + "<br>");
// }





