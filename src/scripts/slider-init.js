// Este archivo se importa desde Projects.astro (es tratado por Vite/Astro).
// usa tiny-slider desde npm y su css.
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

export function initSlider() {
  try {
    console.log('initSlider: cargado');
    const container = document.querySelector('.my-slider');
    if (!container) {
      console.warn('initSlider: No se encontró .my-slider en el DOM.');
      return;
    }

    // Inicializa tiny-slider
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

    console.log('initSlider: inicializado correctamente');
  } catch (err) {
    console.error('Error inicializando tiny-slider:', err);
  }
}