//Ex9.js
//Code par Michèle Villeneuve
//2019/12/19

//9. Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.

// var i; je peux déclarer ma variable juste dans mon for

//formule = Number((i - 32) * 5/9);

var fahrenheits;

for (var i = 10; i <= 20; i++){
    fahrenheits = (i * (9/5)) + 32;
    document.write(i + " Celsius = " + fahrenheits.toFixed(2) + " Fahrenheits<br>");
}


// Q9
// CORRIGÉ
// Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.

// var fahrenheits;
// for(var c=10;c<=20;c++){
//    fahrenheits = (c * (9/5)) + 32;
//    document.write(c + " Celcius = " + fahrenheits.toFixed(2) + " Fahrenheits<br>");
// }