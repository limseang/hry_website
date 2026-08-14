<template>
  <div class="svc">

    <!-- ── LOADING ───────────────────────────────────────────── -->
    <div v-if="pending" class="wrap py-24 space-y-8">
      <div class="skel h-3 w-56 rounded-full" />
      <div class="grid lg:grid-cols-2 gap-14">
        <div class="space-y-5">
          <div class="skel h-16 w-4/5 rounded-xl" />
          <div class="skel h-16 w-3/5 rounded-xl" />
          <div class="skel h-4 w-full rounded-full" />
          <div class="skel h-4 w-2/3 rounded-full" />
        </div>
        <div class="skel aspect-[4/3] w-full rounded-xl" />
      </div>
    </div>

    <!-- ── SERVICE ───────────────────────────────────────────── -->
    <template v-else-if="service">

      <!-- Hero: halftone field + press sheet -->
      <section class="relative overflow-hidden">
        <div class="halftone" aria-hidden="true" />
        <div class="halftone-fade" aria-hidden="true" />

        <div class="wrap relative z-10 pt-10 pb-20 lg:pt-14 lg:pb-28">

          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 mb-12 lg:mb-16 font-mono text-[11px] text-mist flex-wrap">
            <NuxtLink to="/" class="link-q">Home</NuxtLink>
            <span class="opacity-30">/</span>
            <NuxtLink to="/services" class="link-q">Services</NuxtLink>
            <span class="opacity-30">/</span>
            <span class="text-cream-200">{{ service.name }}</span>
          </nav>

          <div class="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">

            <!-- Left: the thesis -->
            <div>
              <div class="lift flex items-center gap-3 mb-7" style="--d:0ms">
                <span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      :style="{ background: accent + '1A' }">
                  <svg class="w-[18px] h-[18px]" :style="{ color: accent }"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" :d="iconD" />
                  </svg>
                </span>
                <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
                  Printing service
                </span>
                <span class="font-mono text-[11px] tracking-[0.18em] text-mist/60">{{ refNo }}</span>
              </div>

              <h1 class="lift font-display font-900 uppercase text-cream-100 leading-[0.88] tracking-tight
                         text-[clamp(2.7rem,6.6vw,5.6rem)] mb-7" style="--d:70ms">
                {{ service.name }}
              </h1>

              <!-- Signature: CMYK ink rule -->
              <div class="lift rule-cmyk mb-7" style="--d:140ms" aria-hidden="true">
                <i style="background:#00AEEF" /><i style="background:#EC008C" />
                <i style="background:#FFF200" /><i style="background:#111111" />
              </div>

              <p class="lift font-body text-mist text-lg leading-relaxed max-w-xl mb-9" style="--d:200ms">
                {{ service.short_description }}
              </p>

              <div class="lift flex flex-wrap items-center gap-2.5" style="--d:260ms">
                <span class="chip">
                  <span class="dot" :class="service.is_active ? 'dot-on' : 'dot-off'" />
                  {{ service.is_active ? 'Taking orders' : 'Currently paused' }}
                </span>
                <span v-if="service.turnaround_time" class="chip">{{ service.turnaround_time }}</span>
                <span v-if="service.is_featured" class="chip chip-accent"
                      :style="{ color: accent, borderColor: accent + '40' }">Popular</span>
                <span class="chip">Phnom Penh</span>
              </div>
            </div>

            <!-- Right: press sheet -->
            <figure class="lift sheet" style="--d:120ms">
              <span class="crop crop-tl" /><span class="crop crop-tr" />
              <span class="crop crop-bl" /><span class="crop crop-br" />

              <svg class="regmark" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" stroke-width="1" />
                <path d="M12 0v8M12 16v8M0 12h8M16 12h8" stroke="currentColor" stroke-width="1" />
              </svg>

              <div class="sheet-plate img-zoom">
                <img v-if="heroImage" :src="heroImage" :alt="`${service.name} — printed sample`" loading="eager" />
                <div v-else class="sheet-blank">
                  <span class="font-display font-900 leading-none select-none"
                        :style="{ color: accent + '1F' }">{{ initials }}</span>
                  <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50">
                    Sample sheet coming soon
                  </span>
                </div>
              </div>

              <figcaption class="colorbar" aria-hidden="true">
                <span v-for="p in colorBar" :key="p.k + p.t" :style="{ background: p.c, opacity: p.t }" />
                <em class="font-mono">{{ heroImage ? 'Recent job' : 'No sample on file' }}</em>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- Body -->
      <section class="wrap pb-24">
        <div class="grid lg:grid-cols-3 gap-12 lg:gap-16">

          <!-- Main column -->
          <div class="lg:col-span-2 space-y-16">

            <div v-if="service.description">
              <h2 class="eyebrow mb-6">About this service</h2>
              <p class="font-body text-cream-200/85 text-lg leading-[1.75] whitespace-pre-line lead">
                {{ service.description }}
              </p>
            </div>

            <div v-if="service.features?.length">
              <h2 class="eyebrow mb-6">What's included</h2>
              <ul class="grid sm:grid-cols-2 gap-3">
                <li v-for="f in service.features" :key="f"
                    class="flex items-start gap-3 bg-ink-800/60 border border-white/[0.06] rounded-xl p-4">
                  <span class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                        :style="{ background: accent + '1A' }">
                    <svg class="w-3 h-3" :style="{ color: accent }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span class="font-body text-sm text-cream-200/80 leading-relaxed">{{ f }}</span>
                </li>
              </ul>
            </div>

            <!-- How ordering works: a real sequence, so it gets numbers -->
            <div>
              <h2 class="eyebrow mb-6">How ordering works</h2>
              <ol class="steps">
                <li v-for="(s, i) in steps" :key="s.title" class="step">
                  <span class="step-n font-mono">{{ String(i + 1).padStart(2, '0') }}</span>
                  <div>
                    <h3 class="font-body font-semibold text-cream-200 mb-1.5">{{ s.title }}</h3>
                    <p class="font-body text-sm text-mist leading-relaxed">{{ s.body }}</p>
                  </div>
                </li>
              </ol>
            </div>

            <div v-if="restImages.length">
              <h2 class="eyebrow mb-6">More from this service</h2>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(img, i) in restImages" :key="i"
                     class="img-zoom rounded-xl overflow-hidden bg-ink-800 aspect-square border border-white/[0.06]">
                  <img :src="img" :alt="`${service.name} sample ${i + 2}`" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar: job ticket -->
          <aside class="lg:sticky lg:top-24 self-start">
            <div class="docket">
              <div class="docket-head">
                <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-100">Job ticket</span>
                <span class="font-mono text-[10px] tracking-[0.18em] text-mist">{{ refNo }}</span>
              </div>

              <dl class="docket-rows">
                <div>
                  <dt>Service</dt>
                  <dd>{{ service.name }}</dd>
                </div>
                <div>
                  <dt>Price</dt>
                  <dd>Quoted per job</dd>
                </div>
                <div>
                  <dt>Turnaround</dt>
                  <dd>{{ service.turnaround_time || 'Confirmed with your quote' }}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd class="flex items-center gap-2">
                    <span class="dot" :class="service.is_active ? 'dot-on' : 'dot-off'" />
                    {{ service.is_active ? 'Taking orders' : 'Currently paused' }}
                  </dd>
                </div>
              </dl>

              <p class="font-body text-[13px] text-mist leading-relaxed px-6">
                Every job is priced on quantity, material and finishing, so tell us what you need and we send a price back.
              </p>

              <div class="tear" aria-hidden="true" />

              <div class="px-6 pb-6">
                <a :href="serviceLink(service)" target="_blank" rel="noopener"
                   class="btn-primary w-full justify-center">
                  Ask price on Telegram
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.94 4.38 18.6 20.1c-.25 1.11-.91 1.38-1.84.86l-5.09-3.75-2.45 2.36c-.27.27-.5.5-1.03.5l.37-5.2 9.47-8.56c.41-.37-.09-.57-.64-.2L5.68 13.3.65 11.72c-1.09-.34-1.11-1.09.23-1.62L20.53 2.5c.91-.33 1.71.21 1.41 1.88Z" />
                  </svg>
                </a>
                <p class="font-mono text-[10px] text-mist/70 text-center mt-3 leading-relaxed">
                  The link to this page travels with your message
                </p>

                <div class="mt-6 pt-5 border-t border-white/[0.07] space-y-3">
                  <a :href="`https://t.me/${TELEGRAM_USER}`" target="_blank" rel="noopener" class="contact-row">
                    <svg class="w-4 h-4 shrink-0" :style="{ color: accent }" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.94 4.38 18.6 20.1c-.25 1.11-.91 1.38-1.84.86l-5.09-3.75-2.45 2.36c-.27.27-.5.5-1.03.5l.37-5.2 9.47-8.56c.41-.37-.09-.57-.64-.2L5.68 13.3.65 11.72c-1.09-.34-1.11-1.09.23-1.62L20.53 2.5c.91-.33 1.71.21 1.41 1.88Z" />
                    </svg>
                    @{{ TELEGRAM_USER }}
                  </a>
                  <a href="tel:010871011" class="contact-row">
                    <svg class="w-4 h-4 shrink-0" :style="{ color: accent }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    010 871 011
                  </a>
                  <a href="mailto:info@hryprinting.com" class="contact-row">
                    <svg class="w-4 h-4 shrink-0" :style="{ color: accent }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@hryprinting.com
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- Related -->
      <section v-if="related.length" class="border-t border-white/[0.07]">
        <div class="wrap py-16">
          <h2 class="eyebrow mb-7">Other services</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <NuxtLink v-for="r in related" :key="r.id" :to="`/services/${r.slug}`" class="rel-card group">
              <span class="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    :style="{ background: (r.color || FALLBACK) + '15' }">
                <svg class="w-[18px] h-[18px]" :style="{ color: r.color || FALLBACK }"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="getIcon(r.icon)" />
                </svg>
              </span>
              <h3 class="font-body font-semibold text-cream-200 group-hover:text-blue-400 transition-colors mb-2">
                {{ r.name }}
              </h3>
              <p v-if="r.short_description" class="font-body text-[13px] text-mist leading-relaxed line-clamp-2">
                {{ r.short_description }}
              </p>
              <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/70 mt-5
                           inline-flex items-center gap-1.5 group-hover:text-blue-400 transition-colors">
                View service
                <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>

    <!-- ── NOT FOUND ─────────────────────────────────────────── -->
    <div v-else class="wrap py-32 text-center">
      <div class="mx-auto w-fit relative mb-8">
        <span class="crop crop-tl" /><span class="crop crop-tr" />
        <span class="crop crop-bl" /><span class="crop crop-br" />
        <div class="font-display font-900 text-[clamp(4rem,14vw,9rem)] text-ink-800 leading-none select-none px-6">
          404
        </div>
      </div>
      <p class="font-body text-mist mb-8">That service isn't on the press. Browse everything we print instead.</p>
      <NuxtLink to="/services" class="btn-primary">Back to services</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const api = useApi()
