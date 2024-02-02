const weddingChoice = document.querySelector('.button-wedding');
const familyChoice = document.querySelector('.button-family');
const childrenChoice = document.querySelector('.button-children');
const lovestoryChoice = document.querySelector('.button-lovestory');

const carousels = document.querySelectorAll(".carousel-container");

function showCarousel(selectedCarousel) {
    carousels.forEach(carousel => {
        if (carousel.dataset.carousel === selectedCarousel) {
            carousel.style.display = 'block';
        } else {
            carousel.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    carousels.forEach(carousel => {
        carousel.style.display = 'none';
    });
    showCarousel('wedding');
});

weddingChoice.addEventListener('click', () => {
    showCarousel('wedding');
});
familyChoice.addEventListener('click', () => {
    showCarousel('family');
});
childrenChoice.addEventListener('click', () => {
    showCarousel('children');
});
lovestoryChoice.addEventListener('click', () => {
    showCarousel('lovestory');
});
