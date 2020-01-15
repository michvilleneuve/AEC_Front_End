//Ex13.js
//Code par Michèle Villeneuve
//2019/12/24 NOTE: À ÉTUDIER CAR JAI DÛ ALLER VOIR LA RÉPONSE

// Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.

var nb;
var compteur = Number(0);

for (nb = 1;nb <= 49;nb+=2){
    compteur++;
    document.write(nb + " ");
    if (compteur == 5){
        document.write("<br>");
        compteur = 0;
    }
}

//Q13
// var cpt = 0;
//
// for(var i=1;i<=49;i+=2){
//    document.write(i + " ");
//    cpt++;
//    if(cpt == 5){
//        document.write("<br>")
//        cpt = 0;
//    }
// }

