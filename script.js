// Seleção dos elementos do carrossel
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 1; // Inicia no segundo item

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    document.querySelector('.carousel').style.transform = `translateX(-${index * 50}%)`; // aqui que tem a rolagem
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
});

showSlide(currentIndex);