const { serviceLink, serviceUrl, TELEGRAM_USER } = useTelegramQuote()

const FALLBACK = '#3B82F6'

/* ---- data (SSR-friendly, so meta tags land in the HTML) ---- */
const { data: svcRes, pending } = await useAsyncData(
    () => `service:${route.params.slug}`,
    async () => {
      try { return await api.getService(route.params.slug as string) } catch { return null }
    },
    { watch: [() => route.params.slug] },
)

const { data: allRes } = await useAsyncData('services:all', async () => {
  try { return await api.getServices() } catch { return null }
})

const service = computed<any>(() => (svcRes.value as any)?.data ?? null)
const all = computed<any[]>(() =>
    ((allRes.value as any)?.data ?? []).filter((x: any) => x && x.slug),
)

const related = computed(() =>
    all.value.filter(s => s.slug !== route.params.slug).slice(0, 4),
)

/* ---- derived display values ---- */
const accent = computed(() => service.value?.color || FALLBACK)

// images_url is often empty while image_url holds the single uploaded photo
const gallery = computed<string[]>(() => {
  const many = service.value?.images_url
  if (Array.isArray(many) && many.length) return many
  return service.value?.image_url ? [service.value.image_url] : []
})
const heroImage = computed(() => gallery.value[0] || '')
const restImages = computed(() => gallery.value.slice(1))

