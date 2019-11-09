//Exercice 10
// Faire l’algorithme qui permet de calculer la facture d’un client.
// Cette facture contient la date, le montant de chacun des 3 articles achetés,
// les taxes de vente et le grand total de la facture.
// Vous demandez à l'usager la date et le montant de chacun des 3 articles achetés.
// Le montant de TPS est de 5% et la TVQ est de 9.975%.
// Vous affichez la date, les 2 montants de taxes et le grand total.

var article1;
var article2;
var article3;
var date;
var TPS;
var TVQ;
var sousTotal;
var total;

date = prompt("Entrez la date de l'achat");
article1 = Number(prompt("Entrez le prix de l'article 1"));
article2 = Number(prompt("Entrez le prix de l'article 2"));
article3 = Number(prompt("Entrez le prix de l'article 3"));
sousTotal = article1 + article2 + article3;
TVQ = sousTotal * 0.09975;
TPS = sousTotal * 0.05;
total = sousTotal + TPS + TVQ;

console.log ("Date de l'achat : " + date)
console.log ("La TVQ est de : " + TVQ);
console.log ("La TPS est de : " + TPS);
console.log ("Le montant total est de " + total);