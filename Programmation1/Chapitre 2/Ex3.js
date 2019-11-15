//3.  Lire deux nombres
//    si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR »
//    et si tel n’est pas le cas écrire « BONSOIR ».

var nb1;
var nb2;

nb1 = prompt("Veuillez entrer un premier nombre : ");
nb2 = prompt("veuillez entrer un second nombre");

if (nb1 && nb2 > 9){
    document.write("BONJOUR");
}

else{
    document.write("BONSOIR");
}