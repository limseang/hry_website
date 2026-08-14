<template>
  <div class="py-12 lg:py-20">
    <div class="wrap">
      <!-- ── header ───────────────────────────────────────── -->
      <div class="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
        <div>
          <div class="mb-4 flex items-center gap-3">
            <span class="h-px w-9 bg-[#FF6B00]" />
            <span class="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">What We Do</span>
          </div>
          <h1 class="font-display font-900 uppercase leading-[0.88] tracking-tight text-cream-100 text-[clamp(3rem,8vw,7rem)]">
            Print Services
          </h1>
        </div>

        <div class="max-w-sm lg:pt-10">
          <p class="mb-6 font-body leading-relaxed text-mist">
            Complete printing and custom apparel solutions with the highest quality and fast turnaround.
          </p>
          <a
              :href="contactLink"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-3 border border-white/20 px-6 py-3 font-display font-900 text-sm uppercase tracking-wide text-cream-100
                   transition-colors duration-300 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-black"
          >
            Get a quote
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <!-- ── grid ─────────────────────────────────────────── -->
      <div v-if="loading" class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="i in 6" :key="i" class="skel h-[24rem]" />
      </div>

      <div v-else-if="!services.length" class="border border-white/[0.06] bg-ink-900 px-10 py-16 text-center">
        <h3 class="mb-2 font-display font-900 text-2xl uppercase text-cream-100">Nothing to show yet</h3>
        <p class="mb-6 font-body text-sm text-mist">Tell us what you need printed and we'll quote it directly.</p>
        <a :href="contactLink" target="_blank" rel="noopener" class="btn-primary">Message us on Telegram</a>
      </div>

      <div v-else class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <UiServiceCard v-for="s in services" :key="s.id ?? s.slug" :s="s" />
      </div>

      <!-- ── trust strip ──────────────────────────────────── -->
      <div class="mt-5 grid grid-cols-1 gap-px border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="p in promises" :key="p.title" class="flex items-center gap-4 bg-ink-900 px-6 py-7">
          <svg class="h-9 w-9 shrink-0 text-[#FF6B00]" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24">
            <path v-for="(d, i) in p.icon" :key="i" stroke-linecap="round" stroke-linejoin="round" :d="d" />
          </svg>
          <div>
            <div class="font-display font-900 text-base uppercase leading-none text-cream-100">{{ p.title }}</div>
            <div class="mt-1.5 font-body text-[13px] text-mist">{{ p.desc }}</div>
          </div>
        </div>
      </div>

      <!-- ── process ──────────────────────────────────────── -->
      <div class="mt-20 border border-white/[0.06] bg-ink-900 p-10 lg:p-14">
        <div class="mb-4 flex items-center gap-3">
          <span class="h-px w-9 bg-[#FF6B00]" />
          <span class="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">How It Works</span>
        </div>
        <h2 class="mb-12 font-display font-900 uppercase leading-none tracking-tight text-cream-100 text-[clamp(2rem,5vw,4rem)]">
          Simple Process
        </h2>

        <div class="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div class="pointer-events-none absolute inset-x-0 top-[1.35rem] hidden h-px bg-white/[0.08] lg:block" />
          <div v-for="(step, i) in steps" :key="step.title" class="relative">
            <div class="mb-6 flex items-center gap-3">
              <span class="grid h-11 w-11 shrink-0 place-items-center border border-[#FF6B00]/70 bg-ink-900 text-[#FF6B00]">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="step.icon" />
                </svg>
              </span>
              <span class="select-none font-display font-900 text-5xl leading-none text-ink-700">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>
            <h3 class="mb-2 font-display font-900 text-2xl uppercase text-cream-100">{{ step.title }}</h3>
            <p class="font-body text-sm leading-relaxed text-mist">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- ── CTA ──────────────────────────────────────────── -->
      <div class="mt-5 flex flex-col items-center justify-between gap-6 border border-[#FF6B00]/25 bg-[#FF6B00]/[0.08] px-10 py-8 sm:flex-row">
        <div>
          <h3 class="mb-1 font-display font-900 text-3xl uppercase text-cream-100">Need something custom?</h3>
          <p class="font-body text-sm text-mist">Tell us your project on Telegram and we'll send you a price.</p>
        </div>
        <a
            :href="contactLink"
            target="_blank"
            rel="noopener"
            class="inline-flex shrink-0 items-center gap-3 bg-[#FF6B00] px-7 py-4 font-display font-900 text-sm uppercase tracking-wide text-black
                 transition-opacity duration-300 hover:opacity-90"
        >
          Message us on Telegram
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.94 4.38 18.6 20.1c-.25 1.11-.91 1.38-1.84.86l-5.09-3.75-2.45 2.36c-.27.27-.5.5-1.03.5l.37-5.2 9.47-8.56c.41-.37-.09-.57-.64-.2L5.68 13.3.65 11.72c-1.09-.34-1.11-1.09.23-1.62L20.53 2.5c.91-.33 1.71.21 1.41 1.88Z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Printing Services in Cambodia — Silk Screen, DTF, Sublimation | HRY Printing',
  description: 'HRY Printing offers professional printing services in Phnom Penh, Cambodia: silk screen printing, DTF printing, sublimation, embroidery, offset, digital and large-format printing.',
})

const api = useApi()
const { contactLink } = useTelegramQuote()

const services = ref<any[]>([])
const loading = ref(true)

onMounted(async () => {
  const rows = ((await api.getServices().catch(() => null))?.data ?? []).filter((x: any) => x && x.slug)
  // API order isn't guaranteed — sort_order is what the admin actually controls.
  services.value = [...rows].sort((a: any, b: any) => (a.sort_order ?? 99) - (b.sort_order ?? 99))
  loading.value = false
})

const promises = [
  { title: 'Premium quality', desc: 'Top materials & finest printing', icon: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'm9 12 2 2 4-4'] },
  { title: 'Fast turnaround', desc: 'On-time delivery every time', icon: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 6v6l4 2'] },
  { title: 'Competitive price', desc: 'Best value for your budget', icon: ['M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z', 'M7.5 7.5h.01'] },
  { title: 'Custom solution', desc: 'Bring your ideas to life', icon: ['M21.17 6.81a1 1 0 0 0-3.98-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.63l4.35-1.33a2 2 0 0 0 .83-.5z', 'm15 5 4 4'] },
]

const steps = [
  { title: 'Consult', desc: 'Share your requirements. We advise on the best approach for your project.', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { title: 'Design', desc: 'Upload your artwork or let our team create print-ready files.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { title: 'Produce', desc: 'Your job runs on precision presses with quality control at every step.', icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z' },
  { title: 'Deliver', desc: 'Pick up in-store or have your prints delivered anywhere in Cambodia.', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
]
</script>