//Ex16.js
//Code par Michèle Villeneuve
//2019/12/30

//Faire un programme qui boucle 10 fois.
// À toutes les itérations, votre programme génère un nombre aléatoire entre 0 et 1
// et vous demande aussi de choisir un nombre entre 0 et 1.
// Si le nombre est identique, vous gagnez, perdez sinon.
// Vous affichez le pointage à la fin des 10 itérations.

var nbJoueur;
var nbAleatoire;
var point;

point = 0;

for (i = 0;i < 10;i++){
    nbJoueur = prompt("Veuillez entrer 1 ou 0 :");
    nbAleatoire = Math.floor(Math.random() * 2);
    if (nbJoueur == nbAleatoire){
        point++;
    }
}
document.write("Vous avez gagné " + point + " fois");

//Q16
// var nbVictoires = 0;
// var nbDefaites =0;
// var nbJoueur;
// var nbAleatoire;
//
// for(var i=0;i<=9;i++){
//    nbAleatoire = Math.floor(Math.random()*2);
//    nbJoueur = Number(prompt("0 ou 1"));
//
//    if(nbJoueur === nbAleatoire)
//        nbVictoires++;
//    else
//        nbDefaites++;
// }
//
// document.write("Vous avez gagné : " + nbVictoires + " fois");
// document.write("Vous avez perdu : " + nbDefaites + " fois");