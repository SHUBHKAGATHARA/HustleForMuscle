# 🏋️ Hustle For Muscle - Premium Gym Website

A complete, ultra-premium, fully functional gym website built with React, TailwindCSS, Framer Motion, GSAP, and SwiperJS.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-cyan)

## ✨ Features

### 🎨 Design
- **Black theme** with neon green/red accents
- **Ultra-premium** fitness aesthetic
- **HD images** perfectly fitted to containers
- **Smooth animations** throughout
- **Fully responsive** on all screen sizes
- **Apple-style transitions**
- **Parallax effects**
- **3D hover effects** with tilt and glow

### 📄 Pages
1. **Home** - Hero section, stats counters, features, testimonials
2. **About Us** - Story, mission/vision, timeline, trainer profiles
3. **Programs** - 7 fitness programs with detailed cards
4. **Pricing** - 3 membership tiers with feature comparison
5. **Gallery** - Masonry grid with modal viewer and filters
6. **Contact** - Form with validation, map, quick contact buttons

### 🛠️ Tech Stack
- ⚛️ React 18.3.1
- 🎨 TailwindCSS 3.4.1
- ✨ Framer Motion 11.0.5
- 🎭 GSAP 3.12.5 with ScrollTrigger
- 🎪 SwiperJS 11.0.7
- 📧 EmailJS 4.3.3
- 📋 React Hook Form 7.51.0
- 🎯 Lucide React Icons
- 🚀 React Router 6.22.0
- ⚡ Vite 5.1.0

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies

```powershell
cd c:\Users\kagat\OneDrive\Desktop\GYM
npm install
```

### Step 2: Configure EmailJS (Contact Form)

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set Up Email Service**
   - Add an email service (Gmail, Outlook, etc.)
   - Note your **Service ID**

3. **Create Email Template**
   - Create a new template with these variables:
     ```
     {{from_name}}
     {{from_email}}
     {{phone}}
     {{message}}
     {{to_name}}
     ```
   - Note your **Template ID**

4. **Get Public Key**
   - Go to Account → API Keys
   - Copy your **Public Key**

5. **Update Contact.jsx**
   - Open `src/pages/Contact.jsx`
   - Replace placeholders (lines 32-34):
     ```javascript
     const serviceID = 'your_actual_service_id';
     const templateID = 'your_actual_template_id';
     const publicKey = 'your_actual_public_key';
     ```
   - Uncomment line 43:
     ```javascript
     await emailjs.send(serviceID, templateID, templateParams, publicKey);
     ```
   - Comment out line 46 (demo simulation)

### Step 3: Run Development Server

```powershell
npm run dev
```

The website will open at `http://localhost:3000`

### Step 4: Build for Production

```powershell
npm run build
```

Production files will be in the `dist` folder.

## 📁 Project Structure

```
GYM/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navbar with animations
│   │   ├── Footer.jsx           # Footer with links & info
│   │   ├── ScrollToTop.jsx      # Auto scroll on route change
│   │   ├── AnimatedSection.jsx  # GSAP scroll animations
│   │   └── AnimatedCounter.jsx  # Number counter component
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── About.jsx            # About us page
│   │   ├── Programs.jsx         # Programs showcase
│   │   ├── Pricing.jsx          # Membership plans
│   │   ├── Gallery.jsx          # Image gallery
│   │   └── Contact.jsx          # Contact form
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  neon: {
    green: '#39FF14',  // Change neon green
    red: '#FF073A',    // Change neon red
  },
}
```

### Fonts
Update `index.html` Google Fonts link and `tailwind.config.js`

### Images
Replace Unsplash URLs in page components with your own images

### Contact Info
Update details in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## 🌟 Key Features Breakdown

### Animations
- **Page Load**: Fade-in animation on mount
- **Scroll Triggers**: GSAP ScrollTrigger for reveals
- **Hover Effects**: 3D transforms, scale, glow
- **Route Transitions**: Smooth page changes
- **Parallax**: Background movement on scroll
- **Counters**: Animated number counting

### Responsiveness
- Mobile-first design
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Hamburger menu on mobile
- Optimized grid layouts
- Touch-friendly interactions

### Performance
- Lazy loading images
- Code splitting with Vite
- Optimized animations (GPU accelerated)
- Minimal re-renders
- Production build optimization

## 📱 Mobile Optimization

The website is fully responsive:
- **Mobile (< 768px)**: Single column, hamburger menu
- **Tablet (768px - 1024px)**: 2-column grids
- **Desktop (> 1024px)**: Full layouts with animations

## 🐛 Troubleshooting

### CSS Errors (@tailwind warnings)
These are expected in VS Code. TailwindCSS processes these at build time.

### Images Not Loading
Ensure you have an internet connection for Unsplash CDN images.

### EmailJS Not Working
1. Verify your Service ID, Template ID, and Public Key
2. Check EmailJS dashboard for quota limits
3. Ensure template variables match the code

### Animations Not Smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity on lower-end devices

## 📝 To-Do (Optional Enhancements)

- [ ] Add real gym images instead of stock photos
- [ ] Configure actual EmailJS credentials
- [ ] Add blog section
- [ ] Implement class booking system
- [ ] Add member login/dashboard
- [ ] Integrate payment gateway
- [ ] Add live chat support
- [ ] SEO optimization
- [ ] Analytics integration

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for portfolio/educational purposes.

## 🤝 Support

For issues or questions:
- Email: info@hustleformuscle.com
- WhatsApp: +1 (234) 567-890

---

**Built with 💪 by a Senior React Developer**

Transform Your Body. Transform Your Life.
