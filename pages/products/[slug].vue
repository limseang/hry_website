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

          <!-- Images — top always shows the main product photo -->
          <div class="space-y-3 lg:sticky lg:top-24 lg:self-start">
            <button type="button" @click="openLightbox(mainImg)"
                    class="zoom block w-full aspect-square bg-ink-800 border border-white/[0.07] cursor-zoom-in overflow-hidden">
              <img :src="mainImg" :alt="product.name" class="w-full h-full object-cover"/>
            </button>
            <div v-if="allImgs.length>1" class="flex gap-2.5 overflow-x-auto pb-1">
              <button v-for="(img,i) in allImgs" :key="i" @click="openLightbox(img)"
                      class="w-20 h-20 shrink-0 border-2 overflow-hidden transition-all duration-200 cursor-zoom-in"
                      :class="img===mainImg ? 'border-blue-500' : 'border-white/10 hover:border-white/30'">
                <img :src="img" :alt="`${product.name} ${i+1}`" class="w-full h-full object-cover"/>
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

            <!-- Pricing → Telegram -->
            <div class="mb-8 pb-8 border-b border-white/[0.07]">
              <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-2">Pricing</div>
              <p class="font-body text-lg text-cream-200 leading-relaxed">
                Price depends on size, material and quantity. Send us this product on Telegram and we reply with a quote.
              </p>
              <div v-if="product.min_quantity>1" class="font-mono text-xs text-mist mt-3">
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
            <div v-if="product.finishing_options?.length" class="mb-6">
              <div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-3">Finishing</div>
              <div class="flex flex-wrap gap-2">
                <button v-for="fin in product.finishing_options" :key="fin" @click="selFin=fin"
                        class="font-body text-sm px-3.5 py-1.5 border-2 transition-all duration-200"
                        :class="selFin===fin ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/15 text-mist hover:border-blue-500 hover:text-blue-400'">
                  {{ fin }}
                </button>
              </div>
            </div>

            <!-- Quantity -->
            <div class="mb-8">
              <div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-3">Quantity</div>
              <div class="inline-flex items-center border-2 border-white/15">
                <button @click="stepQty(-1)"
                        class="w-10 h-10 font-body text-lg text-mist hover:text-blue-400 transition-colors">−</button>
                <input v-model.number="qty" type="number" :min="minQty" inputmode="numeric"
                       class="w-24 h-10 bg-transparent text-center font-body text-sm text-cream-100
                         outline-none border-x-2 border-white/15 [appearance:textfield]
                         [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                <button @click="stepQty(1)"
                        class="w-10 h-10 font-body text-lg text-mist hover:text-blue-400 transition-colors">+</button>
                <span class="font-mono text-[10px] text-mist uppercase tracking-widest px-4">
                  {{ product.unit || 'pcs' }}
                </span>
              </div>
            </div>

            

            <!-- Message preview -->
            <div class="bg-ink-800 border border-white/[0.07] mb-4">
              <div class="flex items-center justify-between px-5 py-3 border-b border-white/[0.07]">
                <span class="font-mono text-[10px] text-mist uppercase tracking-widest">Your Telegram message</span>
                <button @click="copyMsg"
                        class="font-mono text-[10px] uppercase tracking-widest transition-colors"
                        :class="copied ? 'text-blue-400' : 'text-mist hover:text-cream-100'">
                  {{ copied ? 'Copied' : 'Copy' }}
                </button>
              </div>
              <textarea v-model="messageBody" rows="8"
                        class="w-full bg-transparent font-mono text-[11px] leading-relaxed text-cream-200
                               p-5 outline-none resize-y min-h-[140px] border-0"/>
              <div class="px-5 py-4 border-t border-white/[0.07]">
                <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-2">
                  Product link — included automatically
                </div>
                <div class="font-mono text-[11px] text-blue-400 break-all select-all">{{ productPageUrl }}</div>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-3">
              <a :href="telegramUrl" target="_blank" rel="noopener" class="btn-primary flex-1">
                Ask price on Telegram
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.94 4.38 18.6 20.1c-.25 1.11-.91 1.38-1.84.86l-5.09-3.75-2.45 2.36c-.27.27-.5.5-1.03.5l.37-5.2 9.47-8.56c.41-.37-.09-.57-.64-.2L5.68 13.3.65 11.72c-1.09-.34-1.11-1.09.23-1.62L20.53 2.5c.91-.33 1.71.21 1.41 1.88Z"/>
                </svg>
              </a>
              <a href="tel:02XXXXXXX" class="btn-outline px-6">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Us
              </a>
            </div>
            <p class="font-mono text-[10px] text-mist mt-3">
              Telegram opens with this product link already in the box. No Telegram?
              <NuxtLink to="/contact" class="text-blue-400 hover:text-blue-300 transition-colors">Use the contact form</NuxtLink>
            </p>
          </div>
        </div>
      </div>


      <div v-else class="text-center py-32">
        <div class="font-display font-900 text-[9rem] text-ink-800 leading-none select-none mb-6">404</div>
        <p class="font-body text-mist mb-8">This product could not be found.</p>
        <NuxtLink to="/products" class="btn-primary">Back to Products</NuxtLink>
      </div>
    </div>

    <!-- Lightbox — full-size view, click backdrop or Esc to close -->
    <Teleport to="body">
      <div v-if="lightbox" @click="closeLightbox"
           class="fixed inset-0 z-[200] bg-black/92 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out">
        <button type="button" @click.stop="closeLightbox"
                class="absolute top-5 right-5 z-10 w-11 h-11 flex items-center justify-center text-cream-100 hover:text-blue-400 transition-colors"
                aria-label="Close">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <button v-if="allImgs.length>1" type="button" @click.stop="lightboxNav(-1)"
                class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-cream-100 hover:text-blue-400 transition-colors"
                aria-label="Previous image">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button v-if="allImgs.length>1" type="button" @click.stop="lightboxNav(1)"
                class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-cream-100 hover:text-blue-400 transition-colors"
                aria-label="Next image">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <img :src="lightboxSrc" :alt="product?.name" @click.stop
             class="max-w-full max-h-[90vh] w-auto h-auto object-contain select-none"/>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const route   = useRoute()
const api     = useApi()
const { quoteBody, quoteLink, productUrl } = useTelegramQuote()
const product = ref<any>(null)
const loading = ref(true)
const selSize   = ref('')
const selFin    = ref('')
const qty       = ref(1)
const copied    = ref(false)
const lightbox  = ref(false)
const lightboxSrc = ref('')
const messageBody = ref('')

const allImgs = computed(() => {
  const a: string[] = []
  const main = product.value?.image_url || product.value?.thumbnail_url
  if (main) a.push(main)
  if (product.value?.images_url?.length) {
    for (const img of product.value.images_url) {
      if (img && !a.includes(img)) a.push(img)
    }
  }
  return a
})

const mainImg = computed(() => product.value?.image_url || product.value?.thumbnail_url || allImgs.value[0] || '')

function openLightbox (src: string) {
  if (!src) return
  lightboxSrc.value = src
  lightbox.value = true
}
function closeLightbox () {
  lightbox.value = false
}
function lightboxNav (dir: number) {
  const imgs = allImgs.value
  if (imgs.length < 2) return
  const i = imgs.indexOf(lightboxSrc.value)
  const next = (Math.max(i, 0) + dir + imgs.length) % imgs.length
  lightboxSrc.value = imgs[next]
}

/* close on Escape, arrows to browse, lock scroll while open */
watch(lightbox, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})
function onKey (e: KeyboardEvent) {
  if (!lightbox.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lightboxNav(-1)
  if (e.key === 'ArrowRight') lightboxNav(1)
}
onMounted(() => import.meta.client && window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})

