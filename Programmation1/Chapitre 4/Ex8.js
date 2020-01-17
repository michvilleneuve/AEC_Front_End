//Ex8.js
//Codé par Michèle Villeneuve
//2020-01-16


//Lire les noms et notes d’examen d’une classe de 5 élèves.
// Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.

var tabNom = [];
var tabNote = [];
var somme = 0;
var longueur;
var resultat;

for (var i = 0;i < 5;i++){
    tabNom[i] = prompt("Entrez votre nom : ");
    tabNote[i] = Number(prompt("Entrez votre note : "));
    longueur = tabNote.length;
}
resultat = Number(tabNote / longueur);
document.write(resultat);
