//5.  Lire un degré de température.
// Si la température est comprise entre -40 et -10 écrire :
// « HAAAAAAAAA! Il fait froid».
// Sinon, écrire « Enfin une belle journée! ».

var temp;

temp = Number(prompt("Veuillez entrer la température : "));

if (temp >= -40 && temp <= -10){
    document.write("« HAAAAAAAAA! Il fait froid»");
}

else{
    document.write("« Enfin une belle journée! »");
}