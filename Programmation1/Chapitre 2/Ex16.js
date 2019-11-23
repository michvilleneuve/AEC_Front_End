// Ex16.js
// Code par Michèle Villeneuve
// Date : 209/11/23

//16. Lire 2 nombres au clavier.
// Si ces 2 nombres sont :
// supérieurs ou égaux à 10, affichez leur somme
// inférieurs à 10, affichez leur produit
// Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

var nb1;
var nb2;

nb1 = Number(prompt("Entrez un premier nombre :"));
nb2 = Number(prompt("Entrez un second nombre"));

if (nb1 >= 10 && nb2 >= 10){
    document.write("La somme de ces deux nombres est : " + (nb1 + nb2));
}
else if (nb1 < 10 && nb2 < 10){
    document.write("Le produit de ces deux nombres est : " + (nb1 * nb2));
}
else if (nb1 < 10 && nb2 >= 10){
    document.write("La différence entre ses deux nombres est : " + (nb2 - nb1));
}
else if (nb2 < 10 && nb1 >= 10){
    document.write("La différence entre ses deux nombres est : " + (nb1 - nb2));
}