// Ex13.jc
// Code par Michèle Villeneuve
// Le 209/11/23

//14. Lire 3 nombres A, B et C différents.
// Trouver et afficher le plus petit et le plus grand.

var a;
var b;
var c;

a = Number(prompt("Entrez un nombre :"));
b = Number(prompt("Entrez un nombre :"));
c = Number(prompt("Entrez un nombre :"));

// Si le nombre A est le plus grand

if (a > b && a > c){
    if (b > c){
        document.write("Le plus petit nombre est : " + c + " et le plus grand nombre est : " + a);
    }
    else{
            document.write("Le plus petit nombre est : " + b + " et le plus grand nombre est : " + a);
        }
}

// Si le nombre B est le plus grand

if (b > a && b > c){
    if (a > c){
        document.write("Le plus petit nombre est : " + c + " et le plus grand nombre est : " + b);
    }
    else{
        document.write("Le plus petit nombre est : " + a + " et le plus grand nombre est : " + b);
    }
}

// Si le nombre C est le plus grand

if (c > a && c > b){
    if (a > b){
        document.write("Le plus petit nombre est : " + b + " et le plus grand nombre est : " + c);
    }
    else{
        document.write("Le plus petit nombre est : " + a + " et le plus grand nombre est : " + c);
    }
}