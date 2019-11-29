// QUESTION 5 (4 points)
//
// Écrire le code qui permet de lire au clavier la valeur d’un angle d’une main de robot et d’afficher sa position.
// Pour faire ce choix, utilisez la table  suivante :
//
//
//position à afficher		 angle
//
// Main fermée	             0 <= angle <= 39
// Main agrippe		         40 <= angle <= 89
// Main ouverte		         90 <= angle <= 180
//
// Si l’angle ne contient aucune de ces valeurs, alors affichez ″Le robot est hors de contrôle″.

var valeurAngle;
var position;

valeurAngle = Number(prompt("Entrez la valeur de l'angle : "));

if (valeurAngle >= 0 && valeurAngle <= 39){
    position = "main fermée";
}
else if (valeurAngle >= 40 && valeurAngle <= 89){
    position = "main agrippe";
}
else if (valeurAngle >= 90 && valeurAngle <= 180){
    position = "main ouverte";
}
else{
    position = "Le robot est hors de contrôle"
}
document.write(position);