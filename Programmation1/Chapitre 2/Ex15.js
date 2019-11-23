// Ex15.js
// Code par Michèle Villeneuve
// Le 209/11/23

//15. Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.
// surface = L * l
// perimètre = (L + l) * 2

var surface;
var perimetre;
var longueur;
var largeur;

longueur = Number(prompt("Veuillez entrer la longueur du rectangle :"));
largeur = Number(prompt("Veuillez entrer la largeur du rectangle :"));
surface = Number(longueur * largeur);
perimetre = Number((longueur * largeur) * 2);


if (perimetre > 100){
    document.write("La surface du rectangle et de " + surface);
}
else{
    document.write("Le périmètre du rectangle doit être d'au moins 100 pour que la surface soit calculée");
}
