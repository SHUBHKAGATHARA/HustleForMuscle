# 🎨 Visual Style Guide - Hustle For Muscle

## 🎯 Brand Identity

### Gym Name
**Hustle For Muscle**

### Tagline
"Transform Your Body. Transform Your Life."

### Brand Personality
- **Premium** - High-end fitness experience
- **Powerful** - Strength and determination
- **Modern** - Cutting-edge facilities and approach
- **Motivational** - Inspiring transformation

---

## 🎨 Color Palette

### Primary Colors
```css
Black (Primary Background)
- Hex: #000000
- RGB: 0, 0, 0
- Usage: Main background, primary text containers

Dark Secondary
- Hex: #0a0a0a
- RGB: 10, 10, 10
- Usage: Card backgrounds, sections

Dark Accent
- Hex: #111111
- RGB: 17, 17, 17
- Usage: Hover states, borders
```

### Accent Colors
```css
Neon Green (Success, Energy)
- Hex: #39FF14
- RGB: 57, 255, 20
- Usage: Primary CTA buttons, success states, highlights
- Effect: Glow shadow for emphasis

Neon Red (Intensity, Action)
- Hex: #FF073A
- RGB: 255, 7, 58
- Usage: Secondary buttons, important notices, accents
- Effect: Glow shadow for intensity
```

### Neutral Colors
```css
White
- Hex: #FFFFFF
- Usage: Primary text, icons

Gray (Various Shades)
- Gray-300: #D1D5DB - Light text
- Gray-400: #9CA3AF - Secondary text
- Gray-500: #6B7280 - Muted text
- Gray-600: #4B5563 - Disabled text
- Gray-700: #374151 - Borders
```

---

## 📝 Typography

### Font Families

#### Display Font (Headings)
```css
Font: Bebas Neue
Weights: Regular (400)
Usage: H1, H2, H3, Headlines, Section titles
Style: Bold, uppercase, condensed
Character: Athletic, powerful, impactful
```

#### Body Font (Content)
```css
Font: Inter
Weights: 300 (Light), 400 (Regular), 500 (Medium), 
         600 (Semi-bold), 700 (Bold), 800 (Extra-bold), 900 (Black)
Usage: Paragraphs, buttons, UI elements
Style: Clean, modern, readable
Character: Professional, versatile
```

### Font Sizes

```css
/* Headings */
H1 (Hero): 96px (6rem) - Desktop | 64px (4rem) - Mobile
H2 (Section): 60px (3.75rem) - Desktop | 48px (3rem) - Mobile
H3 (Card Title): 30px (1.875rem) - Desktop | 24px (1.5rem) - Mobile
H4 (Subtitle): 24px (1.5rem)

/* Body Text */
Large: 20px (1.25rem) - Important content
Regular: 16px (1rem) - Standard text
Small: 14px (0.875rem) - Meta information
Tiny: 12px (0.75rem) - Fine print
```

### Text Styles

```css
.heading-primary {
  font-family: 'Bebas Neue';
  font-size: 96px;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.heading-secondary {
  font-family: 'Bebas Neue';
  font-size: 60px;
  line-height: 1.2;
  letter-spacing: 0.05em;
}

.body-text {
  font-family: 'Inter';
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
}

.button-text {
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

---

## 🎭 Effects & Shadows

### Glow Effects

```css
/* Neon Green Glow */
.glow-green {
  box-shadow: 
    0 0 20px rgba(57, 255, 20, 0.5),
    0 0 40px rgba(57, 255, 20, 0.3);
}

/* Neon Red Glow */
.glow-red {
  box-shadow: 
    0 0 20px rgba(255, 7, 58, 0.5),
    0 0 40px rgba(255, 7, 58, 0.3);
}

/* Text Glow */
.text-glow-green {
  text-shadow: 
    0 0 10px rgba(57, 255, 20, 0.8),
    0 0 20px rgba(57, 255, 20, 0.5),
    0 0 30px rgba(57, 255, 20, 0.3);
}
```

### Hover Effects

```css
/* Card Lift */
.card-hover {
  transform: translateY(-10px) scale(1.02);
  transition: all 0.3s ease;
}

/* Icon Rotate */
.icon-rotate {
  transform: rotate(360deg);
  transition: transform 0.6s ease;
}

/* Image Zoom */
.image-zoom {
  transform: scale(1.1);
  transition: transform 0.6s ease;
}

/* Button Scale */
.button-hover {
  transform: scale(1.05);
  transition: all 0.3s ease;
}
```

---

## 📐 Spacing System

### Grid System
```
8px baseline grid
Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

### Section Padding
```css
Mobile: 80px vertical, 16px horizontal
Tablet: 80px vertical, 32px horizontal
Desktop: 80px vertical, 64px horizontal
```

### Component Spacing
```css
Card Padding: 32px (mobile) | 48px (desktop)
Card Gap: 32px
Section Gap: 64px (mobile) | 96px (desktop)
```

---

## 🎨 UI Components

### Buttons

#### Primary Button
```css
Background: Neon Green (#39FF14)
Text: Black (#000000)
Padding: 16px 32px
Font: Inter, Bold, 18px, Uppercase
Hover: Background → White, Shadow → Neon Green Glow
Effect: Scale 1.05, Shadow
```

