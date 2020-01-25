//Ex16.js
//Codé par Michèle Villeneuve
//2020-01-20

//Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
// Par la suite, lire une nouvelle valeur et afficher toutes les valeurs lues
// dans l’ordre en ajoutant la nouvelle valeur à la bonne place.

var tab = [];

for (var i = 0;i < 10;i++){
tab[i]= prompt("Veuillez entrer des nombres en ordre numérique ascendant : ")
}
tab.push(prompt("Veuillez entrer un dernier nombre : "));
document.write(tab);