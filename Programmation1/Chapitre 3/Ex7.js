//Ex7.js
//Code par Michèle Villeneuve
//2019/12/19

//Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
//  a) Comptez et affichez le nombre de mots entrés avant le mot patate.

var mot;
var compteur = Number(0);


mot = prompt("Entrez un mot : ");

while (mot !== "patate"){
    compteur++;
    document.write(mot);
}
document.write(compteur);