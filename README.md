# Felix Elias Portfolio Website

A modern, interactive portfolio website showcasing Felix Elias's professional experience in legal technology, compliance, and AI solutions architecture.

## 🚀 Features

- **Immersive Space Theme**: Realistic planetary system with animated celestial bodies
- **Interactive Planets**: Saturn with rings, Earth with orbiting Moon, Jupiter, Mars, Venus, Neptune, and the Sun
- **Glassmorphism Design**: Modern blurred glass aesthetics matching content sections
- **Mobile-Optimized**: Responsive design with performance-optimized animations
- **Contact Form**: Functional contact form with PHP backend for GoDaddy hosting
- **Modern Stack**: Built with Gatsby.js and React
- **Professional Content**: Comprehensive experience, education, and skills sections
- **Cache-Resilient**: Advanced caching strategies for reliable mobile performance

## 🛠️ Technology Stack

- **Framework**: Gatsby.js v2.32.13
- **Frontend**: React 16.14.0
- **Backend**: PHP (GoDaddy hosting)
- **Email**: PHP mail() function
- **Styling**: Sass/SCSS with custom animations
- **Icons**: FontAwesome
- **Build Tools**: Node.js, npm

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Education.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── InteractiveEffects.js
│   ├── data/               # Content data
│   ├── assets/scss/        # Styling and animations
│   ├── images/            # Static images
│   └── documents/         # Downloadable resume
├── contact.php             # Contact form handler (PHP)
├── static/                # Static assets
├── .env.example           # Environment variables template
└── netlify.toml          # Netlify deployment configuration
```

## 🎨 Design Highlights

- **Realistic Planetary System**: Authentic solar system with proper planet coloring and atmospheric effects
- **Advanced Animations**: Orbital mechanics, lunar phases, and solar corona effects
- **Glassmorphism Elements**: Subtle floating glass accents with backdrop blur
- **Responsive Typography**: Fluid scaling for optimal readability across all devices
- **Professional Color Palette**: Deep space blues and purples with realistic planetary hues
- **Performance Optimized**: Mobile-specific optimizations for smooth performance

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/felixchess5/felixelias.git
   cd felixelias
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run develop
   ```
   *Note: Contact form will only work after deployment to GoDaddy*

4. **Open in browser**
   Navigate to `http://localhost:8000`

## 📦 Available Scripts

- `npm run develop` - Start Gatsby development server 
- `npm run develop-clean` - Clean cache and start development server
- `npm run build` - Build for production (includes cache cleaning)
- `npm run build-fresh` - Complete cache wipe and build (recommended for deployment)
- `npm run deploy` - Deploy to GitHub Pages
- `npm run format` - Format code with Prettier

## 📧 Contact Form Setup

The contact form uses PHP and will work on GoDaddy hosting:

### Production Deployment (GoDaddy)

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Upload to GoDaddy**:
   - Upload contents of `public/` folder to `public_html/`
   - Upload `contact.php` to `public_html/`

3. **Contact form structure**:
   - Form submits to `/contact.php`
   - PHP processes form and sends email
   - Works automatically on GoDaddy's PHP hosting

## 🌟 Recent Updates (2025)

### Latest Release (v2.1.0)
- **Realistic Solar System**: Added Saturn, Earth with Moon, Mars, Venus, Neptune, and the Sun
- **Advanced Planet Physics**: Authentic orbital mechanics and atmospheric effects  
- **Mobile Cache Fix**: Comprehensive solution for mobile static query loading issues
- **Dynamic Content Loading**: Error-resilient content system with fallback data
- **Enhanced Build Process**: Cache-busting strategies and fresh build options

### Previous Updates
- **Functional Contact Form**: Added serverless backend with email notifications
- **Smooth Animations**: Fixed background animation loops for seamless transitions
- **Complete Visual Redesign**: Space theme with interactive elements
- **Enhanced Responsive Design**: Optimized for mobile devices
- **Modernized React Components**: Updated data structure and components
- **Glassmorphism UI**: Modern blurred glass design elements
- **Comprehensive Animation System**: Shooting stars and particle effects
- **Serverless Architecture**: Netlify Functions for backend functionality

## 👨‍💻 About Felix Elias

Legal and Compliance Technology Leader | AI Solutions Architect | 11+ Years Transforming Enterprise Operations

Felix specializes in intelligent automation, regulatory compliance technology, and AI-driven solutions for financial services and enterprise organizations.

## 📄 License

This project is licensed under the MIT License. Original template by HTML5 UP, customized and enhanced by Felix Elias.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or feedback, please open an issue on GitHub.

## 📞 Contact

- **Website**: [felixelias.com](https://felixelias.com)
- **LinkedIn**: [Felix Elias](https://www.linkedin.com/in/felixelias/)
- **GitHub**: [felixchess5](https://github.com/felixchess5)

---

*Built with ❤️ and lots of ☕ by Felix Elias*