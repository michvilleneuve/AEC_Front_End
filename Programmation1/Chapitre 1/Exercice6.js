//Faites un programme qui lit le nom d'un article et son prix de détail. Votre programme doit afficher le prix de gros
// (66 % du prix de détail) ainsi que le profit attendu.

var article;
var prix;
var prixgros;
var profit;

article = prompt ("Entrez le nom de l'article");
prix = prompt ("Entrez le prix de l'article");
prixgros = prix * 0.66;
profit = prix - prixgros;

console.log ("prix de gros pour " + article + " est de "+ prixgros + " $ et " + profit + " $ de profit");