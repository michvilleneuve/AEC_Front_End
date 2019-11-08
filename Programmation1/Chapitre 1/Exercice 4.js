//Calculer le salaire brut d'un employé.
// Il est payé à l'heure et les données concernant le taux horaire et le nombre d'heures travaillées sont fournies en entrée

var salaireHoraire
var heureTravail
var salaireBrut

salaireHoraire = prompt ("Entrez votre salaire horaire")
heureTravail = prompt ("Entrez votre nombre d'heures travaillées")
salaireBrut = salaireHoraire * heureTravail

console.log ("Votre salaire brut est de " + salaireBrut);

