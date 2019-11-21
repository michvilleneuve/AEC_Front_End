//6.   Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E

var note;

note = Number(prompt("Veuillez entrer la note obtenue : "));

if (note >= 90){
    document.write("A");
}
else if (note >= 80 && note<= 89){
    document.write("B");
}
else if (note >= 70 && note<= 79){
    document.write("C");
}
else if (note >= 60 && note<= 69){
    document.write("D");
}
else if (note < 60){
    document.write("E");
}
else{
    document.write("format non-valide");
}
