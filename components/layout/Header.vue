<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-ink-950/95 backdrop-blur-md border-b border-white/[0.06] py-0'
      : 'bg-transparent py-2'"
  >
    <div class="wrap flex items-center justify-between h-[68px] lg:h-20">

      <!-- Logo -->
      <NuxtLink
        to="/"
        class="group shrink-0 opacity-95 hover:opacity-100 transition-opacity"
        aria-label="HRY Printing Home"
      >
        <BrandLogo variant="header" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <NuxtLink
          v-for="l in links" :key="l.to" :to="l.to"
          class="relative px-4 py-2 font-display font-700 text-[15px] uppercase tracking-wide
                 text-mist hover:text-cream-100 transition-colors duration-200 group"
          active-class="!text-cream-100"
        >
          {{ l.label }}
          <span class="absolute bottom-1 left-4 right-4 h-px bg-blue-500
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"/>
        </NuxtLink>
      </nav>

      <!-- CTA + burger -->
      <div class="flex items-center gap-3">
        <NuxtLink to="/contact" class="hidden lg:inline-flex btn-primary btn-sm">
          Get a Quote
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
        <button
          @click="open = !open"
          class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
          :aria-label="open ? 'Close menu' : 'Open menu'"
        >
          <span class="w-5 h-0.5 bg-cream-100 transition-all duration-300 origin-center"
                :class="open ? 'rotate-45 translate-y-[7px]' : ''" />
          <span class="w-5 h-0.5 bg-cream-100 transition-all duration-300"
                :class="open ? 'opacity-0 scale-x-0' : ''" />
          <span class="w-5 h-0.5 bg-cream-100 transition-all duration-300 origin-center"
                :class="open ? '-rotate-45 -translate-y-[7px]' : ''" />
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <Transition name="mob">
      <div v-if="open" class="lg:hidden fixed inset-0 top-[68px] bg-ink-950/98 backdrop-blur-xl
                              flex flex-col px-6 pt-10 pb-8 gap-2 z-40">
        <NuxtLink
          v-for="l in links" :key="l.to" :to="l.to"
          @click="open = false"
          class="font-display font-900 text-5xl uppercase text-cream-100/60
                 hover:text-cream-100 py-3 border-b border-white/[0.05]
                 transition-colors duration-200"
          active-class="!text-blue-400"
        >{{ l.label }}</NuxtLink>
        <div class="mt-auto pt-8">
          <NuxtLink to="/contact" @click="open=false" class="btn-primary w-full">
            Get a Quote
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
  <!-- Spacer -->
  <div class="h-[68px] lg:h-20"/>
</template>

<script setup lang="ts">
const { y }  = useWindowScroll()
const scrolled = computed(() => y.value > 40)
const open     = ref(false)
watch(useRoute(), () => { open.value = false })

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About'    },
  { to: '/contact',  label: 'Contact'  },
]
</script>

<style scoped>
.mob-enter-active, .mob-leave-active { transition: opacity .25s ease, transform .25s var(--ease); }
.mob-enter-from, .mob-leave-to       { opacity: 0; transform: translateY(-12px); }
</style>
