// CONTACT POPUP
const contactBtn = document.querySelector(".contact-btn");
const popupContainer = document.querySelector(".popup-container");
const popupCloseBtn = popupContainer.querySelector(".close-btn");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popupContainer.classList.add("active");
});

popupCloseBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});

// IMAGE LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
}

lightboxImg.addEventListener("click", (event) => {
  event.stopPropagation();
});
