let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex - 1) {
            dot.classList.add('active');
        }
    });
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});