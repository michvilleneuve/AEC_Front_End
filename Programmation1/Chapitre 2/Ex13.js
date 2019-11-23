// Ex13.js
// Code par Michèle Villeneuve
// Le 209/11/23

//13. Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

var a;
var b;

a = Number(prompt("Veuillez entrer un premier nombre"));
b = Number(prompt("Veuillez entrer un second nombre"));

if (a > b){
    document.write("Le plus grand nombre est : " + a + " et le plus petit nombre est : " + b);
}
else if (a < b){
    document.write("Le plus petit nombre est : " + a + " et le plus grand nombre est : " + b);
}
else if (a === b){
    document.write("ERROR");
}