#### Secondary Button
```css
Background: Transparent
Border: 2px Neon Red (#FF073A)
Text: Neon Red (#FF073A)
Padding: 16px 32px
Font: Inter, Bold, 18px, Uppercase
Hover: Background → Neon Red, Text → Black
Effect: Scale 1.05
```

### Cards

```css
Background: Dark Secondary (#0a0a0a)
Border: 1px White 10% opacity
Padding: 32px
Border Radius: 0 (sharp edges for modern look)
Hover: Border → Neon Green 50%, Transform → translateY(-10px)
```

### Inputs

```css
Background: Dark Secondary (#0a0a0a)
Border: 1px White 10% opacity
Padding: 12px 16px
Font: Inter, Regular, 16px
Focus: Border → Neon Green
Error: Border → Neon Red
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Default: 0px - 639px (Mobile)
sm: 640px (Large mobile)
md: 768px (Tablet)
lg: 1024px (Desktop)
xl: 1280px (Large desktop)
2xl: 1536px (Extra large)
```

### Layout Changes

```css
Mobile (< 768px):
- Single column layouts
- Hamburger menu
- Stacked cards
- Full-width images
- 64px font size for H1

Tablet (768px - 1024px):
- 2 column grids
- Side navigation visible
- Card grids
- 80px font size for H1

Desktop (> 1024px):
- 3-4 column grids
- Full navigation
- Parallax effects
- 96px font size for H1
```

---

## ✨ Animation Timing

### Durations
```css
Fast: 200ms - 300ms (Hover states, clicks)
Normal: 400ms - 600ms (Transitions, reveals)
Slow: 800ms - 1200ms (Page loads, complex animations)
```

### Easing Functions
```css
Standard: cubic-bezier(0.4, 0, 0.2, 1) - Default smooth
Decelerate: cubic-bezier(0.0, 0, 0.2, 1) - Elements entering
Accelerate: cubic-bezier(0.4, 0, 1, 1) - Elements leaving
Sharp: cubic-bezier(0.4, 0, 0.6, 1) - Quick transitions
```

---

## 🖼️ Image Guidelines

### Image Specifications

```
Format: JPEG (photos), PNG (graphics), SVG (icons)
Quality: 85% compression
Dimensions: 
  - Hero: 1920x1080px (16:9)
  - Cards: 800x600px (4:3)
  - Gallery: 800x600px or 800x1000px
  - Trainer: 600x800px (portrait)
Optimization: TinyPNG, ImageOptim
Loading: Lazy loading enabled
```

### Image Style
```
- High contrast
- Sharp focus
- Professional photography
- Gym/fitness themed
- Action shots preferred
- No stock photo watermarks
- Consistent color grading
```

---

## 🎯 Icon Usage

### Icon Library: Lucide React

```javascript
// Size Guidelines
Small: 16px (w-4 h-4)
Medium: 20px (w-5 h-5)
Large: 24px (w-6 h-6)
XLarge: 32px (w-8 h-8)
Hero: 64px (w-16 h-16)

// Colors
Primary: Neon Green (#39FF14)
Secondary: Neon Red (#FF073A)
Neutral: White (#FFFFFF)
```

### Common Icons Used
- Dumbbell (logo, fitness)
- Zap (energy, power)
- Users (community, trainers)
- Trophy (achievements)
- Target (goals)
- Heart (health, wellness)
- Check (success, features)
- X (close, not included)
- Menu (navigation)
- Phone (contact)
- Mail (email)
- MapPin (location)

---

## 🎨 Gradients

### Background Gradients
```css
/* Hero Gradient */
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.8),
  rgba(0, 0, 0, 0.6),
  rgba(0, 0, 0, 0.9)
);

/* Accent Gradient */
background: linear-gradient(
  to right,
  rgba(57, 255, 20, 0.1),
  rgba(255, 7, 58, 0.1)
);

/* Text Gradient */
background: linear-gradient(
  to right,
  #39FF14,
  #FF073A
);
```

---

## 📐 Layout Grid

### Container
```css
Max Width: 1280px (7xl)
Horizontal Padding: 16px (mobile) → 64px (desktop)
Centered: margin auto
```

### Grid System
```css
1 Column: Mobile (< 640px)
2 Columns: Tablet (640px - 1024px)
3 Columns: Desktop (> 1024px)
4 Columns: Large Desktop (> 1280px)

Gap: 32px (2rem)
```

---

## 🎬 Animation Recipes

### Page Load
```javascript
opacity: 0 → 1
duration: 600ms
easing: ease-in
```

### Scroll Reveal
```javascript
opacity: 0 → 1
translateY: 50px → 0
duration: 800ms
easing: power3.out
trigger: element 80% in viewport
```

### Card Hover
```javascript
translateY: 0 → -10px
scale: 1 → 1.03
duration: 300ms
easing: ease-out
```

### Counter
```javascript
from: 0
to: target number
duration: 2000ms
easing: linear
format: comma separated
```

---

## ✅ Accessibility

### Color Contrast
- Text on Black: White (#FFFFFF) - AAA
- Neon on Black: #39FF14 - AA
- Red on Black: #FF073A - AA

### Focus States
- Outline: 2px solid Neon Green
- Offset: 2px
- Visible on all interactive elements

### Font Sizes
- Minimum: 14px (0.875rem)
- Body: 16px (1rem)
- All text scalable with browser zoom

---

**This style guide ensures consistent, premium design throughout the website.** 🎨
