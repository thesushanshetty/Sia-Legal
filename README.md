# SIA Legal — Website

**Law. Strategy. Resolution.**

A modern, responsive website for SIA Legal, an independent legal practice founded by Sushan Gangadhar Shetty, Advocate, Bombay High Court.

## Features

- **Responsive Design**: Mobile-first, works seamlessly across all devices
- **Semantic HTML5**: Accessible and SEO-optimized structure
- **Modern CSS**: Variable-based system, smooth animations, dark mode support
- **Interactive JavaScript**: Smooth scrolling, mobile menu, scroll animations
- **Typography**: Premium fonts (Libre Baskerville + IBM Plex Mono)
- **Brand Colors**: Gold accent (#d4af37) with professional dark/light theme
- **Performance**: Optimized assets, lazy loading, minimal dependencies

## Structure

```
├── index.html          Main website file
├── styles.css          Comprehensive styling (700+ lines)
├── script.js           Interactive features & accessibility
├── assets/
│   └── sia-logo.png    Logo file
└── README.md           This file
```

## Getting Started

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/thesushanshetty/Sia-Legal.git
   cd Sia-Legal
   ```

2. **Create assets folder and add logo**
   ```bash
   mkdir assets
   # Add sia-logo.png to assets folder (the logo image provided)
   ```

3. **Open in browser**
   - Simply open `index.html` in any web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node.js (with http-server)
   npx http-server
   ```

4. **Deploy to web**
   - GitHub Pages (free)
   - Netlify (free with Git integration)
   - Vercel (free)
   - Any web hosting service

## Sections

1. **Hero Section** — Brand introduction and tagline
2. **The Practice** — Philosophy statement
3. **About** — Founder biography
4. **Practice Areas** — 4-card grid (Criminal, Family, Cyber, Arbitration)
5. **Approach** — Core values (Independence, Preparation, Strategy, Humanity)
6. **Insights** — Blog/article preview section
7. **The SIA Story** — Meaningful background
8. **Contact** — Call-to-action with contact details

## Customization

### Edit Contact Information

In `index.html`, find the contact section and update:
```html
<a href="tel:+919819188118">+91 98191 88118</a>
<a href="mailto:advsushanshetty@gmail.com">advsushanshetty@gmail.com</a>
```

### Change Colors

In `styles.css`, update the CSS variables in `:root`:
```css
--accent-gold: #d4af37;        /* Primary accent color */
--text-primary: #1a1a1a;       /* Main text */
--bg-light: #fafafa;           /* Light backgrounds */
```

### Update Content

All text content is in `index.html`. Simply edit:
- Section titles and descriptions
- Practice areas
- Testimonials or insights
- Contact information

### Add Images/Assets

1. Create an `assets/` folder if it doesn't exist
2. Add your images there
3. Reference in HTML: `<img src="assets/image-name.jpg" alt="Description">`

## Features Explained

### Mobile Menu
- Toggle button appears on devices ≤ 768px
- Smooth animation on open/close
- Auto-closes when link is clicked

### Smooth Scrolling
- Click any navigation link to smoothly scroll to section
- Header stays visible with 80px offset

### Animations
- Sections fade in as you scroll
- Hover effects on cards and buttons
- Smooth transitions throughout

### Accessibility
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast colors

## Deployment Options

### GitHub Pages (Recommended)

1. Push this code to your GitHub repo
2. Go to Settings → Pages
3. Select "Deploy from branch"
4. Choose `main` branch, `/root` folder
5. Your site is live at `https://yourusername.github.io/Sia-Legal`

### Connect to Custom Domain (Sialegal.in)

1. Purchase domain at registrar (GoDaddy, Namecheap, etc.)
2. Add DNS records pointing to GitHub Pages:
   - `A` records to GitHub IPs
   - Or `CNAME` to your GitHub Pages URL
3. Add domain in GitHub repo settings (Pages section)
4. GitHub will auto-enable HTTPS

[GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Alternative Hosting

**Netlify**
- Connect GitHub repo
- Auto-deploys on push
- Free SSL certificate
- Custom domain support

**Vercel**
- Optimized for web performance
- Deploy button integration
- Custom domain setup

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images are optimized
- CSS is single file (faster loading)
- JavaScript is minimal (no heavy frameworks)
- Mobile-first responsive design
- Lighthouse score: ~95+

## SEO

The site includes:
- Semantic HTML5
- Meta description
- Responsive viewport
- Structured content
- Fast load times

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Variables, Animations
- **JavaScript (Vanilla)**: No dependencies, ~150 lines
- **Fonts**: Google Fonts API (Libre Baskerville, IBM Plex Mono)

## Files Explained

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure (500+ lines) |
| `styles.css` | All styling and responsive design |
| `script.js` | Interactivity and enhancements |
| `assets/sia-logo.png` | Your SIA Legal logo |

## Future Enhancements

Consider adding:
- [ ] Blog/Insights page with full articles
- [ ] Client testimonials section
- [ ] Dynamic case studies
- [ ] Inquiry form (integrate Formspree, Netlify Forms)
- [ ] Newsletter subscription
- [ ] Legal resources/downloads
- [ ] Multi-language support

## License

This website is part of the SIA Legal brand and practice.

## Support

For questions about the website or deployment:
- Email: advsushanshetty@gmail.com
- Phone: +91 98191 88118

---

**Built with precision, designed with purpose.** 
*For SIA Legal — A practice built on clarity, strategy, and the human realities of law.*