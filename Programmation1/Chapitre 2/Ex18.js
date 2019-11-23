// Ex18.js
// Code par Michèle Villeneuve
// Date : 209/11/23

//Lire une note d’examen et afficher « Échec » si la note est inférieure à 60
// et « Bravo » si la note est supérieure ou égale à 60.

var note

note = Number(prompt("Veuillez entrer votre note d'examen"));

if (note >= 60){
    document.write("Bravo");
}
    else{
        document.write("Échec");
    }
