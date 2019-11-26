// Ex21.js
// Code par Michèle Villeneuve
// Date : 209/11/26

//Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur


var fontColor;
var backgroundColor;

fontColor = prompt("Veuillez choisir une couleur de texte parmi bleu, orange et gris : ");
backgroundColor = prompt("Veuillez entrer une couleur d'arrière-plan parmi blanc, mauve et jaune : ");

if (fontColor === "bleu"){
    console.log("%cBleu", "color:blue");
}
else if (fontColor === "orange"){
    console.log("%cOrange", "color:orange");
}
else if (fontColor === "gris"){
    console.log("%cGris", "color:gray");
}

if (backgroundColor === "blanc"){
    console.log("%cBlanc", "background:white");
}
else if (backgroundColor === "mauve"){
    console.log("%cMauve", "background:purple");
}
else if (backgroundColor === "jaune"){
    console.log("%cJaune", "background:yellow");
}


