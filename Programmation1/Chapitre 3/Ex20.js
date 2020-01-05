//Ex20.js
//Code par Michèle Villeneuve
//2020/01/05

//Faites afficher 10 8 6 4 2 0 sur 12 lignes

var i;
var j;

for (j = 0;j < 12;j++){
    document.write("<br>");
    for (i = 10;i > -1;i = i - 2){
        document.write(i);
    }
}