function AffichageTexte() {
    document.getElementById("Adresse").style.fontSize="20px";
    document.getElementById("Adresse").style.color="red";
    document.getElementById("Adresse").style.backgroundColor= "lightblue";  // Couleur de fond transparente bleu clair
    document.getElementById("Adresse").innerHTML="<h1>Adresse : 17 Bd Flandres Dunkerque 1940, 56100 Lorient</h1>";
}
document.getElementById("button-Consultation").addEventListener("click", function () {
    document.getElementById("Consultation").textContent =
    new Date().toLocaleString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
});     