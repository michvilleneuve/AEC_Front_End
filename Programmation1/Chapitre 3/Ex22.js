//Ex22.js
//Code par Michèle Villeneuve
//2020/01/05

//Faire afficher

//[0,0] [0,1] [0,2] [0,3] [0,4] [0,5]
// [1,0] [1,1] [1,2] [1,3] [1,4] [1,5]
// [2,0] [2,1] [2,2] [2,3] [2,4] [2,5]
// [3,0] [3,1] [3,2] [3,3] [3,4] [3,5]

for (var i = 0;i <= 5;i++){
    document.write("<br>");
    for (var j = 0;j <= 5;j++){
        document.write("[" + i + "," + j + "]");
    }
}

//Q22
// for(var i=0;i<=5;i++){
//     for(var j=0;j<=5;j++){
//         document.write("[" + i + "," + j + "] " );
//     }
//     document.write("<br>");
// }