const refNo = computed(() => `HRY-${String(service.value?.id ?? 0).padStart(4, '0')}`)

const initials = computed(() =>
    (service.value?.name || '')
        .split(' ')
        .map((w: string) => w[0])
        .join('')
        .slice(0, 3)
        .toUpperCase(),
)

// press colour control bar: solids then tints
const colorBar = [
  { k: 'c', c: '#00AEEF', t: 1 }, { k: 'm', c: '#EC008C', t: 1 },
  { k: 'y', c: '#FFF200', t: 1 }, { k: 'k', c: '#111111', t: 1 },
  { k: 'c', c: '#00AEEF', t: 0.45 }, { k: 'm', c: '#EC008C', t: 0.45 },
  { k: 'y', c: '#FFF200', t: 0.45 }, { k: 'k', c: '#111111', t: 0.45 },
]

// Static copy — edit to match how your shop actually runs.
const steps = [
  { title: 'Send your artwork', body: 'Message us the file (PDF, AI or PSD) with the quantity and size you need.' },
  { title: 'Get a price back', body: 'We quote on stock, size and finishing, and confirm how long the run will take.' },
  { title: 'Approve the proof', body: 'Check the proof and sign it off before anything goes on the press.' },
  { title: 'Print and collect', body: 'Pick the job up in Phnom Penh, or ask us about delivery when you order.' },
]

