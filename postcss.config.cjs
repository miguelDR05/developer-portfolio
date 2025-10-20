// postcss.config.cjs — actualizado para Tailwind v4 / @tailwindcss/postcss
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};