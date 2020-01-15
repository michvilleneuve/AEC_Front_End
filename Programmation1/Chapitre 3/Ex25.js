//Ex25.js
//Code par Michèle Villeneuve
//2020/01/06

//Trouvez les nombres parfaits
// On souhaite écrire un programme qui calcule les premiers nombres parfaits.
// Un nombre est dit parfait s’il est égal à la somme de ses
// diviseurs, 1 compris.
//
// Exemple : 6 = 1+2+3 , est un nombre parfait.

//Q25

somme = 0;

for(var nb=1;nb<10000;nb++){
    for(var diviseur = 1; diviseur < nb;diviseur++){
        if(nb % diviseur === 0){
            //document.write(diviseur + " est un diviseur de " + nb + "<br>");
            somme+=diviseur;
        }
    }
    if(somme === nb){
        document.write(nb + " est un nombre parfait!<br>");
    }
    somme = 0;
}
