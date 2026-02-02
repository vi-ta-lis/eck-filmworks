# Complete Installation & Setup Guide

## 🚀 Quick Start (All Dependencies)

### Install ALL Required Packages

Run this single command to install everything needed for Priority 1 & 2:

```bash
npm install @emailjs/browser react-icons react-helmet-async
```

**Note:** We use a custom-built Lightbox component, so no external lightbox package is needed.

### Start Development Server

```bash
npm start
```

Your site should now run at `http://localhost:3000`

---

## 📋 Complete Feature Checklist

### ✅ Priority 1 Features (Core Functionality)
- [x] Working contact form with validation
- [x] Category filtering (Portraits, Weddings, Events, Commercial)
- [x] Image lightbox gallery
- [x] Social media links
- [x] Photography-focused portfolio structure

### ✅ Priority 2 Features (Professional Polish)
- [x] SEO optimization (meta tags, Open Graph, Twitter Cards)
- [x] Mobile responsive navigation (hamburger menu)
- [x] Testimonials section
- [x] Lazy loading images
- [x] Loading skeleton screens
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt

---

## ⚙️ Configuration Steps

### 1. EmailJS Setup (Contact Form)

**Time Required:** 5 minutes

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key

**Update:** `src/components/ContactForm.js` (lines 51-53)
```javascript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

---

### 2. Social Media Links

**Update:** `src/components/SocialLinks.js` (lines 6-11)
```javascript
const socialMedia = {
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
};
```

Also update displayed names (lines 14, 23):
```javascript
<span>@yourinstagramhandle</span>
<span>Your Facebook Page</span>
```

---

### 3. SEO & Structured Data

**Update:** `public/index.html` (lines 26-55)

Replace in the JSON-LD script:
```json
"addressLocality": "Your City",
"addressRegion": "Your State",
"telephone": "+1-555-123-4567",
"url": "https://yourdomain.com",
"sameAs": [
  "https://www.instagram.com/yourhandle",
  "https://www.facebook.com/yourpage"
]
```

**Update:** `src/components/SEO.js` (lines 4-9)
```javascript
url = "https://yourdomain.com",
```

**Update:** `public/sitemap.xml` - Replace all `https://eckfilmworks.com` with your domain

---

### 4. Add Your Photography

**Option A - Replace Images:**

1. Add your photos to `src/img/` folder
2. Update `src/PortfolioState.js`:
   ```javascript
   import myPhoto1 from "./img/your-photo-1.jpg";
   import myPhoto2 from "./img/your-photo-2.jpg";
   ```

**Option B - Update Project Data:**

Edit `src/PortfolioState.js` to modify/add projects:
```javascript
{
  title: "Your Project Title",
  category: "Portraits", // or Weddings, Events, Commercial
  mainImg: yourMainImage,
  secondaryImg: yourSecondaryImage,
  url: "/work/your-project-slug",
  description: "Project description",
  details: [
    { title: "Detail 1", description: "..." },
  ],
  gallery: [image1, image2, image3],
}
```

---

### 5. Update Testimonials

**Edit:** `src/components/Testimonials.js` (lines 6-38)

Replace sample testimonials with real client reviews:
```javascript
{
  id: 1,
  name: "Client Name",
  role: "Service Type",
  text: "Their testimonial quote...",
  rating: 5,
  image: null,
}
```

---

## 🎨 Customization Options

### Change Colors

**Edit:** Any styled-component file to change the accent color `#23d997`:
- Navigation underlines
- Buttons
- Category tags
- Social links

### Modify Categories

**Edit:** `src/PortfolioState.js` (bottom of file):
```javascript
export const portfolioCategories = [
  "All",
  "Your Category 1",
  "Your Category 2",
];
```

Then update `category` field in each project to match.

---

## 🐛 Troubleshooting

### Contact Form Not Sending
- ✅ Verify EmailJS credentials in `ContactForm.js`
- ✅ Check browser console for errors
- ✅ Ensure EmailJS service is active

### Images Not Loading
- ✅ Check file paths in `PortfolioState.js`
- ✅ Ensure images are in `src/img/` folder
- ✅ Verify import statements

### Mobile Menu Not Working
- ✅ Ensure `react-icons` is installed
- ✅ Test at viewport width < 968px
- ✅ Check browser console for errors

### SEO Tags Not Showing
- ✅ Ensure `react-helmet-async` is installed
- ✅ Check HelmetProvider is in `index.js`
- ✅ View page source (not inspect element) to see meta tags

### Lightbox Not Opening
- ✅ Custom Lightbox component (no package needed)
- ✅ Ensure `react-icons` is installed
- ✅ Check browser console

---

## 📱 Testing Checklist

### Desktop Testing
- [ ] All pages load without errors
- [ ] Navigation links work
- [ ] Contact form validates and submits
- [ ] Portfolio filtering works
- [ ] Image lightbox opens on click
- [ ] Testimonials visible on About page

### Mobile Testing (< 968px)
- [ ] Hamburger menu appears
- [ ] Menu slides in smoothly
- [ ] Links work in mobile menu
- [ ] Overlay closes menu
- [ ] Images resize properly
- [ ] Forms are touch-friendly

### SEO Testing
- [ ] Page titles change per route
- [ ] View source shows meta tags
- [ ] Validate structured data at [schema.org](https://validator.schema.org/)
- [ ] Test social sharing preview at [opengraph.xyz](https://www.opengraph.xyz/)

---

## 🚢 Deployment

### Before Deployment:
1. ✅ Complete all configuration steps above
2. ✅ Test thoroughly in development
3. ✅ Replace all placeholder content
4. ✅ Update all URLs to your production domain

### Build for Production:
```bash
npm run build
```

### Deploy to Netlify (Recommended):
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### After Deployment:
1. Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
2. Test all forms and links
3. Verify meta tags with social media debuggers
4. Test on real mobile devices

---

## 📚 Dependencies Reference

| Package | Purpose | Priority |
|---------|---------|----------|
| `@emailjs/browser` | Contact form email delivery | 1 |
| `react-icons` | Icon components | 1 |
| `react-helmet-async` | SEO meta tag management | 2 |
| Custom Lightbox | Full-screen image gallery | 1 |
| `framer-motion` | Animations (already installed) | - |
| `styled-components` | CSS-in-JS (already installed) | - |
| `react-router-dom` | Routing (already installed) | - |

---

## 📖 Documentation Links

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Schema.org](https://schema.org/ProfessionalService)
- Custom Lightbox Component (built-in, no external docs needed)

---

## 🎉 You're All Set!

Your photography portfolio now has:
- ✅ Working contact form
- ✅ Category-filtered portfolio
- ✅ Professional image gallery
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Client testimonials
- ✅ Performance optimizations

**Happy shooting! 📸**
