  document.addEventListener("DOMContentLoaded", () => {
    console.log("Projects component: DOMContentLoaded");
    // --- Lógica del Carrusel de Proyectos ---
    const carouselTrack = document.getElementById("carousel-track");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");
    const carouselDotsContainer = document.getElementById("carousel-dots");
    let currentIndex = 0;

    function updateCarousel() {
      // Usar porcentaje en lugar de píxeles porque cada item tiene w-full
      const offset = -currentIndex * 100;
      carouselTrack.style.transform = `translateX(${offset}%)`;
      updateDots();
    }

    function updateDots() {
      carouselDotsContainer.innerHTML = ""; // Limpiar dots existentes
      carouselItems.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === currentIndex) {
          dot.classList.add("active");
        }
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateCarousel();
        });
        carouselDotsContainer.appendChild(dot);
      });
    }

    prevButton.addEventListener("click", () => {
      currentIndex =
        currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      currentIndex =
        currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    });

    // Reajustar carrusel en redimensionamiento de ventana
    window.addEventListener("resize", () => {
      updateCarousel();
    });

    // Inicializar carrusel
    if (carouselItems.length > 0) {
      updateCarousel();
      console.log(`Carrusel inicializado con ${carouselItems.length} proyectos`);
    } else {
      console.warn('No se encontraron items del carrusel');
    }
  });