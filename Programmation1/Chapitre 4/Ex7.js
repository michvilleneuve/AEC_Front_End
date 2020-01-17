//Ex7.js
//Codé par Michèle Villeneuve
//2020-01-16

//À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean).
// Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle,
// comptez le nombre de vrai et de faux et faites-les afficher.
//
// Calculez la plus longue séquence de vrais et de faux consécutifs.
//
//

//
// Donnez aussi la position de départ de chacune des séquences :
// 		Position de départ de la plus longue séquence de vrais consécutifs : 6
// 		Position de départ de la plus longue séquence de faux consécutifs  : 12

var tab = [];
var vrai = 0;
var faux = 0;

for (var i = 0;i < 1000;i++){
    tab[i] = Boolean(Math.floor(Math.random() * 2));
    console.log(tab[i]);
    if (tab[i] === true){
        vrai++;
    }
    else {
        faux++;
    }
}
document.write("Nombre de faux :" + faux);
document.write("Nombre de vrai :" + vrai);
