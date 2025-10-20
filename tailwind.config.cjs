module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  safelist: [
    // patrones para clases con caracteres especiales o que no se detectaron
    { pattern: /^bg-\[.*\]$/ },         // bg-[rgba(...)] etc
    { pattern: /^text-.*\/\d+$/ },      // text-white/90 etc
    { pattern: /^border-.*\/\d+$/ },    // border-white/5 etc
    { pattern: /^backdrop-.*$/ },       // backdrop-blur-sm etc
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        bg: '#071422',
        card: '#0b1220'
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
};