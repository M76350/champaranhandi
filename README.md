# 🍖 Purvi Champaran Handi Meat — Official Website

**Live URL:** [https://champaran-delight.vercel.app](https://champaran-delight.vercel.app)

> Authentic Champaran Handi Mutton restaurant in Rafiganj, Gaya District, Bihar.
> Old traditional multi-variety recipes, slow-cooked in clay pots.
> Nearest to Aurangabad (30km), Gaya (40km), Sasaram (50km), Dehri-on-Sone (45km).

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages & Routes](#pages--routes)
- [SEO](#seo)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Admin Panel](#admin-panel)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About

**Purvi Champaran Handi Meat, Rafiganj** is a full-featured restaurant website built for a traditional Bihar-style mutton handi restaurant. The site is bilingual (English + Hindi), mobile-first, SEO-optimized, and includes a blog, cart system, WhatsApp ordering, admin panel, and full legal compliance pages.

**Owner:** Rohit Chauhan
**Location:** Main Road, Rafiganj, Gaya District, Bihar 824125
**Phone:** +91 7424961362
**Email:** champaranmeatrafiganj@gmail.com
**Hours:** 11 AM – 11 PM (All Days)

---

## Features

- **Bilingual** — Full English / Hindi toggle (CSS-based, persisted in localStorage)
- **Dark / Light Mode** — Auto-detects time (dark after 6 PM), manual toggle, persisted
- **Menu** — 26 items across 7 categories with search, filter, image hover slider, quantity selector
- **Cart System** — Add to cart, quantity control, WhatsApp order generation with full item list
- **Blog** — SEO-optimized blog with slug-based URLs, category filter, bilingual content
- **Auth System** — Login / Register with full validation, password strength meter, protected routes
- **Admin Panel** — Dashboard, blog post management (create/delete/view), protected by admin role
- **Cookie Consent** — GDPR/DPDP-compliant banner with accept/decline
- **Welcome Popup** — First-visit only, smooth animation
- **Auto Image Slider** — Infinite marquee with local images
- **WhatsApp Floating Button** — Always visible, pre-filled order message
- **Legal Pages** — Privacy Policy, Terms of Service, Disclaimer
- **PWA Ready** — Web App Manifest with shortcuts
- **Security Headers** — CSP, X-Frame-Options, X-XSS-Protection via vercel.json

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 (SWC) |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix UI) |
| Routing | React Router DOM v6 |
| State | React Context API |
| Forms | React Hook Form + Zod |
| Notifications | Sonner (toast) |
| Backend (ready) | Supabase (configured, ready to connect) |
| Data Fetching | TanStack Query (configured) |
| Testing | Vitest + Testing Library |
| Deployment | Vercel |

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, Menu, Image Slider, About, Contact |
| `/menu` | Menu | Full menu with search & category filter |
| `/about` | About | Story, features, nearby cities |
| `/contact` | Contact | Google Form, Map, contact info |
| `/blog` | Blog | Blog listing with category filter |
| `/blog/:slug` | Blog Post | Full blog post with related posts |
| `/login` | Login | Email/password login |
| `/register` | Register | Registration with password strength |
| `/admin` | Admin | Protected admin dashboard (admin only) |
| `/privacy-policy` | Privacy Policy | Full privacy policy |
| `/terms` | Terms of Service | Full terms of service |
| `/disclaimer` | Disclaimer | Full disclaimer |
| `*` | 404 | Fun animated not-found page |

---

## SEO

- **Multi-city targeting:** Rafiganj, Gaya, Aurangabad, Sasaram, Dehri-on-Sone, Kochas, Buxar
- **Structured Data:** Restaurant schema, LocalBusiness schema, BreadcrumbList schema
- **Open Graph + Twitter Card** for social sharing
- **Geo meta tags** with exact coordinates (24.816439, 84.636412)
- **Sitemap:** `/sitemap.xml` — all pages with priority, changefreq, image tags
- **Robots.txt** — blocks admin/login/register from crawlers
- **Google Search Console** verified
- **Canonical URL** set
- **Slug-based blog URLs** for keyword-rich paths
- **Alt text** on all images with location keywords

---

## Project Structure

```
src/
├── assets/
│   ├── menu/          # Local menu item images (webp/jpg)
│   ├── blog/          # Blog post images (local)
│   ├── slider/        # Auto-slider images (local)
│   └── welcome-champaran-handi-cooking.jpg
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── MenuSection.tsx
│   ├── FoodCard.tsx
│   ├── CartDrawer.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── AutoImageSlider.tsx
│   ├── WelcomePopup.tsx
│   ├── CookieConsent.tsx
│   ├── ProtectedRoute.tsx
│   └── TawkToWidget.tsx
├── data/
│   ├── menuItems.ts   # All 26 menu items
│   └── blogPosts.ts   # Blog posts data
├── hooks/
│   ├── useAuth.tsx    # Auth context (login/register/logout)
│   ├── useCart.tsx    # Cart context
│   ├── useLanguage.tsx
│   ├── useTheme.tsx
│   └── useScrollAnimation.tsx
├── pages/
│   ├── Index.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Admin.tsx
│   ├── PrivacyPolicy.tsx
│   ├── Terms.tsx
│   ├── Disclaimer.tsx
│   └── NotFound.tsx
└── App.tsx

public/
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
├── _redirects
├── handi-meat-logo.webp
└── .well-known/security.txt

vercel.json          # Security headers + SPA rewrites
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

---

## Admin Panel

Access the admin panel at `/admin`. Admin login is required.

**Admin credentials:**
- **ID:** `admin`
- **Password:** `admin@123`

The admin panel includes:
- Dashboard with stats (blog posts, menu items, categories)
- Blog post management (create, view, delete)
- Quick actions (new post, view menu, view blog)

> **Note:** Currently uses static in-memory storage. Connect Supabase to make it persistent — the client is already configured in `src/integrations/supabase/client.ts`.

---

## Deployment

The project is deployed on **Vercel**.

**Live URL:** [https://champaran-delight.vercel.app](https://champaran-delight.vercel.app)

### Deploy your own

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

`vercel.json` is pre-configured with:
- SPA rewrites (all routes → index.html)
- Security headers (CSP, X-Frame-Options, etc.)
- Cache headers for static assets

### Environment Variables

Create a `.env` file (already present):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

---

## Contact

**Purvi Champaran Handi Meat, Rafiganj**
Main Road, Rafiganj, Gaya District, Bihar 824125

- 📞 Phone: +91 7424961362
- 💬 WhatsApp: [wa.me/917424961362](https://wa.me/917424961362)
- 📧 Email: champaranmeatrafiganj@gmail.com
- 🗺️ Maps: [Google Maps](https://maps.app.goo.gl/TidfVbdNfqjxw9hh9)

---

*Built with ❤️ by [Manish Kumar](https://github.com/M76350)*
