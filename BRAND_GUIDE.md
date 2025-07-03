# 🐝 Sharebeez Brand Guide

## Brand Overview

**Sharebeez** is a community-first platform that empowers people to save money, reduce waste, and build stronger connections through shared resources and group purchasing power.

**Mission:** Empowering communities to lower costs by buying, selling, and sharing products and services — all in one place.

**Vision:** Creating a world where communities thrive through collaboration, sustainability, and shared prosperity.

**Values:**
- 🤝 **Community First** - Building stronger neighborhoods through collaboration
- 💰 **Shared Prosperity** - Everyone saves when we work together
- 🌱 **Sustainability** - Reducing waste through sharing and reuse
- 🔒 **Trust & Safety** - Secure, verified community interactions

---

## 🎨 Visual Identity

### Logo System

#### Primary Logo
The Sharebeez logo combines a stylized bee with modern typography to represent community, collaboration, and the "hive" concept.

**Logo Components:**
- **Bee Icon:** Animated bee with mint and lavender gradient wings
- **Wordmark:** "Share" in white + "beez" in yellow with animated dot
- **Tagline:** "Buy Together. Save Together. Share Smarter."

#### Logo Variations
- **Primary:** Full logo with bee + wordmark + tagline
- **Horizontal:** Bee + wordmark only
- **Icon Only:** Bee symbol for app icons and favicons
- **Monochrome:** Single color versions for special applications

### Typography

#### Primary Font: Inter
- **Weights Used:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold), 900 (Black)
- **Usage:** All body text, headings, and UI elements
- **Characteristics:** Modern, clean, highly readable, excellent for digital interfaces

#### Font Hierarchy
```css
/* Headings */
h1: font-size: 3.5rem (56px), font-weight: 900 (Black)
h2: font-size: 3rem (48px), font-weight: 800 (Extrabold)  
h3: font-size: 2rem (32px), font-weight: 700 (Bold)
h4: font-size: 1.5rem (24px), font-weight: 600 (Semibold)

/* Body Text */
Large: font-size: 1.25rem (20px), font-weight: 400 (Regular)
Regular: font-size: 1rem (16px), font-weight: 400 (Regular)
Small: font-size: 0.875rem (14px), font-weight: 400 (Regular)

/* UI Elements */
Button: font-weight: 600 (Semibold)
Caption: font-weight: 500 (Medium)
```

---

## 🌈 Color Palette

### Primary Colors

#### Mint Green Family
```css
mint-50:  #f0fdf9   /* Lightest mint for backgrounds */
mint-100: #ccfdf7   /* Light mint for subtle accents */
mint-200: #99f6e4   /* Medium-light mint */
mint-300: #5eead4   /* Core mint - primary brand color */
mint-400: #2dd4bf   /* Medium mint for interactions */
mint-500: #14b8a6   /* Standard mint */
mint-600: #0d9488   /* Dark mint for text */
mint-700: #0f766e   /* Darker mint */
mint-800: #115e59   /* Very dark mint */
mint-900: #134e4a   /* Darkest mint */
```

#### Lavender Purple Family
```css
lavender-50:  #faf5ff   /* Lightest lavender for backgrounds */
lavender-100: #f3e8ff   /* Light lavender for subtle accents */
lavender-200: #e9d5ff   /* Medium-light lavender */
lavender-300: #d8b4fe   /* Core lavender - secondary brand color */
lavender-400: #c084fc   /* Medium lavender for interactions */
lavender-500: #a855f7   /* Standard lavender */
lavender-600: #9333ea   /* Dark lavender for text */
lavender-700: #7c3aed   /* Darker lavender */
lavender-800: #6b21a8   /* Very dark lavender */
lavender-900: #581c87   /* Darkest lavender */
```

### Gradient System

#### Primary Gradients
```css
/* Main brand gradient - mint to lavender */
.bg-gradient-mint-lavender {
  background: linear-gradient(135deg, #5eead4 0%, #d8b4fe 100%);
}

/* Soft version for backgrounds */
.bg-gradient-mint-lavender-soft {
  background: linear-gradient(135deg, #f0fdf9 0%, #faf5ff 100%);
}

/* Reverse gradient */
.bg-gradient-lavender-mint {
  background: linear-gradient(135deg, #d8b4fe 0%, #5eead4 100%);
}
```

