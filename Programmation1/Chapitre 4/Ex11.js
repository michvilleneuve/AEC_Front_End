//Ex11.js
//Codé par Michèle Villeneuve
//2020-01-18

//C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que
// chaque famille possède et par la suite afficher un tableau de statistiques comme suit :
// Le nombre d’enfants est l’indice du tableau.
// Regrouper ensemble les 10 enfants et plus

//Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.
//
// Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants

var tableau = [];
var nbEnfants;

for (var i = 0;i < 10;i++){
    nbEnfants = prompt("Entrez le nombre d'enfants : ");
    tableau[i] = nbEnfants
}