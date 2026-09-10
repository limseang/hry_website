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

              <button v-if="heroImage" type="button" @click="openLightbox(heroImage)"
                      class="sheet-plate img-zoom cursor-zoom-in w-full block p-0 border-0"
                      aria-label="Open cover photo full size">
                <img :src="heroImage" :alt="`${service.name} — printed sample`" loading="eager"
                     class="w-full h-full object-cover" />
                <span v-if="lightboxImgs.length > 1" class="sheet-count font-mono" aria-hidden="true">
                  1 / {{ lightboxImgs.length }}
                </span>
              </button>
              <div v-else class="sheet-plate img-zoom">
                <div class="sheet-blank">
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

            <div v-if="featureList.length">
              <h2 class="eyebrow mb-6">What's included</h2>
              <ul class="grid sm:grid-cols-2 gap-3">
                <li v-for="f in featureList" :key="f"
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
                  <span class="step-n font-mono">{{ pad(i + 1) }}</span>
                  <div>
                    <h3 class="font-body font-semibold text-cream-200 mb-1.5">{{ s.title }}</h3>
                    <p class="font-body text-sm text-mist leading-relaxed">{{ s.body }}</p>
                  </div>
                </li>
              </ol>
            </div>

            <!-- ── SAMPLE GALLERY (redesigned) ─────────────────── -->
            <div v-if="gallery.length" class="gal-wrap"
                 :style="{ '--accent': accent, '--accent-line': accent + '66', '--accent-soft': accent + '1F' }">

              <div class="gal-head">
                <h2 class="eyebrow gal-head-title">More from this service</h2>
                <button v-if="lightboxImgs.length > 1" type="button" class="gal-all"
                        @click="openLightbox(lightboxImgs[0])">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                          d="M4 5h7v7H4zM13 5h7v7h-7zM4 14h7v5H4zM13 14h7v5h-7z" />
                  </svg>
                  View all {{ lightboxImgs.length }} photos
                </button>
              </div>

              <div class="gal" :data-feature="visibleGallery.length >= 3 ? '1' : '0'">
                <button
                  v-for="(img, i) in visibleGallery"
                  :key="img + i"
                  type="button"
                  class="gal-item"
                  :class="{ 'is-more': isMoreTile(i) }"
                  :aria-label="isMoreTile(i)
                    ? `Show all ${gallery.length} samples`
                    : `Open ${service.name} sample ${i + 1} full size`"
                  @click="onTile(img, i)"
                >
                  <span v-if="!loaded[img]" class="gal-skel" aria-hidden="true" />
                  <img :src="img" :alt="`${service.name} sample ${i + 1}`"
                       loading="lazy" decoding="async"
                       :class="{ ready: loaded[img] }"
                       @load="loaded[img] = true" />

                  <span class="gal-veil" aria-hidden="true" />

                  <span v-if="!isMoreTile(i)" class="gal-no font-mono" aria-hidden="true">
                    Sample {{ pad(i + 1) }}
                  </span>

                  <span v-if="!isMoreTile(i)" class="gal-open" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                            d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" />
                    </svg>
                  </span>

                  <span v-else class="gal-more" aria-hidden="true">
                    <em class="font-display">+{{ hiddenCount }}</em>
                    <small class="font-mono">more samples</small>
                  </span>
                </button>
              </div>

              <button v-if="showAll && gallery.length > GAL_PREVIEW" type="button"
                      class="gal-less font-mono" @click="collapseGallery">
                Show fewer samples
              </button>
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
                  <dd>{{ startingPrice ? `From $${startingPrice}` : 'Quoted per job' }}</dd>
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

    <!-- ── LIGHTBOX ──────────────────────────────────────────── -->
    <Teleport to="body">
      <div
        v-if="lightbox"
        class="lb"
        :class="{ 'lb-swiping': lbDragging, 'lb-zoomed': lbZoom }"
        :style="{ '--lb-x': lbX + 'px', '--lb-y': lbY + 'px', '--lb-scale': lbZoom ? 2 : 1, '--lb-origin': lbOrigin }"
        role="dialog"
        aria-modal="true"
        :aria-label="`${service?.name || 'Service'} photos`"
      >
        <!-- top bar: what you are looking at, and the way out -->
        <div class="lb-top" @click.stop>
          <div class="lb-title">
            <strong class="font-body">{{ service?.name }}</strong>
            <span class="font-mono">Sample {{ pad(lightboxIndex + 1) }} of {{ pad(lightboxImgs.length) }}</span>
          </div>
          <div class="lb-tools">
            <button type="button" class="lb-tool" :aria-pressed="lbZoom ? 'true' : 'false'"
                    :aria-label="lbZoom ? 'Zoom out' : 'Zoom in'" @click="toggleZoom()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="7" stroke-width="1.6" />
                <path stroke-linecap="round" stroke-width="1.8" d="M20 20l-3.6-3.6" />
                <path stroke-linecap="round" stroke-width="1.8" d="M8 11h6" />
                <path v-if="!lbZoom" stroke-linecap="round" stroke-width="1.8" d="M11 8v6" />
              </svg>
            </button>
            <a v-if="service" :href="serviceLink(service)" target="_blank" rel="noopener" class="lb-tool lb-ask">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.94 4.38 18.6 20.1c-.25 1.11-.91 1.38-1.84.86l-5.09-3.75-2.45 2.36c-.27.27-.5.5-1.03.5l.37-5.2 9.47-8.56c.41-.37-.09-.57-.64-.2L5.68 13.3.65 11.72c-1.09-.34-1.11-1.09.23-1.62L20.53 2.5c.91-.33 1.71.21 1.41 1.88Z" />
              </svg>
              <em>Ask about this sample</em>
            </a>
            <button type="button" class="lb-tool" aria-label="Close photos" @click="closeLightbox">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="lb-stage"
          @click="onLbBackdrop"
          @touchstart.passive="onLbTouchStart"
          @touchmove="onLbTouchMove"
          @touchend="onLbTouchEnd"
          @touchcancel="onLbTouchEnd"
        >
          <button
            v-if="lightboxImgs.length > 1"
            type="button"
            class="lb-side lb-prev"
            aria-label="Previous photo"
            @click.stop="stepImg(-1)"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            :src="lightboxImgs[lightboxIndex]"
            :alt="`${service?.name} sample ${lightboxIndex + 1}`"
            class="lb-img"
            draggable="false"
            @click.stop="toggleZoom($event)"
          />

          <button
            v-if="lightboxImgs.length > 1"
            type="button"
            class="lb-side lb-next"
            aria-label="Next photo"
            @click.stop="stepImg(1)"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div class="lb-chrome" @click.stop>
          <div v-if="lightboxImgs.length > 1" class="lb-dock">
            <button type="button" class="lb-nav" aria-label="Previous photo" @click="stepImg(-1)">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span class="lb-count font-mono">
              {{ lightboxIndex + 1 }} / {{ lightboxImgs.length }}
              <small>{{ lbZoom ? 'Drag to move' : 'Swipe to change' }}</small>
            </span>
            <button type="button" class="lb-nav" aria-label="Next photo" @click="stepImg(1)">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div v-if="lightboxImgs.length > 1" ref="lbThumbsEl" class="lb-thumbs">
            <button
              v-for="(img, i) in lightboxImgs"
              :key="img + i"
              type="button"
              :data-on="i === lightboxIndex ? '1' : '0'"
              :class="{ on: i === lightboxIndex }"
              :aria-label="`Photo ${i + 1}`"
              :aria-current="i === lightboxIndex ? 'true' : undefined"
              @click="goTo(i)"
            >
              <img :src="img" alt="" draggable="false" />
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const api = useApi()
const { apiBase } = useRuntimeConfig().public
const { serviceLink, serviceUrl, TELEGRAM_USER } = useTelegramQuote()

