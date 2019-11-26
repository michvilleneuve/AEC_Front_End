// Ex21.js
// Code par Michèle Villeneuve
// Date : 209/11/23

//Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $13999.00 inclus : $1120 + 19.5% du reste
// >14000 et $22999.00 inclus : $2485 + 21.5% du reste
// >23000 et $49,999.00 inclus : $4420 + 24.5% du reste
// >50000 et : $11035 + 26% du reste.

var salaire;

salaire = Number(prompt("Veuillez entrer votre salaire annuel brut : "));

if (salaire >= 0 && salaire <= 6999){
    document.write("Le montant que vous devrez débourser en impôt est de : " + (salaire * 0.16));
}
else if (salaire >= 7000 && salaire <= 13999){
    document.write("Le montant que vous devrez débourser en impôt est de : " + (salaire * 0.195 + 1120));
}
else if (salaire >= 14000 && salaire <= 22999){
    document.write("Le montant que vous devrez débourser en impôt est de : " + (salaire * 0.215 + 2485));
}
else if (salaire >= 23000 && salaire <= 49999){
    document.write("Le montant que vous devrez débourser en impôt est de : " + (salaire * 0.245 + 4420));
}
else if (salaire >= 50000){
    document.write("Le montant que vous devrez débourser en impôt est de : " + (salaire * 0.26 + 11035));
}