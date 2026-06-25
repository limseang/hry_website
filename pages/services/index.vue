<template>
  <div class="py-12 lg:py-20">
    <div class="wrap">
      <div class="lbl mb-5">What We Offer</div>
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <h1 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(3rem,8vw,7rem)]">
          OUR SERVICES
        </h1>
        <p class="font-body text-mist max-w-sm leading-relaxed lg:pb-2">
          End-to-end printing solutions from concept to delivery. Whatever you need printed, we deliver it perfectly.
        </p>
      </div>
      <div class="hr mb-14"/>

      <!-- Services grid -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        <div v-for="i in 6" :key="i" class="skel h-80"/>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        <UiServiceCard v-for="s in services" :key="s.id" :s="s"/>
      </div>

      <!-- Process -->
      <div class="bg-ink-900 border border-white/[0.07] p-10 lg:p-14 mb-10">
        <div class="lbl mb-5">How It Works</div>
        <h2 class="font-display font-900 uppercase text-cream-100 text-[clamp(2rem,5vw,4rem)] leading-none mb-12">
          SIMPLE PROCESS
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step,i) in steps" :key="step.title" class="relative">
            <div class="font-display font-900 text-7xl text-ink-700 leading-none mb-4 select-none">
              {{ String(i+1).padStart(2,'0') }}
            </div>
            <div class="absolute top-5 left-5 w-10 h-10 bg-blue-500/10 flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="step.icon"/>
              </svg>
            </div>
            <h3 class="font-display font-900 text-2xl uppercase text-cream-100 mb-2">{{ step.title }}</h3>
            <p class="font-body text-sm text-mist leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6
                  bg-blue-500/10 border border-blue-500/20 px-10 py-8">
        <div>
          <h3 class="font-display font-900 text-3xl uppercase text-cream-100 mb-1">Need something custom?</h3>
          <p class="font-body text-mist text-sm">Tell us your project — we'll make it happen.</p>
        </div>
        <NuxtLink to="/contact" class="btn-primary shrink-0">
          Contact Our Team
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
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
const services = ref<any[]>([])
const loading  = ref(true)
onMounted(async () => {
  services.value = (await api.getServices().catch(()=>null))?.data ?? []
  loading.value  = false
})
const steps = [
  { title:'Consult',  desc:'Share your requirements. We advise on the best approach for your project.',    icon:'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { title:'Design',   desc:'Upload your artwork or let our team create print-ready files.',                 icon:'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { title:'Produce',  desc:'Your job runs on precision presses with quality control at every step.',        icon:'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z' },
  { title:'Deliver',  desc:'Pick up in-store or have your prints delivered anywhere in Cambodia.',           icon:'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
]
</script>
