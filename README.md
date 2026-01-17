# Mithaq – Wedding Planning Platform

Mithaq is a modern wedding planning platform designed to simplify how couples explore services, compare vendors, and organize their wedding journey in one structured experience.

The project is built as a real-world front-end application that reflects realistic user flows, business logic, and UI decisions found in production platforms.

---

## Brand Overview

Mithaq represents commitment, clarity, and trust.

Wedding planning is often scattered across multiple platforms, vendors, and conversations. Mithaq brings everything together into a single, well-organized system that helps couples make confident decisions without unnecessary stress.

The brand principles focus on:
- Clear structure and organization
- Simplicity over overload
- Consistent visual language
- Calm and reliable user experience

---

## Product Vision

Mithaq simulates the complete wedding planning lifecycle:

- Discovering wedding services and vendors
- Exploring detailed service and vendor profiles
- Comparing packages, pricing, and availability
- Booking appointments with planners
- Selecting dates, services, and products
- Managing a personalized shopping cart
- Requiring authentication before sensitive actions

The goal is to present a realistic, end-to-end product rather than a static showcase.

---

## Core Features

- Fully responsive UI across all screen sizes
- Light and Dark mode support
- Unified shop experience for:
  - Wedding services
  - Vendors
  - Products
- Detailed pages with:
  - Image galleries
  - Pricing and packages
  - Availability and date selection
  - Reviews and ratings
- Appointment booking with validation logic
- User-specific shopping cart
- Secure authentication via Firebase:
  - Email and password
  - Google sign-in
  - Facebook sign-in
- Smooth animations and page transitions
- Toast notifications and loading states
- Modular and reusable UI components

---

## Technology Stack

### Frontend
- React 19
- React Router DOM v7
- Tailwind CSS
- Framer Motion
- Swiper.js

### Authentication
- Firebase Authentication

### Data Handling
- Static data and mock APIs
- JSON Server for local development simulation

### Tooling
- Vite
- ESLint
- PostCSS

---

## Architecture Highlights

- Component-based architecture
- Clear separation of concerns:
  - Pages
  - Layouts
  - Shared components
- Scalable folder structure
- Clean routing and state management
- Production-ready build configuration

---

## What This Project Demonstrates

- Building scalable React applications
- Strong understanding of UI and UX flows
- Handling authentication and protected actions
- Writing clean and maintainable front-end code
- Attention to user experience and edge cases
- Readiness for real-world deployment

---

## Screenshots
### Services
![Services](public/screenshots/Services.png)

### Service page
![Service page](public/screenshots/servicepage.png)


### Vendor Details
![Vendor Details](public/screenshots/vendordetails.png)

### Blog
![Blog](public/screenshots/Blog.png)

### Blog Details
![Blog Details](public/screenshots/blogdetails.png)


### Shop
![Shop](public/screenshots/shop.png)

### Cart
![Cart](public/screenshots/cart.png)

### Dark Mode
![Dark Mode](public/screenshots/Darkmode.png)

### About
![About](public/screenshots/about.png)

---

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run server    # Run JSON Server on port 3000
