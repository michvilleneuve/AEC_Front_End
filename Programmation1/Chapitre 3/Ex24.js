//Ex24.js
//Code par Michèle Villeneuve
//2020/01/06

//Trouvez TOUS les nombres de Armstrong de moins de 1000
// On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.
//
// Exemple :
// 153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong.

for (var i = 1; i < 10; ++i){
    for (var j = 0; j < 10; ++j)
    {
        for (var k = 0; k < 10; ++k)
        {
            var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
            var plus = (i * 100 + j * 10 +  k);
            if (pow == plus)
            {
                console.log(pow);
            }
        }
    }
}
