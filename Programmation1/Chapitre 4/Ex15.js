//Ex15.js
//Codé par Michèle Villeneuve
//2020-01-20

//Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.

var tab = [];

tab[0] = prompt("Entrez une première valeur : ");
tab[1] = prompt("Entrez une deuxième valeur : ");

[tab[0], tab[1]] = [tab[1], tab[0]];

document.write(tab);