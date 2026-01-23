const contactBtn = document.querySelector('.contact-btn');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn', ".lightbox .close");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImages = document.querySelectorAll(".gallery-img");

contactBtn.addEventListener('click', (e) => {
  e.preventDefault(); // stop page jump
  popupContainer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  popupContainer.classList.remove('active');
});

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
