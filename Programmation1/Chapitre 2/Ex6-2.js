// Ex21.js
// Code par Michèle Villeneuve
// Date : 209/11/23

//6.   Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 89 : B
// Entre 70 et 79 : C
// Entre 60 et 69 : D
// Moins de 60 : E

//faire en partant de la lettre E

var note;

note = Number(prompt("Veuillez entrer votre note : "));

if (note < 60){
    document.write("E");
}
else if (note >= 60 && note <= 69){
    document.write("D");
}
else if (note >= 70 && note <= 79){
    document.write("C");
}
else if (note >= 80 && note <= 89){
    document.write("B");
}
else if (note >= 90){
    document.write("A");
}