<template>
  <div>

    <!-- ══ HERO ════════════════════════════════════════════════════ -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-ink-950
                  [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]
                  [background-size:56px_56px]"/>
      <div class="absolute -top-24 left-1/4 w-[640px] h-[640px] rounded-full
                  bg-blue-500/[0.07] blur-[140px] pointer-events-none"/>
      <div class="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full
                  bg-ember-500/[0.05] blur-[120px] pointer-events-none"/>

      <div class="relative z-10 pt-4 sm:pt-6 lg:pt-8 pb-16 lg:pb-24">
        <div class="max-w-[1320px] mx-auto sm:px-8 xl:px-12">
          <div class="relative sm:p-4 lg:p-5">
            <div aria-hidden="true" class="hidden sm:block pointer-events-none absolute inset-0">
              <span class="absolute top-0 left-0 w-5 h-5 border-t border-l border-white/45"/>
              <span class="absolute top-0 right-0 w-5 h-5 border-t border-r border-white/45"/>
              <span class="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-white/45"/>
              <span class="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-white/45"/>
              <span class="absolute top-0 left-1/2 -translate-x-1/2 w-8 border-t border-white/20"/>
              <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 border-b border-white/20"/>
              <span class="absolute left-0 top-1/2 -translate-y-1/2 h-8 border-l border-white/20"/>
              <span class="absolute right-0 top-1/2 -translate-y-1/2 h-8 border-r border-white/20"/>
            </div>

            <figure class="group relative overflow-hidden bg-ink-900
                           ring-1 ring-white/[0.12]
                           shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <div class="absolute top-0 inset-x-0 z-20 h-px bg-gradient-to-r
                          from-transparent via-blue-400/80 to-transparent"/>
              <img
                :src="bannerSrc"
                alt="The HRY Printing and Embroidery team on the shop floor in Phnom Penh"
                class="w-full h-auto block scale-[1.01] transition-transform duration-[1.4s] ease-out
                       group-hover:scale-[1.035]"
                width="1280"
                height="720"
                fetchpriority="high"
              />
              <div class="absolute inset-0 pointer-events-none
                          shadow-[inset_0_0_140px_rgba(0,0,0,0.35)]
                          bg-gradient-to-t from-ink-950/40 via-transparent to-ink-950/25"/>

              <figcaption class="absolute top-0 inset-x-0 z-10 flex items-center justify-between
                                 px-4 py-3 sm:px-5 sm:py-4
                                 bg-gradient-to-b from-ink-950/75 to-transparent">
                <span class="font-mono text-[10px] tracking-[0.28em] text-cream-100/85 uppercase">
                  Est. 2009 · Phnom Penh
                </span>
                <span class="hidden md:inline font-mono text-[10px] tracking-[0.28em] text-cream-100/50 uppercase">
                  Studio floor · Plate 01
                </span>
              </figcaption>
            </figure>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2
                        px-5 sm:px-1 pt-4">
              <p class="font-mono text-[10px] tracking-[0.22em] text-mist uppercase">
                The HRY team · Borey Laykong, Phnom Penh
              </p>
              <p class="font-mono text-[10px] tracking-[0.22em] text-mist/70 uppercase">
                Screen · Embroidery · Heat Press · Design
              </p>
            </div>
          </div>
        </div>

        <div class="wrap mt-10 lg:mt-14">
          <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-20 items-end">
            <div class="animate-fade-up" style="opacity:0;animation-fill-mode:both">
              <p class="lbl mb-5">Printing in Phnom Penh, Cambodia</p>
              <h1 class="font-display font-900 uppercase leading-[0.88] tracking-tight
                         text-[clamp(3rem,8vw,7.25rem)] text-cream-100">
                FROM DESIGN<br/>
                TO <span class="accent-text">REALITY</span>
              </h1>
            </div>

            <div class="lg:border-l lg:border-white/[0.08] lg:pl-12
                        animate-fade-up" style="opacity:0;animation-fill-mode:both;animation-delay:.12s">
              <p class="font-body text-mist text-lg leading-relaxed max-w-[460px] mb-8">
                HRY Printing is the trusted choice for printing in Phnom Penh, Cambodia.
                From razor-sharp business cards to building-scale banners, t-shirts, uniforms
                and packaging — we deliver premium printing that commands attention.
              </p>
              <div class="flex flex-wrap gap-3">
                <NuxtLink to="/products" class="btn-primary">
                  Browse Catalogue
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
                <NuxtLink to="/services" class="btn-outline">Our Services</NuxtLink>
              </div>
            </div>
          </div>

          <div class="mt-12 lg:mt-16 pt-8 border-t border-white/[0.07]
                      grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0
                      lg:divide-x lg:divide-white/[0.08]
                      animate-fade-in"
               style="opacity:0;animation-fill-mode:both;animation-delay:.28s">
            <div v-for="t in trust" :key="t.label" class="lg:px-8 first:lg:pl-0">
              <div class="w-8 h-px bg-blue-500 mb-3"/>
              <div class="font-display font-900 text-4xl text-cream-100 leading-none">{{ t.value }}</div>
              <div class="font-mono text-[10px] text-mist tracking-[0.22em] uppercase mt-2">{{ t.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ TICKER ══════════════════════════════════════════════════ -->
    <div class="bg-blue-500 py-3.5 select-none overflow-hidden">
      <div class="ticker-wrap">
        <div class="ticker-track">
          <span v-for="i in 16" :key="i"
                class="inline-flex items-center gap-5 font-display font-900 text-white text-xl uppercase tracking-widest px-7">
            HRY PRINTING
            <svg class="w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16z"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <!-- ══ POPULAR PRODUCTS ════════════════════════════════════════ -->
    <section class="py-24 lg:py-32">
      <div class="wrap">
        <div class="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <div class="lbl mb-4">Our Products</div>
            <h2 class="font-display font-900 uppercase text-cream-100 leading-none
                       text-[clamp(2.5rem,6vw,5.5rem)]">MOST POPULAR</h2>
          </div>
          <NuxtLink to="/products" class="btn-outline btn-sm shrink-0">
            View All
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

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
        <p v-else class="font-body text-mist text-center py-16">No popular products available yet.</p>
      </div>
    </section>

    <!-- ══ SERVICES ═════════════════════════════════════════════════ -->
    <section class="py-24 lg:py-32 bg-ink-900">
      <div class="wrap">
        <div class="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <div class="lbl mb-4">What We Do</div>
            <h2 class="font-display font-900 uppercase text-cream-100 leading-none
                       text-[clamp(2.5rem,6vw,5.5rem)]">PRINT SERVICES</h2>
          </div>
          <NuxtLink to="/services" class="btn-outline btn-sm shrink-0">
            All Services
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
        <div v-if="loadingServices" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="i in 6" :key="i" class="skel h-72"/>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <UiServiceCard v-for="s in services.slice(0,6)" :key="s.id" :s="s"/>
        </div>
      </div>
    </section>

    <!-- ══ WHY HRY ═══════════════════════════════════════════════════ -->
    <section class="py-24 lg:py-32">
      <div class="wrap">
        <div class="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">
          <div>
            <div class="lbl mb-6">Why Choose HRY</div>
            <h2 class="font-display font-900 uppercase text-cream-100 leading-none
                       text-[clamp(2.5rem,5.5vw,4.5rem)] mb-8">
              CRAFTED FOR<br/>EXCELLENCE
            </h2>
            <p class="font-body text-mist text-lg leading-relaxed mb-5">
              For over 15 years HRY Printing has been the trusted partner for businesses across Cambodia.
              We combine cutting-edge technology with meticulous craftsmanship to deliver prints that truly make an impression.
            </p>
            <p class="font-body text-mist leading-relaxed mb-10">
              From the first proof to final delivery, every step is handled with precision and care.
              Your brand deserves nothing less.
            </p>
            <NuxtLink to="/about" class="btn-primary">
              Our Story
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="f in features" :key="f.title"
                 class="group card p-6 flex flex-col gap-4">
              <div class="w-11 h-11 bg-blue-500/10 group-hover:bg-blue-500
                          flex items-center justify-center transition-all duration-300">
                <svg class="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-300"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="f.icon"/>
                </svg>
              </div>
              <div>
                <h4 class="font-display font-900 text-base uppercase text-cream-100 mb-1">{{ f.title }}</h4>
                <p class="font-body text-xs text-mist leading-relaxed">{{ f.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ TESTIMONIALS ══════════════════════════════════════════════ -->
    <section v-if="testimonials.length" class="py-24 lg:py-32 bg-ink-900">
      <div class="wrap">
        <div class="lbl mb-4">Client Stories</div>
        <h2 class="font-display font-900 uppercase text-cream-100 leading-none
                   text-[clamp(2.5rem,6vw,5.5rem)] mb-12">WHAT THEY SAY</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="t in testimonials" :key="t.id" class="card flex flex-col gap-5 p-7">
            <div class="flex gap-1">
              <svg v-for="i in 5" :key="i" class="w-4 h-4"
                   :class="i<=(t.rating||5)?'text-blue-500':'text-ink-600'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <blockquote class="font-body text-sm text-cream-200/85 leading-relaxed italic flex-1">"{{ t.content }}"</blockquote>
            <div class="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <div class="w-10 h-10 bg-blue-500/10 border border-blue-500/15
                          flex items-center justify-center shrink-0 overflow-hidden">
                <img v-if="t.avatar_url" :src="t.avatar_url" :alt="t.name" class="w-full h-full object-cover"/>
                <span v-else class="font-display font-900 text-xl text-blue-500">{{ t.name?.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-display font-extrabold text-sm text-cream-100 uppercase">{{ t.name }}</div>
                <div class="font-mono text-[10px] text-mist mt-0.5">
                  <span v-if="t.position">{{ t.position }}</span>
                  <span v-if="t.position && t.company">, </span>
                  <span v-if="t.company" class="text-blue-400">{{ t.company }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ FAQ ═══════════════════════════════════════════════════════ -->
    <section class="py-24 lg:py-32">
      <div class="wrap">
        <div class="lbl mb-4">FAQ</div>
        <h2 class="font-display font-900 uppercase text-cream-100 leading-none
                   text-[clamp(2.5rem,6vw,5.5rem)] mb-12">PRINTING IN PHNOM PENH</h2>
        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="f in faqs" :key="f.q" class="card p-7">
            <h3 class="font-display font-extrabold text-lg uppercase text-cream-100 mb-3">{{ f.q }}</h3>
            <p class="font-body text-sm text-mist leading-relaxed">{{ f.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CTA ═══════════════════════════════════════════════════════ -->
    <section class="relative py-28 lg:py-40 overflow-hidden bg-blue-500">
      <div class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span class="font-display font-900 text-[clamp(5rem,18vw,16rem)] text-black/10 uppercase leading-none
                     whitespace-nowrap select-none tracking-tight">GET STARTED</span>
      </div>
      <div class="wrap relative z-10 text-center">
        <h2 class="font-display font-900 uppercase text-white leading-none
                   text-[clamp(2.5rem,7vw,6rem)] mb-6">READY TO PRINT?</h2>
        <p class="font-body text-white/70 text-xl max-w-lg mx-auto mb-10">
          Get a free quote today. Our team responds within 10 minutes on business days.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://t.me/Hryprintingshop" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-3 bg-ink-950 hover:bg-ink-900 text-cream-100
                   font-display font-900 text-xl uppercase tracking-wide px-10 py-4
                   transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            Get Free Quote
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <NuxtLink to="/products"
                    class="inline-flex items-center gap-3 border-2 border-white/40 hover:border-white
                   text-white hover:bg-white/10
                   font-display font-900 text-xl uppercase tracking-wide px-10 py-4
                   transition-all duration-200">
            Browse Catalogue
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
    a: 'Message us on Telegram @Hryprintingshop, call 010 871 011, or use our contact form. Our team responds within 2 hours on business days with a free quote.',
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
    api.getServices().then(r      => { services.value     = r?.data ?? []; loadingServices.value = false }),
    api.getTestimonials().then(r  => { testimonials.value = r?.data ?? [] }),
  ])
})

const trust = [
  { value:'15+', label:'Years'    },
  { value:'5K+', label:'Clients'  },
  { value:'50+', label:'Products' },
  { value:'24H', label:'Rush Jobs'},
]
const features = [
  { title:'Premium Materials', desc:'Finest paper stocks, inks and substrates sourced globally.',      icon:'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { title:'Fast Turnaround',   desc:'Same-day and rush orders available. We never miss a deadline.',   icon:'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title:'Expert Design',     desc:'In-house designers ensure your artwork is print-perfect.',        icon:'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { title:'Best Pricing',      desc:'Volume discounts and transparent pricing with no surprises.',     icon:'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
]
</script>