//Ex12.js
//Code par Michèle Villeneuve
//2019/12/19
// NOTE : A ÉTÉ DIFFICILE. Utilisation du += et ajout de la multiplication du dépot APRÈS l'affichage

//Le premier jour de l'ouverture de votre compte, vous déposez .01 .
// À chaque jour pendant 10 jours, vous déposez le double de la veille.
// Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte.


var jour;
var depot;
var solde;

depot = 0.01;
solde = 0;

for (jour = 1;jour <= 10;jour++){
    solde += depot; // += équivaut à solde = solde + depot
    document.write("Jour" + jour + " " + depot + " solde : " + solde.toFixed(2) + "<br>")
    depot = depot * 2; //cette ligne est écrite à la fin car sinon elle faussera le résultat voulu
}


