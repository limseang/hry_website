<template>
  <div class="bg-ink-950">

    <!-- ══ HERO — full-bleed team photo ═════════════════════════════ -->
    <section
        class="relative isolate overflow-hidden bg-ink-950
             h-[82svh] sm:h-[90svh] min-h-[580px] max-h-[1040px]"
        aria-labelledby="hero-title"
    >
      <!-- Photo -->
      <img
          :src="bannerSrc"
          alt="The HRY Printing and Embroidery team on the shop floor in Phnom Penh"
          width="1280"
          height="720"
          fetchpriority="high"
          decoding="async"
          class="hero-img absolute inset-0 -z-10 w-full h-full object-cover object-center"
      />

      <!-- Legibility layers: bottom fade for text, light top fade for the meta row -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/50"/>
      <div class="absolute inset-0 -z-10 hidden lg:block bg-gradient-to-r from-ink-950/75 via-ink-950/15 to-transparent"/>
      <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"/>

      <!-- Frame corners -->
      <div aria-hidden="true" class="hidden sm:block pointer-events-none absolute inset-5 lg:inset-8">
        <span class="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/40"/>
        <span class="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/40"/>
        <span class="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/40"/>
        <span class="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/40"/>
      </div>

      <!-- Meta row -->
      <div class="absolute top-0 inset-x-0 z-10">
        <div class="wrap flex items-center justify-between pt-8 sm:pt-10 lg:pt-14">
          <span class="font-mono text-[10px] tracking-[0.26em] text-cream-100/85 uppercase">
            Since 2009, Phnom Penh
          </span>
          <span class="hidden md:inline font-mono text-[10px] tracking-[0.26em] text-cream-100/55 uppercase">
            Screen / Embroidery / Heat press / Design
          </span>
        </div>
      </div>

      <!-- Headline + actions -->
      <div class="relative z-10 h-full flex flex-col justify-end">
        <div class="wrap pb-8 sm:pb-12 lg:pb-16">
          <div class="grid lg:grid-cols-[1.25fr_0.75fr] gap-7 lg:gap-16 items-end">
            <div class="hero-rise">
              <p class="font-body text-cream-100/80 text-sm sm:text-base mb-4">
                Printing in Phnom Penh, Cambodia
              </p>
              <h1
                  id="hero-title"
                  class="font-display font-900 uppercase leading-[0.86] tracking-tight text-cream-100
                       text-[clamp(3rem,9vw,8rem)]"
              >
                From design<br/>to reality
              </h1>
            </div>

            <div class="hero-rise [animation-delay:.15s]">
              <p class="hidden sm:block font-body text-cream-100/75 text-lg leading-relaxed max-w-[440px] mb-8">
                Business cards, building-scale banners, t-shirts, uniforms and packaging,
                printed in our own shop in Phnom Penh.
              </p>
              <div class="flex flex-wrap gap-3">
                <a
                    href="https://t.me/Hryprintingshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary"
                >
                  Get a free quote
                </a>
                <NuxtLink
                    to="/products"
                    class="inline-flex items-center gap-2 px-6 py-3 font-display font-900 uppercase tracking-wide
                         text-cream-100 border border-white/30 bg-white/[0.04] backdrop-blur-sm
                         hover:bg-white/10 hover:border-white/60 transition-colors duration-200
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Browse catalogue
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust band -->
        <div class="border-t border-white/10 bg-ink-950/60 backdrop-blur-md">
          <dl class="wrap grid grid-cols-4 divide-x divide-white/10">
            <div
                v-for="t in trust"
                :key="t.label"
                class="py-4 sm:py-6 px-2 sm:px-6 lg:px-10 first:pl-0"
            >
              <dt class="order-2 font-mono text-[9px] sm:text-[10px] text-mist tracking-[0.2em] uppercase mt-1.5">
                {{ t.label }}
              </dt>
              <dd class="font-display font-900 text-2xl sm:text-4xl text-cream-100 leading-none">
                {{ t.value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Scroll cue -->
      <button
          type="button"
          class="hidden lg:flex absolute z-10 right-10 xl:right-14 top-1/2 -translate-y-1/2
               flex-col items-center gap-4 text-cream-100/70 hover:text-cream-100 transition-colors
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          aria-label="Scroll to services"
          @click="scrollToServices"
      >
        <span class="font-mono text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Scroll</span>
        <span class="scroll-line"/>
      </button>
    </section>


    <!-- ══ SERVICES ═════════════════════════════════════════════════ -->
    <section
        id="services"
        class="relative scroll-mt-20 py-20 lg:py-32 bg-ink-900 border-t border-white/[0.06]"
        aria-labelledby="services-title"
    >
      <div class="wrap">
        <header class="grid lg:grid-cols-[1fr_auto] items-end gap-6 lg:gap-12 mb-12 lg:mb-16
                       pb-8 border-b border-white/[0.08]">
          <h2
              id="services-title"
              class="font-display font-900 uppercase text-cream-100 leading-[0.9]
                   text-[clamp(2.5rem,6vw,5.5rem)]"
          >
            Printing services
          </h2>
          <div class="flex flex-col items-start lg:items-end gap-5">
            <p class="font-body text-mist leading-relaxed max-w-sm lg:text-right">
              Screen printing, embroidery, heat press and design, all done in-house.
            </p>
            <NuxtLink to="/services" class="btn-outline btn-sm shrink-0">All services</NuxtLink>
          </div>
        </header>

        <div v-if="loadingServices" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="i in 6" :key="i" class="skel h-72"/>
        </div>
        <div v-else-if="services.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <UiServiceCard v-for="s in services.slice(0, 6)" :key="s.id" :s="s"/>
        </div>
        <div v-else class="py-16 text-center">
          <p class="font-body text-mist mb-5">Services could not be loaded. Reload the page or see the full list.</p>
          <NuxtLink to="/services" class="btn-outline btn-sm">Open services page</NuxtLink>
        </div>
      </div>
    </section>


    <!-- ══ POPULAR PRODUCTS ════════════════════════════════════════ -->
    <section class="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="products-title">
      <div
          aria-hidden="true"
          class="absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full
               bg-blue-500/[0.06] blur-[140px] pointer-events-none"
      />
      <div class="wrap relative">
        <header class="grid lg:grid-cols-[1fr_auto] items-end gap-6 lg:gap-12 mb-12 lg:mb-16
                       pb-8 border-b border-white/[0.08]">
          <h2
              id="products-title"
              class="font-display font-900 uppercase text-cream-100 leading-[0.9]
                   text-[clamp(2.5rem,6vw,5.5rem)]"
          >
            Most popular
          </h2>
          <div class="flex flex-col items-start lg:items-end gap-5">
            <p class="font-body text-mist leading-relaxed max-w-sm lg:text-right">
              The products our clients order most. Every item can be customised with your logo.
            </p>
            <NuxtLink to="/products" class="btn-outline btn-sm shrink-0">View all products</NuxtLink>
          </div>
        </header>

        <div v-if="loadingProducts" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div v-for="i in 4" :key="i">
            <div class="skel aspect-[4/3]"/>
            <div class="bg-ink-800 p-5 space-y-2.5">
              <div class="skel h-5 w-3/4"/><div class="skel h-3.5 w-full"/><div class="skel h-3.5 w-2/3"/>
            </div>
          </div>
        </div>
        <div v-else-if="products.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <UiProductCard v-for="p in products" :key="p.id ?? p.slug" :p="p"/>
        </div>
        <div v-else class="py-16 text-center">
          <p class="font-body text-mist mb-5">No popular products yet. Browse the full catalogue instead.</p>
          <NuxtLink to="/products" class="btn-outline btn-sm">Browse catalogue</NuxtLink>
        </div>
      </div>
    </section>


    <!-- ══ TICKER ══════════════════════════════════════════════════ -->
    <div class="bg-blue-500 py-3.5 select-none overflow-hidden" aria-hidden="true">
      <div class="ticker-wrap">
        <div class="ticker-track">
          <span
              v-for="i in 16"
              :key="i"
              class="inline-flex items-center gap-5 font-display font-900 text-white text-xl uppercase tracking-widest px-7"
          >
            HRY PRINTING
            <svg class="w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16z"/>
            </svg>
          </span>
        </div>
      </div>
    </div>


    <!-- ══ WHY HRY ═══════════════════════════════════════════════════ -->
    <section class="py-20 lg:py-32 bg-ink-900" aria-labelledby="why-title">
      <div class="wrap">
        <div class="grid lg:grid-cols-2 gap-14 xl:gap-28 items-center">
          <div>
            <h2
                id="why-title"
                class="font-display font-900 uppercase text-cream-100 leading-[0.9]
                     text-[clamp(2.5rem,5.5vw,4.5rem)] mb-8"
            >
              Crafted for<br/>excellence
            </h2>
            <p class="font-body text-mist text-lg leading-relaxed mb-5 max-w-[520px]">
              For over 15 years HRY Printing has worked with businesses across Cambodia.
              We combine modern equipment with careful hand finishing on every order.
            </p>
            <p class="font-body text-mist leading-relaxed mb-10 max-w-[520px]">
              Our team checks the proof with you, prints, inspects and delivers.
              You get one contact from first message to final delivery.
            </p>
            <NuxtLink to="/about" class="btn-primary">Our story</NuxtLink>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/[0.08]">
            <div
                v-for="f in features"
                :key="f.title"
                class="p-7 lg:p-8 border-b border-r border-white/[0.08] flex flex-col gap-5"
            >
              <div class="w-11 h-11 bg-blue-500/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="f.icon"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-900 text-lg uppercase text-cream-100 mb-1.5">{{ f.title }}</h3>
                <p class="font-body text-sm text-mist leading-relaxed">{{ f.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══ TESTIMONIALS ══════════════════════════════════════════════ -->
    <section v-if="testimonials.length" class="py-20 lg:py-32" aria-labelledby="testimonials-title">
      <div class="wrap">
        <h2
            id="testimonials-title"
            class="font-display font-900 uppercase text-cream-100 leading-[0.9]
                 text-[clamp(2.5rem,6vw,5.5rem)] mb-12 pb-8 border-b border-white/[0.08]"
        >
          What clients say
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <figure v-for="t in testimonials" :key="t.id" class="card flex flex-col gap-5 p-7">
            <div class="flex gap-1" :aria-label="`${t.rating || 5} out of 5 stars`">
              <svg
                  v-for="i in 5"
                  :key="i"
                  class="w-4 h-4"
                  :class="i <= (t.rating || 5) ? 'text-blue-500' : 'text-ink-600'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <blockquote class="font-body text-sm text-cream-200/85 leading-relaxed flex-1">
              "{{ t.content }}"
            </blockquote>
            <figcaption class="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <div class="w-10 h-10 bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0 overflow-hidden">
                <img v-if="t.avatar_url" :src="t.avatar_url" :alt="t.name" loading="lazy" class="w-full h-full object-cover"/>
                <span v-else class="font-display font-900 text-xl text-blue-500">{{ t.name?.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-display font-extrabold text-sm text-cream-100 uppercase">{{ t.name }}</div>
                <div class="font-body text-xs text-mist mt-0.5">
                  <span v-if="t.position">{{ t.position }}</span>
                  <span v-if="t.position && t.company">, </span>
                  <span v-if="t.company" class="text-blue-400">{{ t.company }}</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>


    <!-- ══ FAQ (accordion) ═══════════════════════════════════════════ -->
    <section class="py-20 lg:py-32 border-t border-white/[0.06]" aria-labelledby="faq-title">
      <div class="wrap">
        <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div class="lg:sticky lg:top-28 self-start">
            <h2
                id="faq-title"
                class="font-display font-900 uppercase text-cream-100 leading-[0.9]
                     text-[clamp(2.5rem,5vw,4.5rem)] mb-6"
            >
              Printing in<br/>Phnom Penh
            </h2>
            <p class="font-body text-mist leading-relaxed max-w-sm mb-8">
              Common questions about our shop, services and quotes.
              For anything else, message us on Telegram.
            </p>
            <a
                href="https://t.me/Hryprintingshop"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-outline btn-sm"
            >
              Ask on Telegram
            </a>
          </div>

          <div class="border-t border-white/[0.1]">
            <details
                v-for="(f, i) in faqs"
                :key="f.q"
                class="group border-b border-white/[0.1]"
                :open="i === 0"
            >
              <summary
                  class="flex cursor-pointer list-none items-start justify-between gap-6 py-6
                       [&::-webkit-details-marker]:hidden
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                <h3 class="font-display font-extrabold text-lg sm:text-xl uppercase text-cream-100 leading-snug
                           group-hover:text-blue-400 transition-colors">
                  {{ f.q }}
                </h3>
                <span
                    class="mt-1 relative w-5 h-5 shrink-0 text-blue-500 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                >
                  <span class="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-current"/>
                  <span class="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current"/>
                </span>
              </summary>
              <p class="font-body text-mist leading-relaxed pb-7 pr-10 max-w-[640px]">{{ f.a }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>


    <!-- ══ CTA ═══════════════════════════════════════════════════════ -->
    <section class="relative py-24 lg:py-40 overflow-hidden bg-blue-500" aria-labelledby="cta-title">
      <div aria-hidden="true" class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span class="font-display font-900 text-[clamp(5rem,18vw,16rem)] text-black/10 uppercase leading-none
                     whitespace-nowrap select-none tracking-tight">GET STARTED</span>
      </div>
      <div class="wrap relative z-10 text-center">
        <h2
            id="cta-title"
            class="font-display font-900 uppercase text-white leading-none text-[clamp(2.5rem,7vw,6rem)] mb-6"
        >
          Ready to print?
        </h2>
        <p class="font-body text-white/80 text-xl max-w-lg mx-auto mb-10">
          Send us your idea and get a free quote. Our team replies within 10 minutes on business days.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
              href="https://t.me/Hryprintingshop"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 bg-ink-950 hover:bg-ink-900 text-cream-100
                   font-display font-900 text-xl uppercase tracking-wide px-10 py-4
                   transition-colors duration-200
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Get a free quote
          </a>
          <NuxtLink
              to="/products"
              class="inline-flex items-center gap-3 border-2 border-white/40 hover:border-white
                   text-white hover:bg-white/10
                   font-display font-900 text-xl uppercase tracking-wide px-10 py-4
                   transition-colors duration-200
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Browse catalogue
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import bannerSrc from '~/assets/image/banner.png'

useSeoMeta({
  title: 'Printing in Phnom Penh, Cambodia | HRY Printing – Best Printing Service',
  description: 'HRY Printing is the best printing company for printing in Phnom Penh, Cambodia. T-shirt printing, uniforms, business cards, banners, stickers, packaging, silk screen, DTF, sublimation & embroidery. Get a free quote today.',
  ogTitle: 'Printing in Phnom Penh, Cambodia – HRY Printing',
  ogDescription: 'The best printing in Phnom Penh, Cambodia. T-shirts, uniforms, business cards, banners, packaging & more. Get a free quote from HRY Printing today.',
  ogImage: bannerSrc,
})

const faqs = [
  {
    q: 'Where can I find printing in Phnom Penh?',
    a: 'HRY Printing is located at #339-340, Street 19, Borey Laykong, Phnom Penh, Cambodia. We are a full-service printing company offering t-shirts, uniforms, business cards, banners, stickers and packaging right here in Phnom Penh.',
  },
  {
    q: 'What is the best printing company in Phnom Penh, Cambodia?',
    a: 'HRY Printing has been a trusted printing company in Phnom Penh, Cambodia since 2009, serving thousands of businesses with premium quality, fast turnaround and competitive pricing.',
  },
  {
    q: 'What printing services do you offer in Phnom Penh?',
    a: 'We offer silk screen printing, DTF printing, sublimation, embroidery, offset and digital printing, large-format banners, business cards, stickers, packaging, school and staff uniforms across Phnom Penh and all of Cambodia.',
  },
  {
    q: 'Do you deliver printing across Cambodia?',
    a: 'Yes. While our printing shop is based in Phnom Penh, HRY Printing serves customers throughout Cambodia with reliable delivery and fast rush options available.',
  },
  {
    q: 'How do I get a printing quote in Phnom Penh?',
    a: 'Message us on Telegram @Hryprintingshop, call 010 871 011, or use our contact form. Our team responds within 10 minutes on business days with a free quote.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(faqJsonLd) }],
})

const api = useApi()

const products        = ref<any[]>([])
const services        = ref<any[]>([])
const testimonials    = ref<any[]>([])
const loadingProducts = ref(true)
const loadingServices = ref(true)

onMounted(async () => {
  await Promise.allSettled([
    api.getPopular()
        .then((r) => {
          const list = Array.isArray(r?.data) ? r.data : (r?.data?.data ?? [])
          products.value = list.filter((x: any) => x && x.slug)
        })
        .catch(() => { products.value = [] })
        .finally(() => { loadingProducts.value = false }),

    api.getServices()
        .then((r) => { services.value = r?.data ?? [] })
        .catch(() => { services.value = [] })
        .finally(() => { loadingServices.value = false }),

    api.getTestimonials()
        .then((r) => { testimonials.value = r?.data ?? [] })
        .catch(() => { testimonials.value = [] }),
  ])
})

function scrollToServices() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('services')?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  })
}

const trust = [
  { value: '15+', label: 'Years'     },
  { value: '5K+', label: 'Clients'   },
  { value: '50+', label: 'Products'  },
  { value: '24H', label: 'Rush jobs' },
]

const features = [
  { title: 'Premium materials', desc: 'Paper stocks, inks and fabrics sourced from trusted suppliers.',  icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { title: 'Fast turnaround',   desc: 'Same-day and rush orders available when your deadline is tight.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'In-house design',   desc: 'Our designers prepare your artwork so it prints correctly.',      icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { title: 'Clear pricing',     desc: 'Volume discounts and a full price breakdown before you order.',   icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
]
</script>

<style scoped>
/* Single page-load moment: the photo settles, then the headline rises */
.hero-img {
  transform-origin: center;
  animation: hero-settle 2.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes hero-settle {
  from { transform: scale(1.08); opacity: 0.4; }
  to   { transform: scale(1);    opacity: 1; }
}

.hero-rise {
  animation: hero-rise 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
}
@keyframes hero-rise {
  from { transform: translateY(28px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

/* Scroll cue line */
.scroll-line {
  position: relative;
  display: block;
  width: 1px;
  height: 64px;
  background: rgba(255, 255, 255, 0.18);
  overflow: hidden;
}
.scroll-line::after {
  content: '';
  position: absolute;
  left: 0;
  top: -40%;
  width: 100%;
  height: 40%;
  background: currentColor;
  animation: scroll-drop 2.2s cubic-bezier(0.6, 0, 0.4, 1) infinite;
}
@keyframes scroll-drop {
  to { top: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-img,
  .hero-rise,
  .scroll-line::after {
    animation: none;
  }
}
</style>