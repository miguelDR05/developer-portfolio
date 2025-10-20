module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html'
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