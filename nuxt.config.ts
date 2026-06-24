export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

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

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api/v1',
    },
  },

  app: {
    head: {
      title: 'HRY Printing – Premium Printing Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'HRY Printing delivers top-quality print products — business cards, banners, packaging, large-format printing and more across Thailand.' },
        { property: 'og:title',       content: 'HRY Printing – Premium Printing Services' },
        { property: 'og:description', content: 'Business cards, banners, packaging, stickers and more.' },
        { property: 'og:type',        content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  compatibilityDate: '2024-07-30',
})
