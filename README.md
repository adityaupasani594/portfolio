# Portfolio Website

A modern, elegant, and fully responsive personal portfolio website built with React and Tailwind CSS.

## Features

- ✨ Clean, minimal, and sophisticated design
- 📱 Mobile-first responsive layout
- 🎨 Smooth animations and transitions
- ♿ Accessibility-friendly
- 🚀 Fast and optimized performance
- 💼 Professional sections: Hero, About, Projects, Certifications, Awards, Contact

## Tech Stack

- **React** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Modern JavaScript** - ES6+

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following in the component files:

- **Name**: [src/components/Hero.jsx](src/components/Hero.jsx#L30)
- **Tagline**: [src/components/Hero.jsx](src/components/Hero.jsx#L34-L38)
- **GitHub URL**: [src/components/Hero.jsx](src/components/Hero.jsx#L44)
- **LinkedIn URL**: [src/components/Hero.jsx](src/components/Hero.jsx#L54)
- **Email**: [src/components/Contact.jsx](src/components/Contact.jsx#L53)

### About Section

Edit your professional summary and skills in [src/components/About.jsx](src/components/About.jsx)

### Projects

Add or modify projects in the `projects` array in [src/components/Projects.jsx](src/components/Projects.jsx#L24-L69)

### Certifications

Update certifications in [src/components/Certifications.jsx](src/components/Certifications.jsx#L24-L54)

### Awards

Customize achievements in [src/components/Awards.jsx](src/components/Awards.jsx#L24-L54)

### Colors

Modify the color palette in [tailwind.config.js](tailwind.config.js#L10-L20)

### Fonts

Change fonts in:
- [tailwind.config.js](tailwind.config.js#L7-L10)
- [index.html](index.html#L11-L12)

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Navigation bar
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Certifications.jsx # Certifications
│   │   ├── Awards.jsx        # Awards & achievements
│   │   └── Contact.jsx       # Contact & social links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## Design Philosophy

This portfolio follows these principles:

- **Minimal** - Clean design with generous white space
- **Premium** - Sophisticated typography and subtle animations
- **Professional** - Calm color palette without loud colors
- **Responsive** - Mobile-first approach ensuring great UX on all devices
- **Accessible** - High contrast ratios and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Author

Your Name - [GitHub](https://github.com/yourusername) - [LinkedIn](https://linkedin.com/in/yourusername)

---

Built with ❤️ using React and Tailwind CSS
