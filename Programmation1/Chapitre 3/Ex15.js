//Ex15.js
//Code par Michèle Villeneuve
//2019/12/30

//Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.

var nb;
var nbNegatif;
var nbPositif;

nbNegatif = 0;
nbPositif = 0;

while (nb != 0){
    nb = prompt("Veuillez entrer un nombre :");
    if (nb < 0){
        nbNegatif++;
    }
        else if (nb > 0){
            nbPositif++;
    }
}
document.write(nbNegatif + " nombres négatifs ont été entrés et " + nbPositif + " nombres positifs ont été entrés.");