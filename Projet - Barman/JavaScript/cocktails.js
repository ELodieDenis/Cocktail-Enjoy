// let next = document.querySelector(".next");
// let prev = document.querySelector(".prev");

// next.addEventListener("click", function () {
//   let items = document.querySelectorAll(".item");
//   document.querySelector(".slide").appendChild(items[0]);
// });

// prev.addEventListener("click", function () {
//   let items = document.querySelectorAll(".item");
//   document.querySelector(".slide").prepend(items[items.length - 1]);
// });

// // Sélection des éléments nécessaires
// const images = document.querySelectorAll(".slide .item img");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");
// let activeImageIndex = 0;

// // Fonction pour afficher une image au centre
// function showImage(index) {
//   // Supprimer l'ancienne image agrandie si elle existe
//   const previousImage = document.querySelector(".active-image");
//   if (previousImage) {
//     previousImage.remove();
//   }

//   // Ajouter la nouvelle image agrandie
//   const img = document.createElement("img");
//   img.src = images[index].src;
//   img.classList.add("active-image");
//   document.body.appendChild(img);
// }

// // Afficher l'image initiale
// showImage(activeImageIndex);

// // Événement pour le bouton "prev"
// prevButton.addEventListener("click", () => {
//   activeImageIndex =
//     activeImageIndex > 0 ? activeImageIndex - 1 : images.length - 1;
//   showImage(activeImageIndex);
// });

// // Événement pour le bouton "next"
// nextButton.addEventListener("click", () => {
//   activeImageIndex =
//     activeImageIndex < images.length - 1 ? activeImageIndex + 1 : 0;

//   showImage(activeImageIndex);
// });

// // Affiches les textes sur les images

// // const images = document.querySelectorAll(".slide .item img");
// const name = document.querySelector(".name");
// // const nextButton = document.querySelector(".next");
// let currentIndex = 0;

// function showImageAndTitle(index) {
//   titles.forEach((title) => {
//     title.style.display = "none";
//   });

//   imageElement.src.images[index];

//   titles[index].style.display = "block";
// }

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   showImageAndTitle(currentIndex);
// });

const img_cocktails = document.querySelectorAll(".img_cocktails");
const name = document.querySelectorAll(".name");

let toutesImages = 0;
let tousTitres = 0;

function activeImagesEtTitres(index) {}
