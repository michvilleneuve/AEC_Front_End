//9. Faire un programme qui lit un nom d’utilisateur et un mot de passe.
// Si le nom d’utilisateur est “admin” et le mot de passe “12345”,
// affichez le message suivant : « Bonjour [nom de l’utilisateur] ».
// Si les informations ne sont pas correctes, affichez le message suivant :
// « Votre nom d’utilisateur ou votre mot de passe est invalide ».

var username;
var password;

username = prompt("Entrez votre nom d'utilisateur");
password = prompt("Entrez votre mot de passe");

if (username === "admin" && password === "12345"){
    document.write("Bonjour " + username);
}
else{
    document.write("Votre nom d’utilisateur ou votre mot de passe est invalide ");
}