let slideIndex = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }

    document.querySelector('.carousel-container').style.transform = `translateX(-${slideIndex * 100}%)`;
};

document.querySelector('.next-btn').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

// Initialize the first slide
showSlide(slideIndex);