/* ---- SEO ---- */
useSeoMeta({
  title: () => (service.value ? `${service.value.meta_title || service.value.name} — HRY Printing` : 'Service — HRY Printing'),
  description: () => service.value?.meta_description || service.value?.short_description || 'Printing services in Phnom Penh, Cambodia.',
  ogType: 'website',
  ogUrl: () => serviceUrl(route.params.slug as string),
  ogTitle: () => (service.value ? `${service.value.name} | HRY Printing` : 'HRY Printing'),
  ogDescription: () => service.value?.short_description || 'Printing in Phnom Penh, Cambodia.',
  ogImage: () => heroImage.value,
  twitterCard: 'summary_large_image',
})

/* ---- icons ---- */
const icons: Record<string, string> = {
  printer: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
  zap: 'M13 10V3L4 14h7v7l9-11h-7z',
  maximize: 'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3',
  'pen-tool': 'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z',
  package: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  droplet: 'M12 2.7l5.3 5.3a7.5 7.5 0 11-10.6 0L12 2.7z',
  scissors: 'M6 4l12 12M6 20L18 8M9 6a3 3 0 11-6 0 3 3 0 016 0zm0 12a3 3 0 11-6 0 3 3 0 016 0z',
}
const fallbackIcon = 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
const getIcon = (k: string) => icons[k] || fallbackIcon
const iconD = computed(() => getIcon(service.value?.icon))
</script>

<style scoped>
/* ── halftone field: the one ambient texture, straight from print ── */
.halftone {
  position: absolute;
  inset: -10% -10% 0;
  color: #7d8ba1;
  background-image: radial-gradient(currentColor 1.1px, transparent 1.2px);
  background-size: 15px 15px;
  opacity: 0.16;
  pointer-events: none;
}
.halftone-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, transparent 22%, rgba(0, 0, 0, 0.55) 72%, var(--ink-950, #0b0d12) 100%);
  pointer-events: none;
}

/* ── signature: CMYK ink rule under the title ── */
.rule-cmyk { display: flex; gap: 3px; width: 168px; }
.rule-cmyk i { display: block; height: 4px; flex: 1; border-radius: 1px; }

