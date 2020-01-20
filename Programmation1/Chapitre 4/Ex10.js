//Ex10.js
//Codé par Michèle Villeneuve
//2020-01-18

// Le collège offre 6 options aux étudiants. Ces options sont :
// A. INFORMATIQUE
// B. ADMINISTRATION
// C. HISTOIRE
// D. GÉNIE
// E. GEOGRAPHIE
// F. BUREAUTIQUE
//
// Mettre ces options dans un tableau,
// puis demander à un étudiant d’entrer un nom d’option. Vous lui répondez si OUI ou NON le collège offre cette option.

var option = ["INFORMATIQUE", "ADMINISTRATION", "HISTOIRE", "GÉNIE", "GÉOGRAPHIE", "BUREAUTIQUE"];
var choix;
var reponse;

choix = prompt("Entrez votre option : ").toUpperCase();

if (option.includes(choix)) {
    reponse = "Le cours est offert";
} else {
    reponse = "Le cours n'est pas offert";
};
document.write(reponse);

//RÉPONSE DU CORRIGÉ
// var options = ["INFORMATIQUE","WEB","RESEAUTIQUE","CSS"];
// var choix = prompt("Entrez une option pour valider si le cours est offert : ").toUpperCase();
// var trouver = false;
//
// for(var i =0;i<options.length;i++){
//  if (choix === options[i]){
//    trouver = true;
//  }
// }
//
// if(trouver){
//  document.write("Le cours est offert");
// }
// else{
//     document.write("Le cours n'est pas offert");
// }