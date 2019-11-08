//Lire le nom et l'âge d'un individu, puis convertir son âge en jours (approximatif).
// Imprimer un message incluant son nom pour l'informer du nombre de jours vécus.

var nom;
var age;
var agejours

nom = prompt ("Entrez votre nom :");
age = prompt ("Entrez votre âge : ");
agejours = age * 365;

console.log (nom + ", vous avez " +  agejours + " jours de vie");