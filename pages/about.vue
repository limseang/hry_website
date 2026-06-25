<template>
  <div class="py-12 lg:py-20">
    <div class="wrap">

      <div class="lbl mb-6">Our Story</div>
      <h1 class="font-display font-900 uppercase text-cream-100 leading-none
                 text-[clamp(3rem,10vw,9rem)] mb-16 tracking-tight">
        INK IN<br/><span class="grad-text">OUR</span><br/>BLOOD
      </h1>

      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div class="space-y-5 font-body text-mist text-lg leading-relaxed">
          <p>HRY Printing was founded in 2009 with a single press, a shared passion for quality,
             and an uncompromising belief that great printing changes how people perceive a brand.</p>
          <p>Today we operate a 3,000 sqm production facility in Phnom Penh, equipped with the latest
             offset and digital presses, wide-format plotters, and a complete in-house finishing
             department — serving thousands of businesses across Cambodia.</p>
          <p>From startups ordering their first business cards to national brands requiring millions
             of pieces — every job receives the same obsessive attention to detail.</p>
        </div>
        <div class="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          <div v-for="s in stats" :key="s.label"
            class="bg-ink-900 flex flex-col items-center justify-center py-14 px-6 text-center">
            <div class="font-display font-900 text-6xl text-cream-100 mb-2">{{ s.value }}</div>
            <div class="font-mono text-[10px] text-mist uppercase tracking-widest">{{ s.label }}</div>
          </div>
        </div>
      </div>

      <div class="hr mb-20"/>

      <!-- Values -->
      <section class="mb-20">
        <div class="lbl mb-8">What Drives Us</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div v-for="v in values" :key="v.title" class="group card p-8">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 group-hover:bg-blue-500
                        flex items-center justify-center mb-6 transition-all duration-300">
              <svg class="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="v.icon"/>
              </svg>
            </div>
            <h3 class="font-display font-900 text-xl uppercase text-cream-100 mb-3">{{ v.title }}</h3>
            <p class="font-body text-sm text-mist leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </section>

      <div class="hr mb-20"/>

      <!-- Equipment / capabilities -->
      <section class="mb-20">
        <div class="lbl mb-8">Our Capabilities</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div v-for="cap in capabilities" :key="cap.title"
            class="flex items-start gap-5 card p-7">
            <div class="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="cap.icon"/>
              </svg>
            </div>
            <div>
              <h4 class="font-display font-extrabold text-base uppercase text-cream-100 mb-1.5">{{ cap.title }}</h4>
              <p class="font-body text-sm text-mist leading-relaxed">{{ cap.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-ink-900 border border-white/[0.07] rounded-2xl p-10 lg:p-16
                  flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="font-display font-900 text-4xl uppercase text-cream-100 mb-2">
            Ready to Work Together?
          </h3>
          <p class="font-body text-mist">Get in touch and let's bring your print project to life.</p>
        </div>
        <NuxtLink to="/contact" class="btn-primary shrink-0">
          Contact Us
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About HRY Printing — Trusted Printing Company in Cambodia',
  description: 'HRY Printing has been Cambodia\u2019s trusted printing partner since 2009. Based in Phnom Penh, we serve thousands of businesses with premium printing and finishing services.',
})

const stats = [
  { value: '2009', label: 'Founded'      },
  { value: '15+',  label: 'Years Active' },
  { value: '5K+',  label: 'Clients'      },
  { value: '50+',  label: 'Products'     },
]
const values = [
  { title: 'Precision',  desc: 'Every millimetre matters. We calibrate presses daily and proof every job before it runs.',      icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5' },
  { title: 'Speed',      desc: 'Rush printing with same-day pickup available. Your deadline is our deadline — no excuses.',      icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Innovation', desc: 'Constant investment in the latest digital and offset technology keeps our quality ahead.',       icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
]
const capabilities = [

  { title: 'Silk Screen Printing',   desc: 'High-volume runs with Pantone color matching on our state-of-the-art offset presses.',     icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z' },
  { title: 'Embroidery',  desc: 'Short runs and variable data printing with same-day turnaround capability.',                icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'DTF Printing',      desc: 'Wide-format printing up to 5m wide for banners, vehicle wraps, and trade displays.',       icon: 'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3' },
  { title: 'Sublimation Printing',    desc: 'In-house lamination, foiling, embossing, die-cutting, and binding for a complete solution.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { title: 'Uniform',    desc: 'In-house lamination, foiling, embossing, die-cutting, and binding for a complete solution.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
]
</script>