const FALLBACK = '#3B82F6'
const apiOrigin = String(apiBase || '').replace(/\/api\/v1\/?$/, '')

function unwrapRecord (res: any) {
  if (!res || typeof res !== 'object') return null
  const row = (res.success !== undefined || res.message !== undefined) ? res.data : res
  if (!row || typeof row !== 'object' || Array.isArray(row)) return null
  return row
}

function unwrapList (res: any): any[] {
  const rows = res?.data !== undefined ? res.data : res
  return (Array.isArray(rows) ? rows : []).filter((x: any) => x && x.slug)
}

function asList (v: any): string[] {
  if (Array.isArray(v)) return v.map(String).map(s => s.trim()).filter(Boolean)
  if (typeof v === 'string' && v.trim()) {
    try {
      const parsed = JSON.parse(v)
      if (Array.isArray(parsed)) return asList(parsed)
    } catch { /* not JSON */ }
    return v.split(/[\n,]/).map(s => s.trim()).filter(Boolean)
  }
  return []
}

function absMedia (src: string | undefined | null): string {
  if (!src) return ''
  const s = String(src).trim()
  if (!s) return ''
  if (/^https?:\/\//i.test(s)) {
    if (process.client && location.protocol === 'https:') {
      try {
        const u = new URL(s)
        if (u.protocol === 'http:' && u.pathname.startsWith('/storage/')) {
          return `${location.origin}${u.pathname}${u.search}`
        }
      } catch { /* keep original */ }
    }
    return s
  }
  const path = s.replace(/^\/?(storage\/)?/, '')
  const origin = (process.client && location.protocol === 'https:') ? location.origin : apiOrigin
  return origin ? `${origin}/storage/${path}` : s
}

