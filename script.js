// #1 Seleção dos elementos do carrossel
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 1; // #5 Iniciar no segundo item

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}

// #8 Funções de navegação para as setas next e prev
document.querySelector('.next').addEventListener('click', () => {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Inicializa o carrossel na segunda imagem
showSlide(currentIndex);
