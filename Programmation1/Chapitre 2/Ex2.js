//2.Un marchand décide d’accorder une réduction de 15% à tout acheteur,
//si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit,
//connaissant le montant total des achats.

var totalAchat;
var reduction;

totalAchat = Number(prompt("Veuillez entrer le montant total de vos achats : "));
reduction = Number(totalAchat * 0.15);

if (totalAchat < 200){
    document.write("Vous n'avez pas droit à la réduction");
}
else{
    document.write("Vous avez économisé : " + reduction);
}