const pad = (n: number) => String(n).padStart(2, '0')

/* ---- data (SSR snapshot + client refresh so CMS edits show without a rebuild) ---- */
const { data: svcRes, pending, refresh } = await useAsyncData(
    () => `service:${route.params.slug}`,
    async () => {
      try { return await api.getService(route.params.slug as string) } catch { return null }
    },
    { watch: [() => route.params.slug] },
)

const { data: allRes, refresh: refreshAll } = await useAsyncData('services:all', async () => {
  try { return await api.getServices() } catch { return null }
})

onMounted(() => {
  refresh()
  refreshAll()
  if (process.client) window.addEventListener('keydown', onKey)
})

const service = computed<any>(() => unwrapRecord(svcRes.value))
const all = computed<any[]>(() => unwrapList(allRes.value))

const related = computed(() =>
    all.value.filter(s => s.slug !== route.params.slug).slice(0, 4),
)

/* ---- derived display values ---- */
const accent = computed(() => service.value?.color || FALLBACK)
const featureList = computed(() => asList(service.value?.features))
const startingPrice = computed(() => {
  const n = Number(service.value?.price_starting_from)
  return Number.isFinite(n) && n > 0 ? Math.round(n) : null
})

// Cover photo is image_url; gallery is extra shots only (images_url), never the cover.
const heroImage = computed(() => absMedia(service.value?.image_url || service.value?.image))
const gallery = computed<string[]>(() => {
  const many = service.value?.images_url
  const rel = service.value?.images
  const extras = (Array.isArray(many) && many.length ? many : Array.isArray(rel) ? rel : [])
      .map((x: string) => absMedia(x))
      .filter(Boolean)
  const hero = heroImage.value
  return hero ? extras.filter((img: string) => img !== hero) : extras
})
const lightboxImgs = computed<string[]>(() => {
  const imgs: string[] = []
  if (heroImage.value) imgs.push(heroImage.value)
  for (const img of gallery.value) {
    if (img && !imgs.includes(img)) imgs.push(img)
  }
  return imgs
})

/* ---- gallery: show a tidy block first, reveal the rest on request ---- */
const GAL_PREVIEW = 5
const showAll = ref(false)
const loaded = reactive<Record<string, boolean>>({})

const visibleGallery = computed(() =>
    showAll.value ? gallery.value : gallery.value.slice(0, GAL_PREVIEW),
)
const hiddenCount = computed(() => Math.max(0, gallery.value.length - visibleGallery.value.length))
const isMoreTile = (i: number) => hiddenCount.value > 0 && i === visibleGallery.value.length - 1

