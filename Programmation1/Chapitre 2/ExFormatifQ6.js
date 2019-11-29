
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
var nbMoteur;
var camUSB;
var matriceLEDS;
var prix;
var prixLivraison;

controleur = Number(prompt("veuillez choisir entre le RaspBerry Pi (1) et le RaspBerry Pi (2) : "));
nbMoteur = Number(prompt("Veuillez choisir le nombre de moteur désiré (entre 2 et 24) : "));
camUSB = prompt("Voulez-vous une caméra USB ? Répondre par O ou N");
matriceLEDS = prompt("Voulez-vous une matrice LEDS ? Répondre par O ou N");
prixLivraison = 0.15;
prix = (controleur + (nbMoteur * 5) + camUSB + matriceLEDS + prixLivraison + 15 + 20); //à travailler

if (controleur === 1){
    controleur = 55;
}
else {
    controleur = 15;
}
if (matriceLEDS === "O"){
    matriceLEDS = 10;
}
else{
    matriceLEDS = 0;
}

