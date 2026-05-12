document.addEventListener("DOMContentLoaded", () => {
  const descriptions = {
    "droit.jpg": "La Faculté de Droit propose des formations en droit public, droit privé et droit des affaires.",
    "lettres.jpg": "La Faculté de Lettres offre des parcours en langues, littérature et sciences humaines.",
    "sciences.jpg": "La Faculté de Sciences regroupe des formations scientifiques et techniques adaptées aux métiers d'aujourd'hui.",
    "pontivy.jpg": "L'IUT de Pontivy forme aux compétences technologiques et professionnelles dans plusieurs spécialités.",
    "iut vannes.jpg": "L'IUT de Vannes propose des cursus professionnalisants en phase avec les besoins des entreprises.",
    "ensibs_lorient.jpg": "L'ENSIBS de Lorient prépare des ingénieurs dans des domaines techniques et innovants.",
    "iae.jpeg": "L'IAE Bretagne Sud proposeune offre de formation diversifiée, allant de la 1ère année de Licence au Doctorat, en adéquation avec les besoins des entreprises, pour préparer les manageurs de demain."
  };
  const zone = document.getElementById("description-text");
  document.addEventListener("click", (e) => {
    const image = e.target.closest("img");

    if (!image) {
      return;
    }

    const nom = image.getAttribute("src").split("/").pop();
    zone.textContent = descriptions[nom] || "Aucune description disponible.";
  });
});