function onTile (img: string, i: number) {
  if (isMoreTile(i)) {
    showAll.value = true
    return
  }
  openLightbox(img)
}
function collapseGallery () {
  showAll.value = false
  if (process.client) {
    document.querySelector('.gal-wrap')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
watch(() => route.params.slug, () => { showAll.value = false })

/* ---- lightbox ---- */
const lightbox = ref(false)
const lightboxIndex = ref(0)
const lbX = ref(0)
const lbY = ref(0)
const lbDragging = ref(false)
const lbZoom = ref(false)
const lbOrigin = ref('50% 50%')
const lbThumbsEl = ref<HTMLElement | null>(null)
let lbStartX = 0
let lbStartY = 0
let lbPanX = 0
let lbPanY = 0
let lbMoved = false
let lbAxis: 'x' | 'y' | null = null
let lbClickLock = false

function openLightbox (src: string) {
  const i = lightboxImgs.value.indexOf(src)
  lightboxIndex.value = i >= 0 ? i : 0
  lightbox.value = true
  resetLbGesture()
}
function closeLightbox () {
  lightbox.value = false
  resetLbGesture()
}
function stepImg (d: number) {
  const n = lightboxImgs.value.length
  if (!n) return
  lightboxIndex.value = (lightboxIndex.value + d + n) % n
  resetLbGesture()
}
function goTo (i: number) {
  lightboxIndex.value = i
  resetLbGesture()
}
function resetLbGesture () {
  lbX.value = 0
  lbY.value = 0
  lbDragging.value = false
  lbZoom.value = false
  lbOrigin.value = '50% 50%'
  lbMoved = false
  lbAxis = null
  lbClickLock = false
}
function toggleZoom (e?: MouseEvent) {
  if (lbZoom.value) {
    lbZoom.value = false
    lbX.value = 0
    lbY.value = 0
    return
  }
  if (e && e.currentTarget instanceof HTMLElement) {
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    lbOrigin.value = `${Math.min(100, Math.max(0, x))}% ${Math.min(100, Math.max(0, y))}%`
  }
  lbX.value = 0
  lbY.value = 0
  lbZoom.value = true
}
function onLbBackdrop () {
  if (lbMoved || lbClickLock || lbZoom.value) return
  closeLightbox()
}
function onLbTouchStart (e: TouchEvent) {
  if (e.touches.length !== 1) return
  lbDragging.value = true
  lbMoved = false
  lbAxis = null
  lbStartX = e.touches[0].clientX
  lbStartY = e.touches[0].clientY
  lbPanX = lbX.value
  lbPanY = lbY.value
  if (!lbZoom.value) {
    lbX.value = 0
    lbY.value = 0
  }
}
function onLbTouchMove (e: TouchEvent) {
  if (!lbDragging.value || e.touches.length !== 1) return
  const dx = e.touches[0].clientX - lbStartX
  const dy = e.touches[0].clientY - lbStartY

  // zoomed in: one finger pans the photo
  if (lbZoom.value) {
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) { lbMoved = true; lbClickLock = true }
    lbX.value = lbPanX + dx
    lbY.value = lbPanY + dy
    e.preventDefault()
    return
  }

  if (!lbAxis) {
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return
    lbAxis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
    lbMoved = true
    lbClickLock = true
  }
  if (lbAxis === 'x' && lightboxImgs.value.length > 1) {
    lbX.value = dx
    lbY.value = 0
    e.preventDefault()
  } else if (lbAxis === 'y' && dy > 0) {
    lbY.value = dy
    lbX.value = 0
    e.preventDefault()
  }
}
function onLbTouchEnd () {
  if (!lbDragging.value) return
  const dx = lbX.value
  const dy = lbY.value
  lbDragging.value = false

  if (lbZoom.value) {
    window.setTimeout(() => { lbClickLock = false; lbMoved = false }, 200)
    return
  }
  if (lbAxis === 'y' && dy > 90) {
    closeLightbox()
    return
  }
  if (lbAxis === 'x' && Math.abs(dx) > 50 && lightboxImgs.value.length > 1) {
    stepImg(dx < 0 ? 1 : -1)
    return
  }
  lbX.value = 0
  lbY.value = 0
  lbAxis = null
  window.setTimeout(() => { lbClickLock = false; lbMoved = false }, 280)
}

watch(lightbox, (open) => {
  if (process.client) document.body.style.overflow = open ? 'hidden' : ''
})
watch(lightboxIndex, async () => {
  await nextTick()
  const el = lbThumbsEl.value?.querySelector<HTMLElement>('[data-on="1"]')
  el?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
})
function onKey (e: KeyboardEvent) {
  if (!lightbox.value) return
  if (e.key === 'Escape') {
    if (lbZoom.value) { toggleZoom(); return }
    closeLightbox()
  } else if (e.key === 'ArrowRight') stepImg(1)
  else if (e.key === 'ArrowLeft') stepImg(-1)
}
onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})

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
.img-zoom { position: relative; }
.sheet-plate :deep(img),
.img-zoom img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.sheet-count {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #f4f1ea;
  background: rgb(0 0 0 / 0.5);
  backdrop-filter: blur(6px);
}
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

