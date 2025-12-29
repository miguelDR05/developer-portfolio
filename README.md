# 👨‍💻 Miguel Delgado | Developer Portfolio

![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=for-the-badge&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Cloudeflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=for-the-badge&logo=cloudflare)

> A minimalist, high-performance portfolio website showcasing my projects, skills, and experience as a Full Stack Software Engineer.

## 🖼️ Preview

[![Vista Previa de mi Portafolio](https://raw.githubusercontent.com/migueldrdev/developer-portfolio/main/public/preview.jpg)](https://migueldr.dev/)

## 🚀 Key Features

This isn't just a static site; it's an engineered solution focusing on performance and maintainability:

* **⚡ Astro 5 & Island Architecture:** Zero JavaScript by default, adding interactivity only where strictly needed.
* **🧩 Component-Driven Development:** Modular architecture with reusable UI components (Buttons, Cards, Recursive Layouts).
* **🎨 Styling:** Styled with **TailwindCSS** for a responsive, mobile-first design.
* **🛠️ Type Safety:** Fully typed with **TypeScript** for robustness.
* **🚀 CI/CD Pipeline:** Automated deployment workflow using **GitHub Actions** connected to Netlify.

## 🛠️ Tech Stack

* **Core:** [Astro](https://astro.build/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Phosphor Icons / Heroicons]
* **Deployment:** Netlify

## 📂 Project Structure

A brief overview of the architectural organization:

```text
/
├── 📂 public/           # Static assets (images, CV, icons)
├── 📂 src/
│   ├── 📂 components/   # Reusable UI components (Vue & Astro)
│   │   ├── 📂 icons/    # SVG Icons
│   │   ├── 📂 layout/   # Navbar, Footer
│   │   ├── 📂 sections/ # Sections of pages (Projects, About, Contact)
│   │   └── 📂 ui/       # Buttons, Cards, Badges
│   ├── 📂 layouts/      # Page scaffolding (SEO, Meta tags)
│   ├── 📂 pages/        # File-based routing
│   └── 📂 styles/       # Global styles and Tailwind config
├── 📄 astro.config.mjs  # Astro configuration
└── 📄 tailwind.config.cjs
```

## ⚡ Performance (Lighthouse)

Currently aiming for a perfect score:

* 🟢 **Performance:** 100
* 🟢 **Accessibility:** 100
* 🟢 **Best Practices:** 100
* 🟢 **SEO:** 100

## 🔧 Installation & Setup

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/migueldrdev/developer-portfolio.git
   cd developer-portfolio
   ```
   
2. **Install dependencies:**
   ```bash
   npm install
   ```
   
3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📬 Contact

Feel free to reach out if you want to collaborate on a project!

* LinkedIn: [Miguel Delgado](https://www.linkedin.com/in/migueldrdev)
* Email: miguel05.dev@gmail.com
---
© 2025 Miguel Delgado. Built with Astro & Vue.