/* ── press sheet ── */
.sheet { position: relative; padding: 22px; }
.sheet-plate {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: rgb(255 255 255 / 0.03);
  border: 1px solid rgb(255 255 255 / 0.09);
  aspect-ratio: 4 / 3;
  box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.85);
}
.sheet-plate :deep(img) { width: 100%; height: 100%; object-fit: cover; display: block; }
.sheet-blank {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.sheet-blank span:first-child { font-size: clamp(3.5rem, 9vw, 6rem); }

/* crop marks */
.crop { position: absolute; width: 18px; height: 18px; opacity: 0.45; }
.crop-tl { top: 0; left: 0; border-top: 1px solid currentColor; border-left: 1px solid currentColor; }
.crop-tr { top: 0; right: 0; border-top: 1px solid currentColor; border-right: 1px solid currentColor; }
.crop-bl { bottom: 0; left: 0; border-bottom: 1px solid currentColor; border-left: 1px solid currentColor; }
.crop-br { bottom: 0; right: 0; border-bottom: 1px solid currentColor; border-right: 1px solid currentColor; }

.regmark {
  position: absolute;
  top: -2px; left: 50%;
  transform: translateX(-50%);
  width: 20px; height: 20px;
  opacity: 0.4;
}

/* colour control bar */
.colorbar { display: flex; align-items: center; gap: 3px; margin-top: 12px; }
.colorbar span { width: 16px; height: 7px; border-radius: 1px; }
.colorbar em {
  margin-left: auto;
  font-style: normal;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.5;
}

/* ── chips ── */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 13px;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 0.1);
  background: rgb(255 255 255 / 0.03);
  font-size: 12px;
  letter-spacing: 0.02em;
}
.dot { width: 6px; height: 6px; border-radius: 999px; }
.dot-on { background: #34d399; box-shadow: 0 0 0 3px rgb(52 211 153 / 0.16); }
.dot-off { background: #9ca3af; }

/* ── section labels ── */
.eyebrow {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  display: flex;
  align-items: center;
  gap: 14px;
}
.eyebrow::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgb(255 255 255 / 0.14), transparent);
}
.lead::first-line { letter-spacing: 0.005em; }

/* ── ordering steps ── */
.steps { display: grid; gap: 1px; background: rgb(255 255 255 / 0.07); border-radius: 14px; overflow: hidden; }
.step {
  display: flex;
  gap: 18px;
  padding: 22px 24px;
  background: rgb(255 255 255 / 0.02);
}
.step-n { font-size: 11px; letter-spacing: 0.16em; opacity: 0.45; padding-top: 3px; }

/* ── job ticket ── */
.docket {
  position: relative;
  border-radius: 16px;
  border: 1px solid rgb(255 255 255 / 0.09);
  background: rgb(255 255 255 / 0.035);
  backdrop-filter: blur(8px);
  overflow: hidden;
}
.docket-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px dashed rgb(255 255 255 / 0.14);
}
.docket-rows { padding: 6px 24px 18px; }
.docket-rows > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 0;
  border-bottom: 1px solid rgb(255 255 255 / 0.06);
}
.docket-rows > div:last-child { border-bottom: 0; }
.docket-rows dt {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  opacity: 0.55;
  white-space: nowrap;
}
.docket-rows dd { font-size: 14px; font-weight: 600; text-align: right; }

/* perforated tear line */
.tear {
  position: relative;
  height: 24px;
  margin: 18px 0 4px;
}
.tear::before {
  content: '';
  position: absolute;
  top: 50%; left: 14px; right: 14px;
  border-top: 1px dashed rgb(255 255 255 / 0.16);
}
.tear::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -9px;
  width: 18px; height: 18px;
  border-radius: 999px;
  transform: translateY(-50%);
  background: var(--ink-950, #0b0d12);
  box-shadow: calc(100% + 18px) 0 0 0 var(--ink-950, #0b0d12);
  border: 1px solid rgb(255 255 255 / 0.09);
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  transition: color 0.18s ease;
}
.contact-row:hover { color: #60a5fa; }

/* ── related cards ── */
.rel-card {
  display: block;
  padding: 22px;
  border-radius: 16px;
  border: 1px solid rgb(255 255 255 / 0.07);
  background: rgb(255 255 255 / 0.02);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}
.rel-card:hover {
  transform: translateY(-3px);
  border-color: rgb(59 130 246 / 0.35);
  background: rgb(255 255 255 / 0.04);
}

.link-q { transition: color 0.18s ease; }
.link-q:hover { color: #f4f1ea; }

/* ── entrance ── */
.lift {
  animation: lift 0.62s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--d, 0ms);
}
@keyframes lift {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: none; }
}

/* ── quality floor ── */
:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: 3px;
  border-radius: 4px;
}
@media (prefers-reduced-motion: reduce) {
  .lift { animation: none; }
  .rel-card:hover { transform: none; }
  *, *::before, *::after { transition-duration: 0.01ms !important; }
}
@media (max-width: 640px) {
  .sheet { padding: 16px; }
  .docket-rows > div { flex-direction: column; align-items: flex-start; gap: 4px; }
  .docket-rows dd { text-align: left; }
}
</style>