//Ex8.js
//Codé par Michèle Villeneuve
//2020-01-16


//Lire les noms et notes d’examen d’une classe de 5 élèves.
// Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.

var nom;
var note;
var tabNom = [];
var tabNote = [];
var somme = 0;
var longueur = tabNote.length;
var resultat;

for (var i = 0;i < 5;i++){
    nom = prompt("Entrez votre nom : ");
    note = Number(prompt("Entrez votre note : "));
    tabNom = [nom];
    tabNote = [note];
    somme+= tabNote[note];
    resultat = (somme / longueur);
}
document.write(resultat);
