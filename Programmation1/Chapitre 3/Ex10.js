//Ex10.js
//Code par Michèle Villeneuve
//2019/12/19

//Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

var i;

for (i = Number(5);i <=100;i+=5){
    document.write("Avant taxes " + i + " $ ");
    document.write("Après taxes " + ((i * 0.09) + i) + " $ " + "<br>");
}