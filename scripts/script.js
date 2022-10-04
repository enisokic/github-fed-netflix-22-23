// variabele om te kunnen aanroepen
var completeWebsite = document.querySelector("body");
var navigatie = document.querySelector("nav");
var openButton = document.querySelector("header > button");
var sluitButton = document.querySelector("header > nav > button");
// voor de BlingBling
var blingblingButton = document.querySelector("header > button:last-of-type");

// Opent het menu door de class hoofdmenu met display: none; te verwijderen + blokkeerd het scrollen
function openMenu() {
  navigatie.classList.remove("hoofdmenu");
  completeWebsite.classList.add("stop-scroll");
}

// Hier wordt bepaald hoe de functie openMenu wordt geactiveerd
openButton.addEventListener("click", openMenu);

// Sluit het menu door de class hoofdmenu met display: none; toe te voegen + staat weer toe te scrollen
function sluitMenu() {
  navigatie.classList.add("hoofdmenu");
  completeWebsite.classList.remove("stop-scroll");
}

// Hier wordt bepaald hoe de functie sluitMenu wordt geactiveerd
sluitButton.addEventListener("click", sluitMenu);

// Display none body
function verwijderBody() {
  completeWebsite.classList.add("verdwijn");
}

// verwijderBody uitvoeren
blingblingButton.addEventListener("click", verwijderBody);
