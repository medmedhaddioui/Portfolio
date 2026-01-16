# 🚀 Modern Portfolio Website

A stunning, fully responsive portfolio website built with React and Vite. Features smooth animations, dark/light mode toggle, and a modern design.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- 🎨 **Modern Design** - Clean and professional interface with gradient accents
- 🌓 **Dark/Light Mode** - Seamless theme switching with smooth transitions
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Engaging animations and transitions throughout
- 🎯 **Interactive Components** - Dynamic project filtering, typing effect, and more
- 📧 **Contact Form** - Functional contact section with form validation
- 🔄 **Smooth Scrolling** - Navigation with smooth scroll behavior

## 🏗️ Sections

1. **Hero** - Eye-catching introduction with typing animation
2. **About** - Personal information and statistics
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Portfolio projects with filtering capabilities
5. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 6.0.1** - Build tool
- **CSS3** - Styling with custom properties
- **ESLint** - Code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name and title
   - Update description

2. **About Section** (`src/components/About.jsx`):
   - Modify bio text
   - Update statistics (years of experience, projects, clients)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your projects
   - Update project details, tags, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Add your social media links

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
}
```

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy.

## 🚢 Deployment

You can deploy this portfolio to various platforms:

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder
```

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)

## 🌟 Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ and React
