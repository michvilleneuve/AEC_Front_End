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
    somme += tabNote[i];
}
resultat = Number(somme / longueur);

for (i = 0;i< 5;i++){
    if (tabNote[i] > resultat){
        document.write(" Étudiant : " + tabNom[i] + " Note : " + tabNote[i]);
    }
}

//Q8
// var noteMoyenne;
// var tabNoms = [];
// var tabNotes = [];
//
// for(i = 0; i < 5; i++){
//  tabNoms[i] = prompt("Quel est votre nom?");
//  tabNotes[i] = Number(prompt("Quelle note avez-vous obtenu?"));
// }
// //On pourrait calculer la moyenne dans la boucle du haut aussi et //ne faire que la division en sortant de la boucle
// noteMoyenne = (tabNotes[0] + tabNotes[1] + tabNotes[2] + tabNotes[3] + tabNotes[4]) / 5;
//
// for(i = 0; i < 5; i++) {
//  if (tabNotes[i] > noteMoyenne){
//    document.write(tabNoms[i] + tabNotes[i]);
//  }
// }