### Supporting Colors

#### Accent Colors
```css
/* Success/Savings */
green-500: #22c55e
green-600: #16a34a

/* Warning/Attention */
yellow-400: #fbbf24
yellow-500: #f59e0b

/* Error/Alert */
red-500: #ef4444
red-600: #dc2626

/* Neutral Grays */
gray-50:  #f9fafb
gray-100: #f3f4f6
gray-200: #e5e7eb
gray-300: #d1d5db
gray-400: #9ca3af
gray-500: #6b7280
gray-600: #4b5563
gray-700: #374151
gray-800: #1f2937
gray-900: #111827
```

---

## 🎯 Design Principles

### 1. Community-Centric
- **Warm, welcoming colors** (mint and lavender)
- **Rounded corners** for friendly, approachable feel
- **Generous white space** for clarity and calm
- **Human-centered imagery** showing real people and communities

### 2. Trust & Transparency
- **Clean, minimal design** that doesn't overwhelm
- **Clear visual hierarchy** for easy information processing
- **Consistent patterns** that users can learn and trust
- **Accessible color contrasts** for all users

### 3. Organic & Natural
- **Bee-inspired elements** throughout the design
- **Hexagonal patterns** referencing hive structures
- **Flowing gradients** that feel natural and organic
- **Subtle animations** that bring life to the interface

### 4. Modern & Professional
- **Contemporary typography** (Inter font family)
- **Sophisticated color palette** with purposeful gradients
- **Clean iconography** with consistent stroke weights
- **Responsive design** that works beautifully on all devices

---

## 📱 Component Styles

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #5eead4, #d8b4fe);
  color: white;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

/* Secondary Button */
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 12px;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

### Sections
```css
.section-padding {
  padding: 80px 0;
}

.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## 🎬 Animation Guidelines

### Timing
- **Fast interactions:** 0.2s (hover states, button presses)
- **Standard transitions:** 0.3s (card hovers, modal opens)
- **Page transitions:** 0.5s (section reveals, page loads)
- **Decorative animations:** 1s+ (bee wing flutter, gradient shifts)

### Easing
- **Standard:** `ease-in-out` for most transitions
- **Bouncy:** `cubic-bezier(0.68, -0.55, 0.265, 1.55)` for playful elements
- **Smooth:** `cubic-bezier(0.4, 0, 0.2, 1)` for elegant transitions

---

## 📐 Spacing System

### Base Unit: 4px
```css
/* Spacing Scale */
1: 4px    /* xs */
2: 8px    /* sm */  
3: 12px   /* md */
4: 16px   /* lg */
6: 24px   /* xl */
8: 32px   /* 2xl */
12: 48px  /* 3xl */
16: 64px  /* 4xl */
20: 80px  /* 5xl */
24: 96px  /* 6xl */
```

---

## 🔤 Voice & Tone

### Brand Voice
- **Friendly & Approachable:** Like talking to a helpful neighbor
- **Empowering:** Focuses on what communities can achieve together
- **Optimistic:** Emphasizes positive outcomes and shared success
- **Clear & Direct:** No jargon, easy to understand for everyone

### Tone Variations
- **Marketing:** Inspiring and aspirational
- **Product:** Helpful and instructional  
- **Support:** Patient and understanding
- **Community:** Warm and inclusive

### Key Messaging
- "Buy Together. Save Together. Share Smarter."
- "Community-powered commerce"
- "Stronger together"
- "Your neighborhood, your savings"
- "Building connections, reducing costs"

---

## 📋 Usage Guidelines

### Do's ✅
- Use the mint-to-lavender gradient as the primary brand element
- Maintain generous white space for clarity
- Use rounded corners consistently (12px-24px radius)
- Include bee/hive imagery organically in designs
- Show real community interactions and authentic platform visuals
- Use Inter font family for all text
- Maintain high contrast for accessibility

### Don'ts ❌
- Don't use the logo on busy backgrounds without proper contrast
- Don't stretch or distort the bee icon
- Don't use colors outside the defined palette
- Don't use placeholder or mock data in production
- Don't overcrowd interfaces with too many elements
- Don't use fonts other than Inter
- Don't ignore accessibility guidelines

---

*This brand guide ensures consistent, high-quality visual communication across all Sharebeez touchpoints while maintaining the community-first, trustworthy, and modern brand identity.*
