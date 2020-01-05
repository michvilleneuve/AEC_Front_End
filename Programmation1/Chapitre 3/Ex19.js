//Ex19.js
//Code par Michèle Villeneuve
//2020/01/02

//Faites afficher 2, 4, 6, 8, 10 sur 30 lignes

var i;
var j;

for (j = 0;j < 30;j++){
    document.write("<br>");
    for (i = 2;i <= 10;i+=2){
        document.write(i);
    }
}