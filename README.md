# Felix Elias Portfolio Website

A modern, interactive portfolio website showcasing Felix Elias's professional experience in legal technology, compliance, and AI solutions architecture.

## 🚀 Features

- **Space-Themed Design**: Custom deep space background with animated shooting stars
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Navigation**: Smooth transitions between portfolio sections
- **Contact Form**: Functional contact form with email notifications
- **Serverless Backend**: Netlify Functions for contact form processing
- **Modern Stack**: Built with Gatsby.js and React
- **Professional Content**: Comprehensive experience, education, and skills sections

## 🛠️ Technology Stack

- **Framework**: Gatsby.js v2.32.13
- **Frontend**: React 16.14.0
- **Backend**: Netlify Functions (Serverless)
- **Email**: Nodemailer with Gmail integration
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
├── netlify/
│   └── functions/          # Serverless functions
│       ├── contact.js      # Contact form handler
│       └── package.json    # Function dependencies
├── static/                # Static assets
├── .env.example           # Environment variables template
└── netlify.toml          # Netlify deployment configuration
```

## 🎨 Design Highlights

- **Custom Space Background**: Procedurally generated starfield with nebula effects
- **Animated Shooting Stars**: Realistic physics-based meteor animations
- **Responsive Typography**: Fluid scaling for optimal readability
- **Professional Color Palette**: Deep space blues and purples with accent colors

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/felixchess5/felixelias.git
   cd felixelias
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd netlify/functions && npm install && cd ../..
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your Gmail credentials (see Contact Form Setup below)
   ```

4. **Start development server**
   ```bash
   netlify dev
   ```
   *Note: Use `netlify dev` instead of `npm run develop` for full functionality including contact form*

5. **Open in browser**
   Navigate to `http://localhost:8888`

## 📦 Available Scripts

- `netlify dev` - Start development server with functions (recommended)
- `npm run develop` - Start Gatsby development server only (contact form won't work)
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run format` - Format code with Prettier

## 📧 Contact Form Setup

The contact form requires Gmail app password authentication:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account → Security → App passwords
   - Create new app password for "Mail"
3. **Configure Environment Variables**:
   ```bash
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Production Deployment (Netlify)

1. Connect repository to Netlify
2. Add environment variables in Netlify dashboard:
   - `EMAIL_SERVICE=gmail`
   - `EMAIL_USER=felixelias5@gmail.com`
   - `EMAIL_PASS=your-app-password`
3. Deploy automatically builds with serverless functions

## 🌟 Recent Updates (2025)

- **Functional Contact Form**: Added serverless backend with email notifications
- **Smooth Animations**: Fixed background animation loops for seamless transitions
- **Complete Visual Redesign**: Space theme with interactive elements
- **Enhanced Responsive Design**: Optimized for mobile devices
- **Modernized React Components**: Updated data structure and components
- **Improved Performance**: Better accessibility and optimization
- **Updated Dependencies**: Latest stable versions
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