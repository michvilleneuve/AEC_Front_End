
//     Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.
//
//     L’usager doit sélectionner le contrôleur
// 55$ pour un RaspBerry Pi
// 15$ pour un Raspberry Pi Zero
//
// L’usager doit décider du nombre de moteurs entre 2 et 24.
// Un moteur coûte 5$
//
// L’usager décide s’il veut une caméra USB ou non
// La caméra coûte 35$
//
// L’usager décide s’il veut une matrice de LEDS pour les yeux
// La matrice coûte 10$ pour les deux yeux.
//
//     Il faut ensuite ajouter 20$ pour le filament 3D.
//     Il faut ajouter 15$ pour la batterie USB.
//
//
//     RasPiBot aimerait que votre programme affiche
//
// un résumé de l’achat
// ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
// le prix
// le prix avec la livraison de 15%.

var controleur;
var prixControleur;
var nbMoteur;
var camUSB;
var matriceLEDS;
var prix;
var prixCamUSB;
var prixMatriceLEDS;

controleur = Number(prompt("veuillez choisir entre le RaspBerry Pi (1) et le RaspBerry Pi Zero (2) : "));
nbMoteur = Number(prompt("Veuillez choisir le nombre de moteur désiré (entre 2 et 24) : "));
camUSB = prompt("Voulez-vous une caméra USB ? Répondre par O ou N");
matriceLEDS = prompt("Voulez-vous une matrice LEDS ? Répondre par O ou N");
prix = (prixControleur + (nbMoteur * 5) + prixCamUSB + prixMatriceLEDS + 15 + 20);

if (controleur === 1){
    prixControleur = 55;
    controleur = "Robot avec RaspBerry Pi ";
}
else {
    prixControleur = 15;
    controleur = "Robot avec RaspBerry Pi Zero "
}

if (camUSB.toUpperCase === "O"){
    prixCamUSB = 35;
}
else{
    prixCamUSB = 0;
    camUSB = "Pas de caméra USB";
}

if (matriceLEDS.toUpperCase === "O"){
    prixMatriceLEDS = 10;
}
else{
    prixMatriceLEDS = 0;
    matriceLEDS = "Pas de matrice LEDS";
}
document.write(controleur + nbMoteur + " moteurs " + camUSB + prixMatriceLEDS);
document.write("Prix : " + prix + "$");
document.write("Prix avec livraison : " + (prix * 0.15) + " $");




