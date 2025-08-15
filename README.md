# Calceat Landing Page

A modern, responsive landing page for Calceat - a smart nutrition tracking application built with React, TypeScript, and Vite.

## Features

- ⚡ Fast development with Vite
- 🎯 TypeScript for type safety
- 📱 Responsive design that works on all devices
- 🎨 Modern gradient design with smooth animations
- 🧩 Modular component architecture
- 📊 Hero section with compelling value proposition
- ✨ Features showcase with hover effects
- 🔗 Complete footer with social links

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
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

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/          # Reusable UI components
  │   ├── Hero.tsx        # Main hero section
  │   ├── Features.tsx    # Features showcase
  │   └── Footer.tsx      # Footer with links
  ├── styles/             # CSS files
  │   ├── index.css       # Global styles
  │   ├── App.css         # App-specific styles
  │   ├── Hero.css        # Hero component styles
  │   ├── Features.css    # Features component styles
  │   └── Footer.css      # Footer component styles
  ├── App.tsx             # Main app component
  └── main.tsx            # Application entry point
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ESLint** - Code linting

## Customization

The landing page is designed to be easily customizable:

- Update the content in `src/components/Hero.tsx` to reflect your product
- Modify the features in `src/components/Features.tsx`
- Customize colors in `src/styles/index.css` CSS variables
- Add your own images to the `public` directory
