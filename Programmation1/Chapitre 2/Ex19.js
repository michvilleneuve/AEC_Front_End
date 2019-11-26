// Ex19.js
// Code par Michèle Villeneuve
// Date : 209/11/23

//Lire le montant de vente et afficher le montant d’escompte correspondant sachant
// que le taux d’escompte est de 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var vente;
var escompte;

vente = Number(prompt("Veuillez entrer le montant de la vente"));
escompte = Number(vente * 0.12);

if (vente >= 500){
    document.write("Le montant de l'escompte est de : " + escompte);
}
else{
    document.write("Vous n'avez pas droit à l'escompte puisque le montant de la vente est inférieur à 500 $");
}

