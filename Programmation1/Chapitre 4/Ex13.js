//Ex13.js
//Codé par Michèle Villeneuve
//2020-01-20

//Lire 12 nombres quelconques et les mettre dans un tableau.
// Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15.
// Si tel est le cas, afficher ces 2 nombres.

var tab = [];

for (var i = 0;i < 12;i++){
    tab[i] = Math.floor(Math.random() * 13);
}

for (var i = 0;i < tab.length;i++){
    if ((tab[11] + tab[i]) === 15){
        document.write(" Le dernier nombre du tableau est : " + tab[11] + " et l'autre nombre est : "+ tab[i] + "<br>");
    }
}
document.write(tab);

