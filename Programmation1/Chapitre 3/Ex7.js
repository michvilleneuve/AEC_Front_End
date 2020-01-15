//Ex7.js
//Code par Michèle Villeneuve
//2019/12/19

//Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
//  a) Comptez et affichez le nombre de mots entrés avant le mot patate.

var mot;
var compteur = Number(-1); //J'ai mis la valeur à -1 car si le premier mot entré est patate, le nombre doit etre zéro

// J'ai mis mon "mot = prompt("Entrez un mot : ");" ici par erreur, il doit aller dans la boucle

while (mot != "patate"){
    mot = prompt("Entrez un mot : ");
    compteur++;
    document.write(mot + "<br>");
}
document.write(" " + compteur + " mots ont été entrés avant le mot patate");