//Ex14.js
//Code par Michèle Villeneuve
//2019/12/25

//Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs.

// var nb;
//
//
// while (nb !== 0){
//     nb = prompt("Veuillez entrer un nombre :");
//     document.write(nb);
//     if (nb < 0){
//         nb+=;
//     else if (nb > 0){
//         nb + nb;
//         }
//     }
// }

// NON TERMINÉ

//Q14
var sommePositifs = 0;
var sommeNegatifs =0;
var nb = 1; //pour embarquer dans la boucle

while(nb !== 0 ){
   nb = Number(prompt("Entrez un nombre, 0 pour quitter"));

   if(nb < 0){
       sommeNegatifs+=nb;
   }
   else if(nb >0 ){
sommePositifs+=nb;
   }
}
document.write("Somme des positifs : " + sommePositifs);
document.write("Somme des négatifs : " + sommeNegatifs);