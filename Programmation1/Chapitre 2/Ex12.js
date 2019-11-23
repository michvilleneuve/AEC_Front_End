// Exl2.js
// Programmé par Michèle  Villeneuve
// 2019/11/23

//Calculer le prix des assurances pour un véhicule.
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
// S’il est plus vieux, le taux sera de 3 %.
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

var sexe;
var age;
var prixVoiture;

sexe = prompt("Sexe (h/f) : ");
age = Number(prompt("Âge : "));
prixVoiture = prompt("Prix de la voiture : ");

// Prix garçon

if (sexe === "h"){
    if (age <= 25 && >= 16){
        document.write("Vos assurances seront de : " + (prixVoiture * 0.05));
    }
}
else if (sexe === "h"){
    if (age > 25){
        document.write("Vos assurances seront de : " + (prixVoiture * 0.03));
    }
}
// Prix fille

if (sexe === "f"){
    if (age <= 25 && >= 16){
        document.write("Vos assurances seront de : " + (prixVoiture * 0.03));
    }
}
else if (sexe === "h"){
    if (age > 25){
        document.write("Vos assurances seront de : " + (prixVoiture * 0.02));
    }
}