//12. Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%.
// Cette note est dérivée des trois notes suivantes : note à l’examen de mi-session qui compte pour
// 30% de la note finale, note de l’examen de fin session qui compte pour 50%
// et la note de laboratoire qui compte pour 20%.
//
// ex :
//
// Lire la note de l’examen de mi-session / 30  → 15/30
// Lire la note de l’examen final / 50 → 40/50
// Lire la note des laboratoires / 20 → 18/20
//
// La note finale est de 73%

var examMiSession;
var examFinal;
var lab;
var noteFinale;

examenMiSession = prompt("Veuillez entrez la note de l'examen de mi-session");
examFinal = prompt("Veuillez entrez la note de l'examen");
lab = prompt("Veuillez entrez la note du laboratoire");