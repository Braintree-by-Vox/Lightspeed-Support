# Lightspeed Support Portal

A comprehensive user support portal built with modern web technologies, featuring online help, how-to guides, and resource downloads.

![Lightspeed Support Portal](https://github.com/user-attachments/assets/f4ac295c-504b-45f5-8093-63887ce2229d)

## Features

### 🏠 **Homepage**
- Clean, modern design with clear navigation
- Global search functionality across all content
- Quick access cards to main sections
- Responsive design for all devices

### 📚 **Online Help**
- Searchable knowledge base with articles
- Category filtering (Getting Started, Features, Troubleshooting, Account Management)
- Article previews with estimated read times
- Interactive search and filter functionality

### 📖 **How-to Guides**
- Step-by-step tutorial cards
- Difficulty levels (Beginner, Intermediate, Advanced)
- Time estimates and step counts
- Interactive tutorial launch buttons

### 📥 **Resource Downloads**
- Three organized categories:
  - **Documentation** - User manuals, API docs, quick references
  - **Templates & Tools** - Data import templates, report templates, checklists
  - **Developer Resources** - SDKs, code examples, API collections
- File metadata (type, size, last updated)
- Download progress feedback

### 📞 **Contact Support**
- Multiple contact methods:
  - Email support with response times
  - Live chat integration
  - Phone support with availability hours

### 📱 **Mobile Responsive**
- Fully responsive design
- Mobile-first approach
- Touch-friendly navigation
- Hamburger menu for mobile devices

![Mobile View](https://github.com/user-attachments/assets/e9f7bb70-15ef-4bab-89b3-886c2da783cc)

## Technology Stack

- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - Interactive functionality without dependencies
- **Font Awesome** - Icons and visual elements

## Getting Started

### Prerequisites
- A web server (Apache, Nginx, or simple HTTP server)
- Modern web browser with JavaScript enabled

### Local Development
1. Clone or download the repository
2. Start a local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using PHP
   php -S localhost:8000
   
   # Using Node.js (with http-server)
   npx http-server -p 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`

### Deployment

#### Static Hosting (Recommended)
This portal can be deployed to any static hosting service:

- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting enabled
- **Firebase Hosting**: Use Firebase CLI to deploy

## File Structure

```
lightspeed-support/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── js/
│       └── script.js      # JavaScript functionality
├── README.md              # Project documentation
└── .gitignore            # Git ignore rules
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **CSS Grid and Flexbox** for efficient layouts
- **CSS Custom Properties** for consistent theming
- **Minimal JavaScript** for fast loading
- **Semantic HTML** for accessibility and SEO

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

---

**Built with ❤️ for better user support experiences**
