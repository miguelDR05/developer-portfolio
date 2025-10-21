/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: {
          purple: "#8C52FF",
          darkpurple: "#6C23FF",
          lightpurple: "#EDE9FE",
          darkblue: "#1E3A8A",
          lightblue: "#DBEAFE",
          grayish: "#6B7280",
          darkgrayish: "#4B5563",
        },
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
