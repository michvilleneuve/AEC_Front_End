//7. Lire un nombre au clavier.
// Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nb;

nb = Number(prompt("Veuillez entrer un numéro : "));

if (nb < 0){
    document.write("Négatif");
}
else if (nb === 0){
    document.write("Zéro");
}
else if (nb > 0){
    document.write("Positif");
}

