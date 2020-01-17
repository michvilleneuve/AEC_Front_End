//Ex6.js
//Codé par Michèle Villeneuve
//2020-01-09

//Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
// Vous décidez manuellement des valeurs qui seront dans le tableau (prompt) (ce n’est pas random)
// et affichez ces valeurs à l’aide d’une boucle Pour.

var i;
var array;
var choix;

for (i = 0;i < 10;i++){
    choix = prompt("Entrez pile ou face :");
    array = [choix];
    document.write(array);
}



//Exercices faits avant le cours
//     À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean).
//        Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle,
//        comptez le nombre de vrai et de faux et faites-les afficher.
// */
//
// var tabVraiOuFaux = [];
//
// for(var i=0; i<1000;i++){
//     tabVraiOuFaux[i] = Math.floor(Math.random() * 2);
// }
//

//var tabVraiOuFaux = [];
//
// for(var i=0; i<1000;i++){
//     tabVraiOuFaux[i] = Boolean(Math.floor(Math.random() * 2));
//     console.log(tabVraiOuFaux[i]);
// }

// var tabVraiOuFaux = [];
// var nbVrais = 0;
// var nbFaux = 0;
//
// for(var i=0; i<1000;i++){
//     tabVraiOuFaux[i] = Boolean(Math.floor(Math.random() * 2));
//     console.log(tabVraiOuFaux[i]);
//     if(tabVraiOuFaux[i] === true){
//         nbVrais++;
//     }
//     else{
//       nbFaux++
//     }
// }
// console.log("Il y a " + nbVrais + " vrais");
// console.log("Il y a " + nbFaux + " faux");




