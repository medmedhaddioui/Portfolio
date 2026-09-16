<div align="center">

# 🚀 Developer Portfolio — Mohammed Elhaddioui

A sleek, modern, and fully responsive developer portfolio web application built with **React 19** and **Vite 6**. Designed with a backend-first focus, showcasing software projects, cloud infrastructure setups, certifications, and technical expertise.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla_Custom-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[**Explore Projects**](#-featured-projects) • [**Tech Stack**](#%EF%B8%8F-tech-stack) • [**Getting Started**](#-getting-started) • [**Customization**](#-customization-guide) • [**Contact**](#-contact--connect)

</div>

---

## 📌 Overview

This portfolio serves as the primary technical showcase for **Mohammed Elhaddioui**, a Full-Stack Developer and student at **1337 School (42 Network / UM6P)**. It highlights backend architectures (Spring Boot, Node.js), distributed systems (Kubernetes/K3s, WebSockets), and responsive web UI design.

### ✨ Key Features

- 🎨 **Minimalist & Premium UI** — Dark theme aesthetic inspired by modern developer portfolios with glassmorphism touches and refined typography.
- 📱 **Fully Responsive** — Mobile-first layout with smooth desktop side-rails for social networks and direct email actions.
- ⚡ **Lightning-Fast Performance** — Built with Vite 6 and React 19 for instantaneous hot module replacement (HMR) and optimized bundle builds.
- ☸️ **Interactive Kubernetes Architecture Diagram** — Custom CSS visualizer mapping control-plane, worker nodes, and ingress routing.
- 🏆 **Certifications Showcase** — Section for displaying verified academic credentials, 1337 School milestones, and technical certificates.
- ♿ **Accessibility Ready** — ARIA labels, semantic HTML structure, keyboard navigation, and hidden skip-to-content links.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework:** React 19 (`react`, `react-dom`)
- **Build System:** Vite 6 (`@vitejs/plugin-react`)
- **Styling:** Custom Modular CSS with CSS Variables
- **Code Quality:** ESLint 9 (`@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)

### Developer Profile Skills Showcase
- **Backend:** Java & Spring Boot, Node.js & Fastify, Express, REST APIs, WebSockets, JWT Authentication
- **Database & Storage:** PostgreSQL, SQLite
- **DevOps & Infrastructure:** Kubernetes & K3s, Docker & Docker Compose, Vagrant, Linux, Nginx, Git

---

## 📂 Project Structure

```
Portfolio/
├── public/                  # Static assets & image resources
│   ├── me.image.jpg         # Profile portrait
│   ├── pingpong.png         # Multiplayer game visual
│   └── letworkToghether.png # Group-buying platform preview
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx / .css        # Navigation header with smooth scroll links
│   │   ├── Hero.jsx / .css          # Hero banner & elevator pitch
│   │   ├── About.jsx / .css         # Bio & 1337 UM6P background
│   │   ├── Skills.jsx / .css        # Tech stack category grids
│   │   ├── Projects.jsx / .css      # Featured project cards & K8s visualizer
│   │   ├── Certifications.jsx/.css  # Certification cards & badges
│   │   ├── Contact.jsx / .css       # Contact form section
│   │   └── SocialLinks.jsx          # Social media links (GitHub, LinkedIn)
│   ├── hooks/
│   │   └── useScrollReveal.js       # Custom Intersection Observer hook for scroll animations
│   ├── App.jsx              # Main App layout & rail composition
│   ├── App.css              # Global layout styles & rails
│   ├── index.css            # CSS custom properties & base resets
│   └── main.jsx             # React entry point
├── index.html               # HTML5 template with meta tags
├── vite.config.js           # Vite configuration
├── package.json             # Scripts and dependencies
└── README.md                # Project documentation
```

---

## 🌟 Featured Projects

| Project | Description | Tech Stack | Repository |
| :--- | :--- | :--- | :--- |
| 🛒 **Group-Buying Platform** | Platform enabling users to discover store promotions, create purchase offers, and form group buying deals with secure payment workflows. | `Group Purchases` `Payment Workflow` `React` | [View Code ↗](https://github.com/medmedhaddioui/LetsBuyTogether) |
| ☸️ **Kubernetes Infrastructure** | Multi-node Kubernetes cluster built using Vagrant, configuring control-plane, worker nodes, Deployments, Services, ConfigMaps, and Ingress routing. | `Kubernetes` `K3s` `Vagrant` `Linux` | [View Code ↗](https://github.com/medmedhaddioui/IoT--42) |
| 🎮 **Real-Time Multiplayer Game** | Low-latency real-time multiplayer gaming platform with automated tournament tracking, dynamic live scoring, and WebSockets. | `Fastify` `WebSocket` `React` `SQLite` | [View Code ↗](https://github.com/medmedhaddioui/ft_transcendence) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/medmedhaddioui/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173` to view the running application.

---

## 📝 Available Scripts

In the project directory, you can run:

```bash
# Start Vite development server with hot reload
npm run dev

# Build production distribution bundle in /dist
npm run build

# Preview production build locally
npm run preview

# Run ESLint to verify code quality
npm run lint
```

---

## 🎨 Customization Guide

### 1. Modifying Personal Information
- **Hero & Intro:** Update text in `src/components/Hero.jsx`.
- **About Bio:** Edit text and details in `src/components/About.jsx`.
- **Contact Details:** Modify email or contact options in `src/components/Contact.jsx` and `src/App.jsx`.

### 2. Updating Projects & Skills
- **Projects:** Add or edit project objects in `src/components/Projects.jsx`. Each project supports title, description, detailed overview, tags, visual type, and GitHub links.
- **Skills:** Add or organize technical skills inside the `skills` array in `src/components/Skills.jsx`.

### 3. Updating Certifications
- **Certifications:** Manage items in the `certificates` array located inside `src/components/Certifications.jsx`.

### 4. Customizing Theme & Styling
- Global colors, fonts, and responsive container widths are configured via CSS variables in `src/index.css`:
  ```css
  :root {
    --bg-primary: #0a192f;
    --text-primary: #8892b0;
    --text-heading: #ccd6f6;
    --accent: #64ffda;
  }
  ```

---

## 👨‍💻 Contact & Connect

**Mohammed Elhaddioui**  
*Full-Stack Developer | 1337 School (42 Network / UM6P)*

- 📧 **Email:** [medmedhaddioui@gmail.com](mailto:medmedhaddioui@gmail.com)
- 🐙 **GitHub:** [@medmedhaddioui](https://github.com/medmedhaddioui)
- 💼 **LinkedIn:** [Mohamed Elhaddioui](https://www.linkedin.com/in/mohamed-elhaddioui-66ba74252/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by Mohammed Elhaddioui</sub>
</div>

