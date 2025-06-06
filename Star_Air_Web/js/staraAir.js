const slider = document.getElementById('slider');
let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % 7; // Adjust for number of slides
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeSlide, 3000); // Change slide every 3 seconds





  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, /* Adjust this for responsiveness */
    spaceBetween: 30,
    loop: true, /* Infinite Loop */
    autoplay: {
      delay: 3000, /* 3 seconds per slide */
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
    },
  });


  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,  // Shows 3 cards at once
    spaceBetween: 20,  // Adds spacing between cards
    loop: true,        // Enables infinite scrolling
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: { slidesPerView: 3 },  // 3 cards on large screens
        768: { slidesPerView: 2 },   // 2 cards on tablets
        480: { slidesPerView: 1 }    // 1 card on mobile
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('searchForm');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Hide the search form when the navbar is expanded
  navbarToggler.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
          searchForm.style.display = 'block'; // Show search form when navbar is closed
      } else {
          searchForm.style.display = 'none'; // Hide search form when navbar is open
      }
  });

  // Ensure search form is visible when the navbar is collapsed
  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
      searchForm.style.display = 'block';
  });
});
