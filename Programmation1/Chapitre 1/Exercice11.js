//Le prix de vente d’une voiture neuve est la somme du prix de base,
// d’un montant de frais et d'un montant de profit du concessionnaireet des montants taxes de ventes.
// Les frais sont de 2% du prix de base et le pourcentage du concessionnaire est de 12% du prix de base.
//et le premier montant de taxe de vente est de 5% du sous-total du prix de base
// des frais et du profit du concessionnaire et le deuxième montant de taxe est de 9,975% du prix de base,
// des frais et du profit du concessionnaire.
//Écrire l’algorithme qui lit le prix de base et qui imprime le montant de frais, le montant de commission,
// les deux montants de taxes et le prix de vente total,
// le tout sur des lignes différentes avec des messages explicites.

var prixBase;
var frais;
var profit;
var TPS;
var TVQ;
var prixTotal;

prixBase = Number(prompt("Entrez le prix de base "));
frais = Number(prixBase * 0.02);
profit = Number(prixBase * 0.12);
TPS = Number((prixBase + frais + profit) * 0.05);
TVQ = Number((prixBase + frais + profit) * 0.09975);
prixTotal = Number(prixBase + frais + profit + TPS + TVQ);

alert("Prix de base du véhicule : " + prixBase);
alert("Montant des frais : " + frais);
alert("Montant de commission : " + profit);
alert("Montant de la TPS : " + TPS);
alert("Montant de la TVQ : " + TVQ);
alert("Prix total : " + prixTotal);