<template>
  <div class="grain">
    <NuxtLayout><NuxtPage /></NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl
const route = useRoute()

// Absolute canonical URL for the current page (trailing slash stripped).
const canonicalUrl = computed(() => {
  const path = route.path.replace(/\/+$/, '') || ''
  return `${siteUrl}${path}`
})

// LocalBusiness structured data — helps Google show HRY Printing for local
// searches like "printing in Phnom Penh" and "printing in Cambodia Phnom Penh".
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PrintShop'],
  '@id': `${siteUrl}/#business`,
  name: 'HRY Printing',
  alternateName: ['HRY', 'HRY Printing Cambodia', 'Vanny Printing Shop'],
  description:
    'HRY Printing is a leading printing company for printing in Phnom Penh, Cambodia, offering t-shirt printing, uniforms, business cards, banners, stickers, packaging, silk screen, DTF, sublimation and embroidery.',
  slogan: 'The best printing in Phnom Penh, Cambodia.',
  keywords:
    'printing in Phnom Penh, printing in Cambodia Phnom Penh, printing company Phnom Penh, t-shirt printing Phnom Penh, banner printing Phnom Penh',
  url: siteUrl,
  telephone: ['+855 10 871 011', '+855 17 871 011', '+855 97 9871 011'],
  email: 'hrkhfilm@gmail.com',
  image: `${siteUrl}/favicon.png`,
  logo: `${siteUrl}/favicon.png`,
  priceRange: '$$',
  foundingDate: '2009',
  currenciesAccepted: 'USD, KHR',
  areaServed: [
    { '@type': 'City', name: 'Phnom Penh' },
    { '@type': 'Country', name: 'Cambodia' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#339-340, Street 19, Borey Laykong',
    addressLocality: 'Phnom Penh',
    addressRegion: 'Phnom Penh',
    addressCountry: 'KH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.5564,
    longitude: 104.9282,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Printing Services in Phnom Penh',
    itemListElement: [
      'Silk Screen Printing', 'DTF Printing', 'Sublimation Printing', 'Embroidery',
      'T-Shirt Printing', 'Uniform Printing', 'Business Cards', 'Banner Printing',
      'Sticker Printing', 'Packaging Printing', 'Offset Printing', 'Large Format Printing',
    ].map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s, areaServed: 'Phnom Penh, Cambodia' },
    })),
  },
  hasMap: 'https://maps.app.goo.gl/HtTykLyByJkPWy7T7',
  sameAs: ['https://www.facebook.com/vannyprintingshop'],
}

// WebSite schema — reinforces the brand entity and enables sitelinks search box.
const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'HRY Printing',
  description: 'Printing in Phnom Penh, Cambodia — HRY Printing.',
  publisher: { '@id': `${siteUrl}/#business` },
  inLanguage: 'en',
}

useHead({
  link: [{ rel: 'canonical', href: () => canonicalUrl.value }],
  meta: [{ property: 'og:url', content: () => canonicalUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessJsonLd),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(webSiteJsonLd),
    },
  ],
})
</script>
