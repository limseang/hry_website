const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://hryprinting.com'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Public canonical URL of the live site. Change this to your real domain.
  // You can also override it without editing code via the NUXT_PUBLIC_SITE_URL env var.
  site: {
    url: SITE_URL,
    name: 'HRY Printing',
  },

  googleFonts: {
    families: {
      'Barlow+Condensed': [400, 600, 700, 800, 900],
      'Barlow':           [300, 400, 500, 600],
      'DM+Mono':          [400, 500],
    },
    display: 'swap',
    preload: true,
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  // robots.txt — allow everything and point crawlers at the sitemap
  robots: {
    allow: '/',
    disallow: ['/auth/', '/orders/'],
  },

  // Auto-generated sitemap.xml
  sitemap: {
    autoLastmod: true,
    // Keep private/app routes out of the sitemap so search engines focus on
    // the public marketing pages we want to rank.
    exclude: ['/auth/**', '/orders/**'],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api/v1',
      siteUrl: SITE_URL,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s',
      title: 'HRY Printing – Best Printing Services in Cambodia | Phnom Penh',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'HRY Printing is a leading printing company in Cambodia. Premium printing services in Phnom Penh — t-shirts, uniforms, business cards, banners, stickers, packaging, silk screen, DTF, sublimation & embroidery. Get a quote today.',
        },
        {
          name: 'keywords',
          content: 'printing in Cambodia, best printing in Cambodia, printing Phnom Penh, HRY, HRY Printing, printing company Cambodia, t-shirt printing Cambodia, uniform printing, silk screen printing Cambodia, DTF printing, sublimation printing, embroidery, business cards Cambodia, banner printing Phnom Penh',
        },
        { name: 'author', content: 'HRY Printing' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },

        // Geo targeting — tells search engines this business serves Cambodia
        { name: 'geo.region', content: 'KH' },
        { name: 'geo.placename', content: 'Phnom Penh' },
        { name: 'geo.position', content: '11.5564;104.9282' },
        { name: 'ICBM', content: '11.5564, 104.9282' },

        // Open Graph
        { property: 'og:site_name',   content: 'HRY Printing' },
        { property: 'og:title',       content: 'HRY Printing – Best Printing Services in Cambodia' },
        { property: 'og:description', content: 'Premium printing services in Phnom Penh, Cambodia. T-shirts, uniforms, business cards, banners, packaging & more. Get a quote from HRY today.' },
        { property: 'og:type',        content: 'website' },
        { property: 'og:locale',      content: 'en_US' },
        { property: 'og:image',       content: `${SITE_URL}/favicon.png` },

        // Twitter / X card
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'HRY Printing – Best Printing Services in Cambodia' },
        { name: 'twitter:description', content: 'Premium printing services in Phnom Penh, Cambodia. T-shirts, uniforms, business cards, banners, packaging & more.' },
        { name: 'twitter:image',       content: `${SITE_URL}/favicon.png` },

        { name: 'theme-color', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
      script: [
        // Google tag (gtag.js)
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-JXTYJJYVGY', async: true },
        {
          innerHTML:
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-JXTYJJYVGY');",
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  compatibilityDate: '2024-07-30',
})
