// Ex21.js
// Code par Michèle Villeneuve
// Date : 209/11/26

var sexe;
var age;
var prime;
var valeur;

sexe = prompt("Entrez votre genre (H/F) : ");
age = prompt("Entrez votre âge : ");
valeur = Number(prompt("Entrez la valeur du véhicule : "));

//IMPORTANT: Il est possible de déclarer les variables rendu dans le code

if (sexe.toUpperCase() === "M"){
    if (age >= 16 && age <= 25){
        prime = valeur * 0.05;
    }
    else{
        prime = valeur * 0.03;
    }
}
else{
    if (age >= 16 && age <= 25){
        prime = valeur * 0.03;
    }
    else{
        prime = valeur * 0.02;
    }
}
document.write("Votre prime est de : " + prime);