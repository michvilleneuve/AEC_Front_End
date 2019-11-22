//10.    Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

var nbEntier;

nbEntier = Number(prompt("Entrez un nombre entre 1 et 12 :"));

if (nbEntier === 1){
    document.write("Janvier");
}
else if (nbEntier === 2){
    document.write("Février");
}
else if (nbEntier === 3){
    document.write("Mars");
}
else if (nbEntier === 4){
    document.write("Avril");
}
else if (nbEntier === 5){
    document.write("Mai");
}
else if (nbEntier === 6){
    document.write("Juin");
}
else if (nbEntier === 7){
    document.write("Juillet");
}
else if (nbEntier === 8){
    document.write("Août");
}
else if (nbEntier === 9){
    document.write("Septembre");
}
else if (nbEntier === 10){
    document.write("Octobre");
}
else if (nbEntier === 11){
    document.write("Novembre");
}
else if (nbEntier === 12){
    document.write("Décembre");
}
else{
    document.write("Format invalide");
}



