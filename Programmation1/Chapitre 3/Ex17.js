//Ex17.js
//Code par Michèle Villeneuve
//2019/12/30

//Lire le code de sexe d’un individu (M ou F) et afficher le sexe
// de l’individu par le mot correspondant (Masculin ou Féminin).
// Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F.
// De plus, afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.

//Vérifier avec le corrigé éventuel si je me suis compliqué la vie en mettant trop d'étapes

var sexe;
var compteurM;
var compteurF;

compteurF = 0;
compteurM = 0;
sexe = "M"; //pour entrer dans la boucle

while (sexe.toUpperCase() === "M" || sexe.toUpperCase() === "F"){
    sexe = prompt("Veuillez entrer M ou F, selon votre genre :").toUpperCase();
    if (sexe === "M"){
        compteurM++;
        document.write(" Masculin");
    }
    else if (sexe === "F"){
        compteurF++;
        document.write(" Féminin ");
    }
}
document.write(" Masculin a été entré " + compteurM + " fois et Féminin a été entré " + compteurF + " fois.");

//Q17
// var nbGarcons = 0;
// var nbFilles =0;
// var sexe = "M";
//
// while(sexe === "M" || sexe === "F"){
//    sexe = prompt("Entrez votre sexe M ou F").toUpperCase();
//    if(sexe ==="M"){
//        nbGarcons++;
//        document.write("GARCON<br>")
//    }
//    else if(sexe ==="F"){
//        nbFilles++;
//        document.write("FILLE<br>")
//    }
// }
//
// document.write("Il y a  : " + nbGarcons + " gars");
// document.write("Il y a  : " + nbFilles + " filles");