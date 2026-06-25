<template>
  <div class="grain">
    <NuxtLayout><NuxtPage /></NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl

// LocalBusiness structured data — helps Google show HRY Printing for local
// searches like "printing in Cambodia" and "best printing in Phnom Penh".
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'HRY Printing',
  alternateName: ['HRY', 'HRY Printing Cambodia', 'Vanny Printing Shop'],
  description:
    'HRY Printing is a leading printing company in Phnom Penh, Cambodia, offering t-shirt printing, uniforms, business cards, banners, stickers, packaging, silk screen, DTF, sublimation and embroidery.',
  url: siteUrl,
  telephone: ['+855 10 871 011', '+855 17 871 011', '+855 97 9871 011'],
  email: 'hrkhfilm@gmail.com',
  image: `${siteUrl}/favicon.png`,
  logo: `${siteUrl}/favicon.png`,
  priceRange: '$$',
  foundingDate: '2009',
  areaServed: { '@type': 'Country', name: 'Cambodia' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#339-340, Street 19, Borey Laykong',
    addressLocality: 'Phnom Penh',
    addressCountry: 'KH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.5564,
    longitude: 104.9282,
  },
  hasMap: 'https://maps.app.goo.gl/HtTykLyByJkPWy7T7',
  sameAs: ['https://www.facebook.com/vannyprintingshop'],
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessJsonLd),
    },
  ],
})
</script>
