# Krid.ai Website

A modern, responsive website for Krid.ai - an agentic AI consultancy that helps CXOs and senior leaders discover AI opportunities and transform their organizations.

## 🏗️ Project Structure

The project has been restructured for better maintainability and organization:

```
krid.ai-website/
├── assets/                     # Static assets
│   ├── images/                 # Images and graphics
│   ├── videos/                 # Video files
│   └── icons/                  # Favicons and icons
├── pages/                      # HTML pages
│   ├── index.html             # Main homepage
│   ├── founder-mode.html      # Founder mode page
│   └── ...                    # Other HTML pages
├── styles/                     # CSS stylesheets
│   ├── base/                  # Base styles
│   │   ├── reset.css          # CSS reset
│   │   └── utilities.css      # Utility classes
│   ├── components/            # Component styles
│   │   ├── header.css         # Header/navigation
│   │   ├── hero.css           # Hero section
│   │   ├── sections.css       # Common sections
│   │   ├── footer.css         # Footer
│   │   └── animations.css     # Animations
│   ├── pages/                 # Page-specific styles
│   │   ├── agentic-ai.css     # Agentic AI education
│   │   ├── services.css       # Services section
│   │   └── insights.css       # Insights section
│   └── main.css               # Main stylesheet (imports all)
├── scripts/                    # JavaScript files
│   ├── modules/               # Modular JavaScript
│   │   ├── navigation.js      # Navigation functionality
│   │   ├── animations.js      # Scroll animations
│   │   ├── tabs.js            # Tab functionality
│   │   ├── forms.js           # Form enhancements
│   │   ├── video.js           # Video enhancements
│   │   └── performance.js     # Performance optimizations
│   └── main.js                # Main JavaScript file
├── docs/                      # Documentation
│   ├── robots.txt             # SEO robots file
│   ├── sitemap.xml            # SEO sitemap
│   └── CNAME                  # Custom domain
└── README.md                  # This file
```

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern CSS**: Modular CSS architecture with component-based styling
- **Interactive Elements**: Smooth animations, scroll effects, and micro-interactions
- **Performance Optimized**: Lazy loading, throttled scroll events, and optimized assets
- **Accessibility**: Keyboard navigation, focus indicators, and semantic HTML
- **SEO Optimized**: Meta tags, structured data, and semantic markup

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Flexbox, Grid, animations, and custom properties
- **JavaScript ES6+**: Modules, modern syntax, and performance optimizations
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Inter and Space Grotesk typography
- **Calendly**: Appointment booking integration

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Design System

### Colors
- **Primary**: #667eea (Blue gradient)
- **Secondary**: #764ba2 (Purple gradient)
- **Text**: #1a202c (Dark gray)
- **Muted**: #64748b (Medium gray)
- **Background**: #f8fafc (Light gray)

### Typography
- **Primary Font**: Inter (Body text)
- **Heading Font**: Space Grotesk (Headings)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Buttons**: Rounded, gradient backgrounds with hover effects
- **Cards**: Elevated with subtle shadows and hover animations
- **Navigation**: Fixed header with smooth scroll and mobile menu
- **Sections**: Consistent spacing and responsive layouts

## 🔧 Development

### Getting Started
1. Clone the repository
2. Open `pages/index.html` in a web browser
3. For development, use a local server to avoid CORS issues with modules

### File Organization
- **HTML**: All pages in the `pages/` directory
- **CSS**: Modular styles in `styles/` with clear separation of concerns
- **JavaScript**: ES6 modules in `scripts/modules/` for better maintainability
- **Assets**: Organized by type in the `assets/` directory

### Adding New Pages
1. Create HTML file in `pages/` directory
2. Add page-specific styles in `styles/pages/`
3. Import new styles in `styles/main.css`
4. Update navigation links as needed

### Adding New Components
1. Create component styles in `styles/components/`
2. Import in `styles/main.css`
3. Add JavaScript functionality in `scripts/modules/` if needed
4. Import in `scripts/main.js`

## 📊 Performance Features

- **Lazy Loading**: Images and videos load on demand
- **Throttled Events**: Scroll and resize events are optimized
- **Modular CSS**: Only load necessary styles
- **Minified Assets**: Optimized file sizes
- **Preloading**: Critical resources are preloaded

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Indicators**: Clear focus states for better navigation
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Alt Text**: Descriptive alt text for all images
- **ARIA Labels**: Screen reader friendly markup

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD structured data for search engines
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Proper robots.txt configuration
- **Canonical URLs**: Prevent duplicate content issues

## 📝 License

This project is proprietary to Krid.ai. All rights reserved.

## 🤝 Contributing

For internal development, please follow the established patterns:
- Use semantic HTML
- Follow the CSS architecture
- Write modular JavaScript
- Test across all breakpoints
- Ensure accessibility compliance

## 📞 Support

For technical issues or questions about the website structure, please contact the development team.

---

**Last Updated**: September 2024
**Version**: 2.0 (Restructured)
