//13. Lire les quatre éléments d’information suivants :
//    le nom de l’étudiant,
// la note de laboratoire, (compte pour 20%)
//la note de l’examen de mi-session  (compte pour 30%)
//la note de l’examen de fin de session. (compte pour 50%)

//Toutes les notes lues sont sur 100.
//la note de laboratoire, (compte pour 20%)
//la note de l’examen de mi-session (compte pour 30%)
//la note de l’examen de fin de session. (compte pour 50%)
//Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus,
// et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.
// FORMULE = (note obtenue sur 100 / 100) * % valeur sur 100

var nomEtudiant;
var noteLab;
var examMiSession;
var examFinSession;
var noteFinale;

nomEtudiant = prompt("Veuillez entrer votre nom :");
noteLab = Number(prompt("Entrez la note de l'examen de laboratoire : "));
examMiSession = Number(prompt("Entrez la note de l’examen de mi-session : "));
examFinSession = Number(prompt("Entrez la note de l'examen de fin de session : "));
noteFinale = Number((noteLab / 100) * 20)+ Number((examMiSession / 100) * 30)+ Number((examFinSession / 100) * 50);

alert("Relevé de note pour : " + nomEtudiant);
alert("Note de l'examen de laboratoire : " + noteLab + " %");
alert("Note de l'examen de l'examen de mi-session : " + examMiSession + " %");
alert("Note de l'examen de l'examen de fin de session : " + examFinSession + " %");
alert("Note finale : " + noteFinale + " %");

