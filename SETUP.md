# ECK Photography Portfolio - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install @emailjs/browser react-icons react-helmet-async
```

**Note:** We use a custom-built Lightbox component (no external dependency needed).

### 2. EmailJS Configuration

To enable the contact form, you need to set up EmailJS (free tier available):

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
   
2. **Create an Email Service:**
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Note your `Service ID`

3. **Create an Email Template:**
   - Go to Email Templates
   - Create a new template
   - Use these template variables:
     ```
     From: {{name}}
     Email: {{email}}
     Phone: {{phone}}
     Message: {{message}}
     ```
   - Note your `Template ID`

4. **Get your Public Key:**
   - Go to Account → General
   - Copy your `Public Key`

5. **Update the ContactForm component:**
   
   Open `src/components/ContactForm.js` and replace:
   ```javascript
   const serviceId = "YOUR_SERVICE_ID";      // Replace with your Service ID
   const templateId = "YOUR_TEMPLATE_ID";    // Replace with your Template ID
   const publicKey = "YOUR_PUBLIC_KEY";      // Replace with your Public Key
   ```

### 3. Update Social Media Links

Open `src/components/SocialLinks.js` and update:

```javascript
const socialMedia = {
  instagram: "https://instagram.com/yourhandle",     // Your Instagram
  facebook: "https://facebook.com/yourpage",          // Your Facebook
  email: "contact@eckfilmworks.com",                  // Your Email
  phone: "+1 (555) 123-4567",                         // Your Phone
};
```

Also update the displayed handles:
```javascript
<span>@eckfilmworks</span>  // Change to your Instagram handle
<span>ECK Filmworks</span>  // Change to your Facebook page name
```

### 4. Add Your Photography Content

#### Option A: Replace Images

Place your photos in `src/img/` folder and update `src/PortfolioState.js`:

```javascript
import myPhoto1 from "./img/your-photo-1.jpg";
import myPhoto2 from "./img/your-photo-2.jpg";
// ... etc
```

#### Option B: Update Portfolio Data

Edit `src/PortfolioState.js` to add/modify projects:

```javascript
{
  title: "Your Project Title",
  category: "Portraits", // or "Weddings", "Events", "Commercial"
  mainImg: yourMainImage,
  secondaryImg: yourSecondaryImage,
  url: "/work/your-project-slug",
  description: "Brief description of the project",
  details: [
    {
      title: "Detail Title",
      description: "Detail description",
    },
    // Add more details...
  ],
  gallery: [image1, image2, image3], // All images for lightbox
}
```

### 5. Customize Categories (Optional)

If you want different categories, edit `src/PortfolioState.js`:

```javascript
export const portfolioCategories = [
  "All",
  "Your Category 1",
  "Your Category 2",
  "Your Category 3",
];
```

Then update the `category` field in each project to match.

## 🎨 What's New - Priority 1 Features

### ✅ Working Contact Form
- Full validation (name, email, message required)
- EmailJS integration for email delivery
- Success/error messaging
- Responsive design

### ✅ Portfolio Categories
- Filter by: Portraits, Weddings, Events, Commercial
- Smooth filtering with animations
- Category tags on each project

### ✅ Image Lightbox
- Click any image to view full-screen
- Keyboard navigation (← →)
- Image counter
- Swipe gestures on mobile

### ✅ Professional Contact Page
- Working contact form
- Social media links with icons
- Email and phone links
- Modern layout

## 🧪 Testing

Run the development server:
```bash
npm start
```

Visit:
- Home: http://localhost:3000
- Portfolio: http://localhost:3000/work
- Contact: http://localhost:3000/contact

Test the contact form (after EmailJS setup) by submitting a message.

## 📝 Next Steps (Priority 2 & 3)

Future improvements can include:
- SEO optimization (meta tags, alt text)
- Performance optimization (WebP images, lazy loading)
- Testimonials section
- Blog/news section
- Upgrade to React 18
- Dark/light mode
- CMS integration (Contentful/Sanity)

## 🐛 Troubleshooting

**Contact form not sending:**
- Verify EmailJS Service ID, Template ID, and Public Key
- Check browser console for errors
- Ensure EmailJS service is active

**Images not loading:**
- Check file paths in PortfolioState.js
- Ensure images are in src/img/ folder
- Verify imports at top of PortfolioState.js

**Lightbox not working:**
- No external package needed - uses custom Lightbox component
- Check browser console for CSS errors
- Ensure react-icons is installed

## 📚 Documentation

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Image Lightbox](https://github.com/frontend-collective/react-image-lightbox) - ~~DEPRECATED~~ Now using custom Lightbox component
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [Styled Components](https://styled-components.com/)
