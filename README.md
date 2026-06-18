# HRY Printing — Nuxt 3 Frontend

A clean, public-facing website for **HRY Printing** built with Nuxt 3, Tailwind CSS, and the HRY Laravel REST API.

---

## Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Framework   | Nuxt 3 (Vue 3)                 |
| Styling     | Tailwind CSS                   |
| Fonts       | Barlow Condensed, Barlow, DM Mono (Google Fonts) |
| State       | `useState` / `useFetch` (built-in) |
| Data        | HRY Laravel API                |

---

## Pages

| Route                  | Description                            |
|------------------------|----------------------------------------|
| `/`                    | Homepage — hero, products, services, testimonials, CTA |
| `/products`            | Listing with category filters, search, grid/list view, pagination |
| `/products/:slug`      | Product detail — gallery, size/finish options, specs |
| `/services`            | Services grid + how-it-works process   |
| `/services/:slug`      | Service detail — features, gallery, related services |
| `/about`               | Company story, stats, values, capabilities |
| `/contact`             | Contact form with file upload          |

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env`:
```env
NUXT_PUBLIC_API_BASE=http://localhost:8080/api/v1
```

> Make sure the **HRY Laravel API** is running at that address.  
> See the `hry-printing` Laravel project to start it with Docker:  
> ```bash
> cd hry-printing && make install
> ```

### 3. Run development server

```bash
npm run dev
```

Open **http://localhost:3000**

### 4. Build for production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
hry-nuxt/
├── assets/css/
│   └── main.css              # Global styles & Tailwind components
├── components/
│   ├── layout/
│   │   ├── Header.vue        # Sticky nav with mobile menu
│   │   └── Footer.vue        # Links, contact, socials
│   └── ui/
│       ├── ProductCard.vue   # Product listing card
│       └── ServiceCard.vue   # Service listing card
├── composables/
│   └── useApi.ts             # All public API calls
├── layouts/
│   └── default.vue           # Header + main + footer
├── pages/
│   ├── index.vue             # Homepage
│   ├── about.vue             # About page
│   ├── contact.vue           # Contact form
│   ├── products/
│   │   ├── index.vue         # Products listing
│   │   └── [slug].vue        # Product detail
│   └── services/
│       ├── index.vue         # Services listing
│       └── [slug].vue        # Service detail
├── public/
│   └── favicon.svg
├── error.vue                 # 404 / 500 error page
├── app.vue                   # Root with grain overlay
├── nuxt.config.ts
└── tailwind.config.ts
```

---

## Design System

| Token          | Value                                  |
|----------------|----------------------------------------|
| Primary color  | `#FF6B00` (ember-500)                  |
| Background     | `#08080A` (ink-950)                    |
| Surface        | `#18181C` (ink-800)                    |
| Text           | `#FFF8EE` (cream-100)                  |
| Muted text     | `#888899` (mist)                       |
| Display font   | Barlow Condensed 800/900               |
| Body font      | Barlow 400/500                         |
| Mono font      | DM Mono 400                            |

### CSS Component Classes

| Class          | Usage                     |
|----------------|---------------------------|
| `.wrap`        | Max-width centred container |
| `.btn-primary` | Orange filled button      |
| `.btn-outline` | Ghost/outline button      |
| `.card`        | Dark surface card with hover |
| `.lbl`         | Section label with accent line |
| `.inp`         | Form input field          |
| `.hr`          | Subtle horizontal divider |
| `.skel`        | Animated loading skeleton |
| `.img-zoom`    | Image with zoom-on-hover  |
| `.grad-text`   | Orange gradient text      |

---

## API Connection

All data is fetched from the Laravel backend via `composables/useApi.ts`.  
No authentication is required — all endpoints are public read-only.

| Method              | Endpoint                        |
|---------------------|---------------------------------|
| `getFeaturedProducts()` | `GET /products/featured`    |
| `getProducts(params)`   | `GET /products`             |
| `getProduct(slug)`      | `GET /products/:slug`       |
| `getCategories()`       | `GET /categories`           |
| `getActiveBanners()`    | `GET /banners/active`       |
| `getServices()`         | `GET /services`             |
| `getService(slug)`      | `GET /services/:slug`       |
| `getTestimonials()`     | `GET /testimonials`         |
| `getSettings()`         | `GET /settings`             |

---

## Connecting Both Projects

```
hry-printing/    ← Laravel API  → http://localhost:8080
hry-nuxt/        ← Nuxt Frontend → http://localhost:3000
```

Start API first, then frontend:

```bash
# Terminal 1 — API
cd hry-printing && make install

# Terminal 2 — Frontend
cd hry-nuxt && npm install && npm run dev
```
# hry_website
