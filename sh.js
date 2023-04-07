document.getElementById("help").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    let nom = document.getElementById("nameinput");
    let email = document.getElementById("emailinput");
    

if (!nom.value) {
    erreur = "Veuillez saisir un nom";
}
if (!email.value) {
    erreur = "Veuillez saisir un email";
}

    

if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else{
    alert("Veuiller patienter pour utiliser le panier!");
}
  
});