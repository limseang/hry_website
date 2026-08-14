<!--
  components/Ui/ServiceCard.vue
  Image on top, then a single footer row: icon tile · title + description · arrow.
  Brand orange #FF6B00 throughout. When `image_url` is null (most rows right now)
  it draws an orange plate with the service glyph instead of an empty box.
-->
<template>
  <NuxtLink
      :to="`/services/${s.slug}`"
      class="group relative flex flex-col overflow-hidden border border-white/[0.06] bg-ink-900
           transition-colors duration-300 hover:border-[#FF6B00]/60
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    <!-- media -->
    <div class="relative aspect-[4/3] overflow-hidden bg-black">
      <img
          v-if="s.image_url && !broken"
          :src="s.image_url"
          :alt="s.name"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          @error="broken = true"
      />

      <!-- fallback plate: orange wash + press pattern + oversized glyph -->
      <div v-else class="absolute inset-0 bg-[radial-gradient(120%_95%_at_20%_0%,rgba(255,107,0,0.30)_0%,transparent_62%),radial-gradient(90%_85%_at_100%_100%,rgba(255,107,0,0.14)_0%,transparent_58%)]">
        <div class="absolute inset-0 text-[#FF6B00] opacity-[0.10] [background-image:repeating-linear-gradient(45deg,currentColor_0_1px,transparent_1px_10px)]" />
        <svg
            class="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 text-[#FF6B00] opacity-25"
            fill="none" stroke="currentColor" stroke-width="1.1" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" :d="iconPath" />
        </svg>
      </div>

      <!-- image melts into the footer bar -->
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent" />
    </div>

    <!-- footer row -->
    <div class="flex items-center gap-4 px-5 pb-6 pt-1 sm:px-6">
      <span
          class="grid h-14 w-14 shrink-0 place-items-center border border-[#FF6B00]/70 text-[#FF6B00]
               transition-colors duration-300 group-hover:bg-[#FF6B00] group-hover:text-black"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" :d="iconPath" />
        </svg>
      </span>

      <div class="min-w-0 flex-1">
        <h3 class="mb-1.5 font-display font-900 text-lg uppercase leading-none tracking-tight text-cream-100">
          {{ s.name }}
        </h3>
        <p class="font-body text-[13px] leading-snug text-mist line-clamp-2">
          {{ s.short_description }}
        </p>
      </div>

      <svg
          class="h-5 w-5 shrink-0 text-[#FF6B00] transition-transform duration-300 group-hover:translate-x-1"
          fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ s: any }>()
const broken = ref(false)

/* Lucide paths — no icon library needed. */
const ICONS: Record<string, string> = {
  frame: 'M22 6H2M22 18H2M6 2v20M18 2v20',
  shirt: 'M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z',
  flame: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z',
  droplets: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-.99 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05zM12.56 6.6A11 11 0 0 0 14 3c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 0 1-11.91 4.97',
  printer: 'M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 14h12v7H6z',
  zap: 'M13 2 3 14h8l-1 8 10-12h-8z',
  maximize: 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3',
  'pen-tool': 'm12 19 7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6M11 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  package: 'm7.5 4.3 9 5.1M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7l8.7 5 8.7-5M12 22V12',
  layers: 'M12.8 2.2a2 2 0 0 0-1.7 0L2.6 6.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.7 0l8.6-3.9a1 1 0 0 0 0-1.8zM2 12.2l8.6 3.9a2 2 0 0 0 1.7 0l8.6-3.9M2 17.2l8.6 3.9a2 2 0 0 0 1.7 0l8.6-3.9',
  sparkles: 'm12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z',
}

/* The API `icon` field is generic, so match on the service name first. */
const BY_NAME: [RegExp, string][] = [
  [/silk|screen/i, 'frame'],
  [/embroider/i, 'pen-tool'],
  [/dtf|transfer film/i, 'layers'],
  [/sublimation/i, 'droplets'],
  [/heat/i, 'flame'],
  [/uniform|school|staff/i, 'shirt'],
  [/packag|box/i, 'package'],
  [/design/i, 'pen-tool'],
  [/finish/i, 'sparkles'],
  [/large|format/i, 'maximize'],
  [/digital/i, 'zap'],
  [/offset|print/i, 'printer'],
]

const iconPath = computed(() => {
  const name = String(props.s?.name ?? '')
  const hit = BY_NAME.find(([re]) => re.test(name))?.[1]
  return ICONS[hit ?? ''] || ICONS[props.s?.icon as string] || ICONS.printer
})
</script>