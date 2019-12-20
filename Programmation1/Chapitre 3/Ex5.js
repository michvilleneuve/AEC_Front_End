//Ex5.js
//Code par Michèle Villeneuve
//2019/12/16

//var nb = Math.floor(Math.random() * 10)
//Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.

var nb;
var zero;
var un;

un = Number(0);
zero = Number(0);

for (var i =0;i < 100;i++){
     console.log(nb = Math.floor(Math.random() * 2)); //à noter qu'au début j'ai écrit i <= 100 mais ça donnait 101 shot au lieu de 100
     if(nb === 0){
          zero++;
     }
     else{
          un++;
     }
}
document.write(un + " un et " + zero + " zéro");