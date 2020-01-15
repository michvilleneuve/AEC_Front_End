//Ex19.js
//Code par Michèle Villeneuve
//2020/01/02

//Faites afficher 2, 4, 6, 8, 10 sur 30 lignes



for (var ligne = 0;ligne < 30;ligne++){
    document.write("<br>");
    for (var i = 2;i <= 10;i+=2){
        document.write(i);
    }
}

//Q19
// for(var ligne = 0;ligne<30;ligne++){
//    for(var i =2;i<=10;i+=2){
//        document.write(i + " ");
//    }
//    document.write("<br>");
// }