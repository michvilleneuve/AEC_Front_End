//8.Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé.
// Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
// Une semaine de travail normale est de 40 heures.

var tauxHoraire;
var nbHeures;
var tempsDouble;
var salaireAvecTempsDouble;
var salaire

tauxHoraire = Number(prompt("Veuillez entrer votre salaire horaire : "));
nbHeures = Number(prompt("Veuillez entrer le nombre d'heures : "));
tempsDouble = Number((nbHeures - 40) * (tauxHoraire * 2));
salaireAvecTempsDouble = Number(tauxHoraire * 40 + tempsDouble);
salaire = Number(nbHeures * tauxHoraire);

if (nbHeures <= 40){
    document.write("Le salaire est de : " + salaire);
}
else if (nbHeures > 40){
    document.write("Le salaire est de : " + salaireAvecTempsDouble);
}
else{
    document.write ("Format invalide");
}