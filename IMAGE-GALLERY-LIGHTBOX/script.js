const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(img) {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
}