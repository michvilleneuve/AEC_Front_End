//Ex12.js
//Codé par Michèle Villeneuve
//2020-01-18

//Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
// Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10.
//*Cet exercice a bien été

var resultat = ["vrai", "vrai", "faux", "vrai", "faux", "faux", "vrai", "vrai", "faux", "vrai"];
var repEtudiant;
var tabRep = [0];
var note = 0;

for (var i = 0;i < 10;i++){
    repEtudiant = prompt("Entrez votre réponse : ");
    tabRep[i] = repEtudiant;
    if(resultat[i] === tabRep[i]){
        note++
    }
}
document.write("Vous avez eu une note de " + note + "/10");