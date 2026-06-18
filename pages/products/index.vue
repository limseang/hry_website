<template>
  <div class="py-12 lg:py-20">
    <div class="wrap">
      <div class="lbl mb-5">Catalogue</div>
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <h1 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(3rem,8vw,7rem)]">
          ALL PRODUCTS
        </h1>
        <p class="font-body text-mist max-w-sm leading-relaxed lg:pb-2">
          Browse our full range of professional printing products. Filter by category or search below.
        </p>
      </div>

      <div class="hr mb-10"/>

      <!-- Category filters -->
      <div class="flex flex-wrap gap-2 mb-7">
        <button
          class="font-display font-700 text-sm uppercase tracking-wide px-4 py-2
                 border-2 transition-all duration-200"
          :class="cat==='' ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/15 text-mist hover:border-blue-500 hover:text-blue-400'"
          @click="setCat('')"
        >All</button>
        <button
          v-for="c in categories" :key="c.id"
          class="font-display font-700 text-sm uppercase tracking-wide px-4 py-2
                 border-2 transition-all duration-200"
          :class="cat===c.slug ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/15 text-mist hover:border-blue-500 hover:text-blue-400'"
          @click="setCat(c.slug)"
        >{{ c.name }}</button>
      </div>

      <!-- Search + view toggle -->
      <div class="flex items-center gap-3 mb-7">
        <div class="relative flex-1 max-w-md">
          <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mist"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input v-model="q" type="text" placeholder="Search products…"
            class="inp !pl-11" @input="onSearch"/>
        </div>
        <div class="flex gap-1.5">
          <button v-for="v in ['grid','list']" :key="v" @click="view=v as any"
            class="w-9 h-9 border-2 flex items-center justify-center transition-all duration-200"
            :class="view===v ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/15 text-mist hover:border-white/30'">
            <svg v-if="v==='grid'" class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <rect x="1" y="1" width="6" height="6"/><rect x="9" y="1" width="6" height="6"/>
              <rect x="1" y="9" width="6" height="6"/><rect x="9" y="9" width="6" height="6"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <rect x="1" y="2" width="14" height="3"/><rect x="1" y="7" width="14" height="3"/><rect x="1" y="12" width="14" height="3"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Count -->
      <p class="font-mono text-xs text-mist mb-8">
        {{ loading ? 'Loading…' : `${total} product${total===1?'':'s'} found` }}
      </p>

      <!-- Grid view -->
      <div v-if="!loading && products.length && view==='grid'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <UiProductCard v-for="p in products" :key="p.id" :p="p"/>
      </div>

      <!-- List view -->
      <div v-else-if="!loading && products.length && view==='list'" class="flex flex-col gap-3">
        <NuxtLink v-for="p in products" :key="p.id" :to="`/products/${p.slug}`"
          class="group card flex items-center gap-5 p-4">
          <div class="zoom w-20 h-20 bg-ink-700 shrink-0">
            <img v-if="p.thumbnail_url" :src="p.thumbnail_url" :alt="p.name" loading="lazy"/>
            <div v-else class="w-full h-full flex items-center justify-center">
              <svg class="w-6 h-6 text-ink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1">{{ p.category?.name }}</div>
            <h3 class="font-display font-extrabold text-lg text-cream-100 uppercase truncate
                       group-hover:text-blue-400 transition-colors">{{ p.name }}</h3>
            <p class="font-body text-sm text-mist truncate mt-0.5">{{ p.short_description }}</p>
          </div>
          <div class="text-right shrink-0">
            <div v-if="p.price" class="font-display font-900 text-xl text-cream-100">${{ Number(p.price).toLocaleString() }}</div>
            <div v-else class="font-body text-sm text-mist">On request</div>
            <div v-if="p.unit" class="font-mono text-xs text-mist">/ {{ p.unit }}</div>
          </div>
          <svg class="w-4 h-4 text-mist group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>

      <!-- Skeleton -->
      <div v-else-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="i in 8" :key="i">
          <div class="skel aspect-[4/3]"/>
          <div class="bg-ink-800 p-5 space-y-2.5">
            <div class="skel h-5 w-3/4"/><div class="skel h-3.5 w-full"/><div class="skel h-3.5 w-2/3"/>
          </div>
        </div>
      </div>

      <!-- Empty -->
      <div v-else class="text-center py-24">
        <div class="font-display font-900 text-[7rem] text-ink-800 leading-none select-none mb-6 uppercase">Empty</div>
        <p class="font-body text-mist mb-8">No products match your search.</p>
        <button class="btn-outline" @click="reset">Clear Filters</button>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-14">
        <button :disabled="page===1" @click="go(page-1)"
          class="w-10 h-10 border-2 border-white/15 flex items-center justify-center text-mist
                 hover:border-white/30 disabled:opacity-30 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button v-for="n in pageNums" :key="n" @click="go(n)"
          class="w-10 h-10 border-2 font-mono text-sm transition-all duration-200"
          :class="n===page ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/15 text-mist hover:border-white/30'">
          {{ n }}
        </button>
        <button :disabled="page===totalPages" @click="go(page+1)"
          class="w-10 h-10 border-2 border-white/15 flex items-center justify-center text-mist
                 hover:border-white/30 disabled:opacity-30 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Products — HRY Printing' })

const api    = useApi()
const route  = useRoute()
const router = useRouter()

const products   = ref<any[]>([])
const categories = ref<any[]>([])
const loading    = ref(true)
const total      = ref(0)
const totalPages = ref(1)
const page       = ref(1)
const view       = ref<'grid'|'list'>('grid')
const cat        = ref((route.query.category as string) || '')
const q          = ref('')

const pageNums = computed(() => {
  const a=[], s=Math.max(1,page.value-2), e=Math.min(totalPages.value,page.value+2)
  for(let i=s;i<=e;i++) a.push(i); return a
})

const load = async () => {
  loading.value = true
  try {
    const p: Record<string,any> = { per_page:12, page:page.value }
    if (cat.value) p.category = cat.value
    if (q.value)   p.search   = q.value
    const r = await api.getProducts(p)
    products.value   = r?.data?.data  ?? []
    total.value      = r?.data?.total ?? 0
    totalPages.value = r?.data?.last_page ?? 1
  } catch { products.value = [] }
  finally { loading.value = false }
}

const setCat = (slug: string) => {
  cat.value = slug; page.value = 1
  router.replace({ query: { ...route.query, category: slug || undefined, page: undefined } })
  load()
}
const go = (n: number) => { page.value = n; window.scrollTo({top:0,behavior:'smooth'}); load() }
const reset = () => { cat.value = ''; q.value = ''; page.value = 1; load() }

let timer: any
const onSearch = () => { clearTimeout(timer); timer = setTimeout(() => { page.value=1; load() }, 400) }

onMounted(async () => {
  categories.value = (await api.getCategories().catch(() => null))?.data ?? []
  await load()
})
</script>