/* ══ SAMPLE GALLERY ══════════════════════════════════════════ */
.gal-head {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.gal-head-title { flex: 1 1 220px; min-width: 0; }

.gal-all {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 0.12);
  background: rgb(255 255 255 / 0.03);
  color: #f4f1ea;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  transition: border-color 0.22s ease, background 0.22s ease, color 0.22s ease;
}
.gal-all svg { width: 15px; height: 15px; color: var(--accent, #3b82f6); }
.gal-all:hover {
  border-color: var(--accent-line, rgb(255 255 255 / 0.3));
  background: var(--accent-soft, rgb(255 255 255 / 0.06));
}

/* two columns on phones, a lead sheet plus a run of four on desktop */
.gal {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.gal[data-feature='1'] > .gal-item:first-child {
  grid-column: span 2;
  aspect-ratio: 16 / 10;
}
@media (min-width: 768px) {
  .gal { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
  .gal[data-feature='1'] > .gal-item:first-child {
    grid-column: span 2;
    grid-row: span 2;
    aspect-ratio: 1 / 1;
  }
}

.gal-item {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  cursor: zoom-in;
  background: rgb(255 255 255 / 0.03);
  border: 1px solid rgb(255 255 255 / 0.08);
  box-shadow: 0 1px 0 rgb(255 255 255 / 0.04) inset;
  transition:
    border-color 0.3s ease,
    box-shadow 0.35s ease,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.gal-item.is-more { cursor: pointer; }

.gal-item img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.02);
  transition:
    opacity 0.5s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.4s ease;
}
.gal-item img.ready { opacity: 1; }

/* placeholder while the photo loads — no layout jump, no empty black box */
.gal-skel {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(100deg, transparent 20%, rgb(255 255 255 / 0.07) 45%, transparent 70%),
    rgb(255 255 255 / 0.035);
  background-size: 220% 100%, auto;
  animation: skelSweep 1.5s linear infinite;
}
@keyframes skelSweep {
  from { background-position: 140% 0, 0 0; }
  to   { background-position: -60% 0, 0 0; }
}

.gal-veil {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0.28) 0%,
    transparent 30%,
    transparent 52%,
    rgb(0 0 0 / 0.72) 100%
  );
  opacity: 0.85;
  transition: opacity 0.35s ease;
}

/* label sits low-left so it reads as a caption, not a badge */
.gal-no {
  position: absolute;
  left: 12px;
  bottom: 11px;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgb(244 241 234 / 0.82);
  text-shadow: 0 1px 8px rgb(0 0 0 / 0.7);
  pointer-events: none;
}

.gal-open {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  color: #f4f1ea;
  background: rgb(0 0 0 / 0.42);
  backdrop-filter: blur(6px);
  opacity: 0;
  transform: translateY(-4px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.gal-open svg { width: 14px; height: 14px; }

/* the "+N" tile: same frame, quieter photo, one clear number */
.gal-more {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: rgb(8 10 14 / 0.62);
  backdrop-filter: blur(2px);
  color: #f4f1ea;
  pointer-events: none;
  transition: background 0.3s ease;
}
.gal-more em { font-style: normal; font-size: clamp(1.5rem, 4vw, 2rem); line-height: 1; }
.gal-more small {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.7;
}

@media (hover: hover) {
  .gal-item:hover {
    transform: translateY(-3px);
    border-color: var(--accent-line, rgb(255 255 255 / 0.25));
    box-shadow: 0 26px 48px -28px rgb(0 0 0 / 0.95);
  }
  .gal-item:hover img { transform: scale(1.06); }
  .gal-item:hover .gal-veil { opacity: 1; }
  .gal-item:hover .gal-open { opacity: 1; transform: none; }
  .gal-item.is-more:hover .gal-more { background: rgb(8 10 14 / 0.5); }
}
.gal-item:focus-visible img { transform: scale(1.04); }
.gal-item:focus-visible .gal-open { opacity: 1; transform: none; }

/* touch: nothing hides behind a hover state */
@media (hover: none) {
  .gal-open { opacity: 1; transform: none; }
}

.gal-less {
  display: block;
  margin: 14px auto 0;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 0.1);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgb(244 241 234 / 0.7);
  transition: color 0.2s ease, border-color 0.2s ease;
}
.gal-less:hover { color: #f4f1ea; border-color: rgb(255 255 255 / 0.25); }

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
  .gal-skel { animation: none; }
  .rel-card:hover { transform: none; }
  .gal-item:hover { transform: none; }
  .gal-item img,
  .gal-item:hover img { transform: none; }
  *, *::before, *::after { transition-duration: 0.01ms !important; }
}
@media (max-width: 640px) {
  .sheet { padding: 16px; }
  .docket-rows > div { flex-direction: column; align-items: flex-start; gap: 4px; }
  .docket-rows dd { text-align: left; }
}

/* ══ LIGHTBOX (teleported; still scoped via Vue data-v) ══════ */
.lb {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background: rgba(6, 8, 12, 0.96);
  overscroll-behavior: contain;
  --lb-x: 0px;
  --lb-y: 0px;
  --lb-scale: 1;
  --lb-origin: 50% 50%;
}

.lb-top {
  position: relative;
  z-index: 3;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: calc(10px + env(safe-area-inset-top, 0px)) 14px 10px;
}
.lb-title { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.lb-title strong {
  font-size: 14px;
  color: #f4f1ea;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lb-title span {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgb(244 241 234 / 0.55);
}
.lb-tools { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.lb-tool {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #f4f1ea;
  background: rgb(255 255 255 / 0.08);
  border: 1px solid rgb(255 255 255 / 0.1);
  transition: background 0.2s ease, color 0.2s ease;
}
.lb-tool svg { width: 19px; height: 19px; }
.lb-tool:hover { background: rgb(255 255 255 / 0.16); }
.lb-ask { width: auto; padding: 0 16px; gap: 9px; }
.lb-ask svg { width: 15px; height: 15px; }
.lb-ask em { font-style: normal; font-size: 13px; font-weight: 600; }
@media (max-width: 639px) {
  .lb-ask em { display: none; }
  .lb-ask { width: 42px; padding: 0; }
}

.lb-stage {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  cursor: zoom-out;
  touch-action: none;
  overflow: hidden;
}
/* contain, not cover: a printed sample is judged on the whole sheet */
.lb-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
  user-select: none;
  cursor: zoom-in;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  transform: translate(var(--lb-x), var(--lb-y)) scale(var(--lb-scale));
  transform-origin: var(--lb-origin);
  transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
}
.lb-swiping .lb-img { transition: none; }
.lb-zoomed .lb-img { cursor: grab; }

.lb-side {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f4f1ea;
  background: rgb(255 255 255 / 0.08);
  border: 1px solid rgb(255 255 255 / 0.1);
  border-radius: 999px;
  backdrop-filter: blur(8px);
  transition: background 0.2s ease;
}
.lb-side:hover { background: rgb(255 255 255 / 0.18); }
.lb-prev { left: 16px; }
.lb-next { right: 16px; }

.lb-chrome {
  position: relative;
  z-index: 3;
  flex-shrink: 0;
  padding: 10px 12px calc(12px + env(safe-area-inset-bottom, 0px));
}
.lb-dock {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 10px;
}
.lb-nav {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #f4f1ea;
  background: rgb(255 255 255 / 0.12);
  border: 1px solid rgb(255 255 255 / 0.14);
  touch-action: manipulation;
}
.lb-nav:active { background: rgb(255 255 255 / 0.2); }
.lb-count {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 88px;
  font-size: 12px;
  letter-spacing: 0.14em;
  color: #f4f1ea;
}
.lb-count small {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}
.lb-thumbs {
  display: flex;
  justify-content: center;
  justify-content: safe center;
  gap: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 2px 4px 4px;
  touch-action: pan-x;
}
.lb-thumbs::-webkit-scrollbar { display: none; }
.lb-thumbs button {
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 9px;
  overflow: hidden;
  opacity: 0.4;
  border: 2px solid transparent;
  background: rgb(255 255 255 / 0.06);
  transition: opacity 0.2s ease, border-color 0.2s ease;
}
.lb-thumbs button:hover { opacity: 0.8; }
.lb-thumbs button.on { opacity: 1; border-color: #60a5fa; }
.lb-thumbs img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

@media (max-width: 639px) {
  .lb-side { display: none; }
  .lb-thumbs button { width: 48px; height: 48px; }
}
@media (min-width: 640px) {
  .lb-dock { display: none; }
  .lb-thumbs { padding-bottom: 6px; }
}
</style>