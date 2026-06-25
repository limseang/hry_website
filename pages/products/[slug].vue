<template>
  <div class="py-12 lg:py-20">
    <div class="wrap">

      <!-- Skeleton -->
      <div v-if="loading" class="grid lg:grid-cols-2 gap-16">
        <div class="skel aspect-square"/>
        <div class="space-y-5 pt-4">
          <div class="skel h-4 w-28"/><div class="skel h-24 w-2/3"/>
          <div class="skel h-4 w-full"/><div class="skel h-4 w-3/4"/>
        </div>
      </div>

      <!-- Product -->
      <div v-else-if="product">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 mb-12 font-mono text-xs text-mist flex-wrap">
          <NuxtLink to="/"         class="hover:text-cream-100 transition-colors">Home</NuxtLink>
          <span class="opacity-30">/</span>
          <NuxtLink to="/products" class="hover:text-cream-100 transition-colors">Products</NuxtLink>
          <span v-if="product.category" class="opacity-30">/</span>
          <NuxtLink v-if="product.category" :to="`/products?category=${product.category.slug}`"
            class="hover:text-cream-100 transition-colors">{{ product.category.name }}</NuxtLink>
          <span class="opacity-30">/</span>
          <span class="text-cream-200 truncate max-w-[200px]">{{ product.name }}</span>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 xl:gap-20">

          <!-- Images -->
          <div class="space-y-3">
            <div class="zoom aspect-square bg-ink-800 border border-white/[0.07]">
              <img :src="activeImg" :alt="product.name" class="w-full h-full object-cover"/>
            </div>
            <div v-if="allImgs.length>1" class="flex gap-2.5 overflow-x-auto pb-1">
              <button v-for="(img,i) in allImgs" :key="i" @click="activeImg=img"
                class="w-20 h-20 shrink-0 border-2 overflow-hidden transition-all duration-200"
                :class="activeImg===img ? 'border-blue-500' : 'border-white/10 hover:border-white/30'">
                <img :src="img" :alt="`img-${i}`" class="w-full h-full object-cover"/>
              </button>
            </div>
          </div>

          <!-- Details -->
          <div>
            <!-- Badges -->
            <div class="flex items-center gap-2.5 mb-5 flex-wrap">
              <NuxtLink v-if="product.category" :to="`/products?category=${product.category.slug}`"
                class="lbl !text-[10px] hover:opacity-70 transition-opacity">
                {{ product.category.name }}
              </NuxtLink>
              <span v-if="product.is_featured"
                class="bg-blue-500 font-mono text-white text-[10px] uppercase tracking-widest px-2.5 py-0.5">
                ★ Featured
              </span>
            </div>

            <h1 class="font-display font-900 uppercase text-cream-100 leading-none tracking-tight
                       text-[clamp(2.5rem,5vw,4.5rem)] mb-6">{{ product.name }}</h1>

            <!-- Price -->
            <div class="mb-8 pb-8 border-b border-white/[0.07]">
              <template v-if="product.price">
                <span class="font-display font-900 text-5xl text-cream-100">
                  ${{ Number(product.price).toLocaleString() }}
                </span>
                <span v-if="product.unit" class="font-body text-mist ml-2">/ {{ product.unit }}</span>
              </template>
              <template v-else-if="product.price_min">
                <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Price Range</div>
                <span class="font-display font-900 text-5xl text-cream-100">
                  ${{ Number(product.price_min).toLocaleString() }}
                </span>
                <span class="font-display font-900 text-3xl text-mist mx-2">–</span>
                <span class="font-display font-900 text-5xl text-cream-100">
                  ${{ Number(product.price_max).toLocaleString() }}
                </span>
              </template>
              <span v-else class="font-body text-xl text-mist">Price on request</span>
              <div v-if="product.min_quantity>1" class="font-mono text-xs text-mist mt-2">
                Min. order: {{ product.min_quantity }} {{ product.unit || 'units' }}
              </div>
            </div>

            <!-- Description -->
            <p v-if="product.description" class="font-body text-mist leading-relaxed text-lg mb-8">
              {{ product.description }}
            </p>

            <!-- Size options -->
            <div v-if="product.size_options?.length" class="mb-6">
              <div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-3">Sizes</div>
              <div class="flex flex-wrap gap-2">
                <button v-for="sz in product.size_options" :key="sz" @click="selSize=sz"
                  class="font-body text-sm px-3.5 py-1.5 border-2 transition-all duration-200"
                  :class="selSize===sz ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/15 text-mist hover:border-blue-500 hover:text-blue-400'">
                  {{ sz }}
                </button>
              </div>
            </div>

            <!-- Finishing options -->
            <div v-if="product.finishing_options?.length" class="mb-8">
              <div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-3">Finishing</div>
              <div class="flex flex-wrap gap-2">
                <button v-for="fin in product.finishing_options" :key="fin" @click="selFin=fin"
                  class="font-body text-sm px-3.5 py-1.5 border-2 transition-all duration-200"
                  :class="selFin===fin ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/15 text-mist hover:border-blue-500 hover:text-blue-400'">
                  {{ fin }}
                </button>
              </div>
            </div>

            <!-- Specs -->
            <div class="bg-ink-800 border border-white/[0.07] p-6 mb-8">
              <div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-5">Specifications</div>
              <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                <div v-if="product.material">
                  <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Material</div>
                  <div class="font-body text-sm text-cream-200">{{ product.material }}</div>
                </div>
                <div v-if="product.turnaround_time">
                  <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Turnaround</div>
                  <div class="font-body text-sm text-cream-200">{{ product.turnaround_time }}</div>
                </div>
                <div v-if="product.min_quantity">
                  <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Min Qty</div>
                  <div class="font-body text-sm text-cream-200">{{ product.min_quantity }} {{ product.unit||'pcs' }}</div>
                </div>
                <div v-if="product.color_options?.length">
                  <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Colors</div>
                  <div class="font-body text-sm text-cream-200">{{ product.color_options.join(', ') }}</div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-3">
              <NuxtLink to="/contact" class="btn-primary flex-1">
                Request a Quote
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
              <a href="tel:02XXXXXXX" class="btn-outline px-6">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 404 -->
      <div v-else class="text-center py-32">
        <div class="font-display font-900 text-[9rem] text-ink-800 leading-none select-none mb-6">404</div>
        <p class="font-body text-mist mb-8">This product could not be found.</p>
        <NuxtLink to="/products" class="btn-primary">Back to Products</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route   = useRoute()
const api     = useApi()
const product = ref<any>(null)
const loading = ref(true)
const activeImg = ref('')
const selSize   = ref('')
const selFin    = ref('')

const allImgs = computed(() => {
  const a: string[] = []
  if (product.value?.thumbnail_url) a.push(product.value.thumbnail_url)
  if (product.value?.images_url?.length) a.push(...product.value.images_url)
  return a
})

useSeoMeta({
  title: () => product.value ? `${product.value.name} — Printing in Cambodia | HRY Printing` : 'Product — HRY Printing',
  description: () => product.value
    ? `${product.value.name} from HRY Printing in Phnom Penh, Cambodia. ${product.value.short_description || 'High-quality printing with fast delivery across Cambodia.'}`
    : 'Premium printing products in Cambodia from HRY Printing.',
})

onMounted(async () => {
  try {
    const r = await api.getProduct(route.params.slug as string)
    product.value = r?.data ?? null
    if (product.value) {
      activeImg.value = product.value.thumbnail_url || ''
      selSize.value   = product.value.size_options?.[0]    || ''
      selFin.value    = product.value.finishing_options?.[0] || ''
    }
  } catch { product.value = null }
  finally   { loading.value = false }
})
</script>
