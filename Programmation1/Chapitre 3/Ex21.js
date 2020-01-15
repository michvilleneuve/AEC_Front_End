//Ex21.js
//Code par Michèle Villeneuve
//2020/01/05

//Faire afficher 1 3 5 7 9 11 sur 13 lignes

var i;
var j;

for (j = 0;j < 13;j++){
    for (i = 1;i <= 11;i+=2){
        document.write(i);
    }
    document.write("<br>");
}

//Q21
// for(var ligne = 0;ligne<10;ligne++){
//    for(var i =1;i<=11;i+=2){
//        document.write(i + " ");
//    }
//    document.write("<br>");
// }