<template>
  <NuxtLink :to="`/services/${s.slug}`" class="group card flex flex-col p-7 gap-5 relative overflow-hidden">

    <!-- Top color accent -->
    <div class="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-[3px]"
         :style="{ background: s.color || '#3B82F6' }"/>

    <!-- Icon -->
    <div class="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
         :style="{ background: (s.color || '#3B82F6') + '18' }">
      <svg class="w-6 h-6" :style="{ color: s.color || '#3B82F6' }"
           fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="iconPath"/>
      </svg>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <h3 class="font-display font-900 text-xl uppercase text-cream-100 mb-2
                 group-hover:text-blue-400 transition-colors duration-200">{{ s.name }}</h3>
      <p class="font-body text-sm text-mist leading-relaxed line-clamp-3">{{ s.short_description }}</p>
    </div>

    <!-- Features -->
    <ul v-if="s.features?.length" class="space-y-1.5">
      <li v-for="f in s.features.slice(0,3)" :key="f" class="flex items-center gap-2.5">
        <span class="w-1.5 h-1.5 shrink-0" :style="{ background: s.color || '#3B82F6' }"/>
        <span class="font-mono text-xs text-mist">{{ f }}</span>
      </li>
    </ul>

    <!-- Footer -->
    <div class="flex items-center justify-between pt-4 border-t border-white/[0.07]">
      <div v-if="s.price_starting_from">
        <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-0.5">From</div>
        <div class="font-display font-900 text-xl text-cream-100">${{ Number(s.price_starting_from).toLocaleString() }}</div>
      </div>
      <span v-else class="font-mono text-xs text-mist">Custom pricing</span>
      <span class="font-display font-700 text-sm uppercase text-blue-500 flex items-center gap-2
                   group-hover:gap-3 transition-all duration-200">
        Details
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ s: any }>()

const iconMap: Record<string,string> = {
  printer:    'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
  zap:        'M13 10V3L4 14h7v7l9-11h-7z',
  maximize:   'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3',
  'pen-tool': 'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z',
  package:    'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  layers:     'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
}
const iconPath = computed(()=>
  iconMap[props.s?.icon] || 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
)
</script>
