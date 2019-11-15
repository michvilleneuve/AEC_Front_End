//6.   Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E

var lettre;

lettre = prompt("Veuillez entrer la note obtenue : ");

if (lettre >= 90){
    document.write("A");
}
else if (lettre >= 80 && <= 89){
    document.write("B");
}
else if (lettre <= 70 && <= 79){
    document.write("C");
}