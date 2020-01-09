//Ex23.js
//Code par Michèle Villeneuve
//2020/01/06

//Créez un programme qui lit un nombre et affiche tous les chiffres de ce nombre séparément dans les deux sens.


var i = 0;
var str="YourString";
var temp = str.split("");
var reversestr = temp.reverse();

for (var i = 0, len = reversestr .length; i < len; i++) {
    document.write(reversestr [i] + "<br />");
}



