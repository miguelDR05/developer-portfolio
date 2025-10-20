// Este archivo se importa desde Projects.astro (es tratado por Vite/Astro).
// usa tiny-slider desde npm y su css.
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

export function initSlider() {
  try {
    // Esperar un tick para que DOM esté listo si es necesario
    const container = document.querySelector('.my-slider');
    if (!container) return;

    // wrap slides automatically if items are direct children (tiny-slider espera nodos)
    tns({
      container: '.my-slider',
      items: 1,
      gutter: 20,
      slideBy: 'page',
      autoplay: false,
      controls: true,
      nav: false,
      mouseDrag: true,
      responsive: {
        640: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      },
      controlsText: ['◀', '▶']
    });
  } catch (err) {
    console.error('Error inicializando tiny-slider:', err);
  }
}