const minQty = computed(() => Number(product.value?.min_quantity) || 1)

function stepQty (d: number) {
  const step = minQty.value > 1 ? minQty.value : 1
  qty.value = Math.max(minQty.value, (Number(qty.value) || minQty.value) + d * step)
}

const productPageUrl = computed(() => product.value ? productUrl(product.value.slug) : '')

const quoteOpts = computed(() => ({
  size: selSize.value || undefined,
  finishing: selFin.value || undefined,
  qty: qty.value,
}))

const tgMessage = computed(() =>
  product.value ? `${messageBody.value}\n\n${productPageUrl.value}` : ''
)

const telegramUrl = computed(() =>
  product.value ? quoteLink(product.value, quoteOpts.value, messageBody.value) : ''
)

watch([product, selSize, selFin, qty], () => {
  if (!product.value) return
  messageBody.value = quoteBody(product.value, quoteOpts.value)
}, { immediate: true })

async function copyMsg () {
  try {
    await navigator.clipboard.writeText(tgMessage.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch { /* clipboard blocked, user can still select the text */ }
}

/* OG tags so the pasted link renders as a card with the product photo inside Telegram */
useSeoMeta({
  title: () => product.value ? `${product.value.name} — Printing in Cambodia | HRY Printing` : 'Product — HRY Printing',
  description: () => product.value
      ? `${product.value.name} from HRY Printing in Phnom Penh, Cambodia. ${product.value.short_description || 'High-quality printing with fast delivery across Cambodia.'}`
      : 'Premium printing products in Cambodia from HRY Printing.',
  ogType: 'product',
  ogUrl: () => productPageUrl.value,
  ogTitle: () => product.value ? `${product.value.name} | HRY Printing` : 'HRY Printing',
  ogDescription: () => product.value?.short_description || product.value?.description || 'Printing in Phnom Penh, Cambodia.',
  ogImage: () => product.value?.image_url || product.value?.thumbnail_url || '',
  twitterCard: 'summary_large_image',
})

onMounted(async () => {
  try {
    const r = await api.getProduct(route.params.slug as string)
    product.value = r?.data ?? null
    if (product.value) {
      selSize.value   = product.value.size_options?.[0]    || ''
      selFin.value    = product.value.finishing_options?.[0] || ''
      qty.value       = minQty.value
    }
  } catch { product.value = null }
  finally   { loading.value = false }
})
</script>