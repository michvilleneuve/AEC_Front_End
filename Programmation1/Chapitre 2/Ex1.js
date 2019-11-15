//  Lire deux nombres et afficher le plus grand des deux.

var nb1;
var nb2;

nb1 = Number(prompt("Veuillez entrer le premier nombre : "));
nb2 = Number(prompt("Veuillez entrer le deuxième nombre : "));

if (nb1 > nb2){
    document.write("Le premier nombre est plus grand");
}
else (nb1 < nb2){
    document.write("Le deuxième nombre est plus grand");
}

