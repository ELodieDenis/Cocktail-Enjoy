// BODY
// Gérer le bouton "menu-icone" et "fermeture-menu-icone"
const menuIcone = document.querySelector(".menu-icone");
const navBar = document.querySelector(".navbar");
const imgClose = document.querySelector(".fermeture-menu-icone");

menuIcone.addEventListener("click", function () {
  menuIcone.style.display = "none";
  imgClose.style.display = "flex";
  navBar.style.display = "flex";
});

imgClose.addEventListener("click", function () {
  navBar.style.display = "none";
  menuIcone.style.display = "flex";
  imgClose.style.display = "none";
});

// Gérer l'apparition du rectangle pour le détail des cocktails
const rectangle1 = document.querySelector(".rectangle1");
const rectangle2 = document.querySelector(".rectangle2");
const rectangle3 = document.querySelector(".rectangle3");
const rectangle4 = document.querySelector(".rectangle4");
const rectangle5 = document.querySelector(".rectangle5");

const cocktail_piment = document.querySelector(".cocktail_piment");
const cocktail_rhum = document.querySelector(".cocktail_rhum");
const cocktail_fruit_de_la_passion = document.querySelector(
  ".cocktail_fruit_de_la_passion"
);
const cocktail_menthe_citron = document.querySelector(
  ".cocktail_menthe_citron"
);
const cocktail_rose = document.querySelector(".cocktail_rose");

// Pour le "cocktail piment"
cocktail_piment.addEventListener("mouseover", function () {
  rectangle1.style.display = "flex";
});

cocktail_piment.addEventListener("mouseout", function () {
  rectangle1.style.display = "none";
});

// Pour le "cocktail rhum"
cocktail_rhum.addEventListener("mouseover", function () {
  rectangle2.style.display = "flex";
});

cocktail_rhum.addEventListener("mouseout", function () {
  rectangle2.style.display = "none";
});

// Pour le "cocktail fruit de la passion "
cocktail_fruit_de_la_passion.addEventListener("mouseover", function () {
  rectangle3.style.display = "flex";
});

cocktail_fruit_de_la_passion.addEventListener("mouseout", function () {
  rectangle3.style.display = "none";
});

// Pour le "cocktail menthe citron "
cocktail_menthe_citron.addEventListener("mouseover", function () {
  rectangle4.style.display = "flex";
});

cocktail_menthe_citron.addEventListener("mouseout", function () {
  rectangle4.style.display = "none";
});

// Pour le "cocktail rose "
cocktail_rose.addEventListener("mouseover", function () {
  rectangle5.style.display = "flex";
});

cocktail_rose.addEventListener("mouseout", function () {
  rectangle5.style.display = "none";
});

// FOOTER
// Footer haut
// Gérer le formulaire
const button_formulaire = document.getElementById("formulaire");

button_formulaire.addEventListener("mouseover", function () {
  button_formulaire.style.color = "white";
  button_formulaire.style.background = "black";
});

button_formulaire.addEventListener("mouseout", function () {
  button_formulaire.style.color = "black";
  button_formulaire.style.background = "white";
});

// Footer bas
