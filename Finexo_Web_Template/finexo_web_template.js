let currentIndex = 0;
        const slides = document.querySelectorAll(".carousel-item");
        const totalSlides = slides.length;
        const carousel = document.getElementById("carousel");

        function updateSlide() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlide();
        }