// ExFormatifQ6.js
// // Codé par Michèle Villeneuve
// // Date : 2019/12/01

var controleur;
var prixControleur;
var nbMoteur;
var camUSB;
var matriceLEDS;
var prixCamUSB;
var prixMatriceLEDS;
var total;
var totalLivraison;

controleur = (prompt("veuillez choisir entre le RaspBerry Pi (1) et le RaspBerry Pi Zero (2) : "));
nbMoteur = prompt("Veuillez choisir le nombre de moteur désiré (entre 2 et 24) : ");
camUSB = prompt("Voulez-vous une caméra USB ? Répondre par O ou N");
matriceLEDS = prompt("Voulez-vous une matrice LEDS ? Répondre par O ou N");

//Choix du robot

if (controleur === "1"){
    prixControleur = Number(55);
    controleur = "Robot RaspBerry Pi ";
}
else {
    prixControleur = Number(15);
    controleur = "Robot RaspBerry Pi Zero";
}

//Avec ou sans caméra USB

if (camUSB.toUpperCase() === "O"){
    prixCamUSB = Number(35);
    camUSB = ", avec caméra USB ";
}
else{
    prixCamUSB = Number(0);
    camUSB = ", pas de caméra USB ";
}

//Avec ou sans matrice LEDS

if (matriceLEDS.toUpperCase() === "O"){
    prixMatriceLEDS = Number(10);
    matriceLEDS = ", avec matrice LEDS ";
}
else{
    prixMatriceLEDS = Number(0);
    matriceLEDS = ", pas de matrice LEDS ";
}

total = Number(prixControleur + (nbMoteur * 5) + prixCamUSB + prixMatriceLEDS + 15 + 20);
totalLivraison = Number(total * 0.15 + total );

document.write(controleur + nbMoteur + " moteurs" + camUSB + matriceLEDS);
document.write("Prix : " + total + " $ ");
document.write("Prix avec livraison : " + totalLivraison + " $");




