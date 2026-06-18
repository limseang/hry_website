<template>
  <NuxtLink :to="`/products/${p.slug}`" class="group card flex flex-col overflow-hidden">

    <!-- Image -->
    <div class="zoom aspect-[4/3] bg-ink-700 relative">
      <img v-if="p.thumbnail_url" :src="p.thumbnail_url" :alt="p.name" loading="lazy"
           class="w-full h-full object-cover"/>
      <div v-else class="w-full h-full flex items-center justify-center">
        <svg class="w-12 h-12 text-ink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      </div>
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"/>
      <!-- Badges -->
      <span v-if="p.is_featured"
        class="absolute top-3 left-3 bg-blue-500 font-mono text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
        ★ Featured
      </span>
      <span v-if="p.category"
        class="absolute top-3 right-3 bg-ink-900/80 backdrop-blur font-mono text-mist text-[10px] uppercase tracking-widest px-2.5 py-1">
        {{ p.category.name }}
      </span>
    </div>

    <!-- Body -->
    <div class="flex flex-col flex-1 p-5 gap-3">
      <h3 class="font-display font-extrabold text-xl uppercase text-cream-100 leading-tight
                 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
        {{ p.name }}
      </h3>
      <p v-if="p.short_description" class="font-body text-sm text-mist leading-relaxed line-clamp-2 flex-1">
        {{ p.short_description }}
      </p>

      <!-- Price + arrow -->
      <div class="flex items-end justify-between pt-3 border-t border-white/[0.06] mt-auto">
        <div>
          <template v-if="p.price">
            <span class="font-display font-900 text-2xl text-cream-100">${{ Number(p.price).toLocaleString() }}</span>
            <span v-if="p.unit" class="font-mono text-xs text-mist ml-1.5">/ {{ p.unit }}</span>
          </template>
          <template v-else-if="p.price_min">
            <span class="font-mono text-xs text-mist block mb-0.5">From</span>
            <span class="font-display font-900 text-2xl text-cream-100">${{ Number(p.price_min).toLocaleString() }}</span>
          </template>
          <span v-else class="font-body text-sm text-mist">Price on request</span>
        </div>
        <div class="w-9 h-9 bg-ink-700 group-hover:bg-blue-500 border border-white/[0.07]
                    group-hover:border-blue-500 flex items-center justify-center transition-all duration-300">
          <svg class="w-4 h-4 text-mist group-hover:text-white transition-colors"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ p: any }>()
</script>
