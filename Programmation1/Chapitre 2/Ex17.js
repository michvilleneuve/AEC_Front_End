// Ex17.js
// Code par Michèle Villeneuve
// Date : 209/11/23

//Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue.
//Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.

var lettre;

lettre  = prompt("Veuillez entrer une lettre : ");

if (lettre.toUpperCase() === "A" || lettre === "E" || lettre === "I" || lettre === "O" || lettre === "U" || lettre === "Y"){
    document.write("Voyelle");
}
else{
    document.write("Consonne");
}