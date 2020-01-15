//Ex20.js
//Code par Michèle Villeneuve
//2020/01/05

//Faites afficher 10 8 6 4 2 0 sur 12 lignes


for (var ligne = 0;ligne < 12;ligne++){
    document.write("<br>");
    for (var i = 10;i > -1;i = i - 2){
        document.write(i);
    }
}

//Q20
// for(var ligne = 0;ligne<12;ligne++){
//    for(var i =10;i>=0;i-=2){
//        document.write(i + " ");
//    }
//    document.write("<br>");
// }