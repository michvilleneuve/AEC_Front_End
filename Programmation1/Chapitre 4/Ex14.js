//Ex14.js
//Codé par Michèle Villeneuve
//2020-01-20

//Lire 12 nombres quelconques et vérifier si deux de ces nombres font une somme de 15
// Si tel est le cas, affichez ces deux nombres.

var tab = [];

for (var i = 0;i < 12;i++){
    tab[i] = Math.floor(Math.random() * 13);
}

document.write(tab + "<br>");

for (var i = 0;i < tab.length;i++){
    for (var j = i; j < tab.length; j++)
    if (tab[j] + tab[i] === 15){
        document.write("Premier chiffre : " + tab[i] + " deuxième chiffre : "+ tab[j] + "<br>");
    }
}
