<template>
  <footer class="bg-ink-900 border-t border-white/[0.07] pt-16 pb-8">
    <div class="wrap">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.07]">

        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="mb-5">
            <BrandLogo variant="footer" />
          </div>
          <p class="font-body text-mist text-sm leading-relaxed mb-6">
            Premium printing services for businesses and brands across Cambodia since 2013.
          </p>
          <div class="flex gap-2">
            <a v-for="s in socials" :key="s.name" :href="s.href" target="_blank" rel="noopener"
               :aria-label="s.name"
               class="w-9 h-9 bg-white/[0.05] hover:bg-blue-500/20 border border-white/[0.07]
                      hover:border-blue-500/40 flex items-center justify-center transition-all duration-200">
              <span class="font-mono text-[11px] text-mist">{{ s.abbr }}</span>
            </a>
          </div>
        </div>

        <!-- Products links -->
<!--        <div>-->
<!--          <h4 class="font-display font-extrabold text-sm uppercase tracking-widest text-cream-100 mb-5">Categories</h4>-->
<!--          <ul class="space-y-2.5">-->
<!--            <li v-for="l in productLinks" :key="l.label">-->
<!--              <NuxtLink :to="l.to" class="font-body text-sm text-mist hover:text-blue-400 transition-colors">-->
<!--                {{ l.label }}-->
<!--              </NuxtLink>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

        <!-- Services links -->
        <div>
          <h4 class="font-display font-extrabold text-sm uppercase tracking-widest text-cream-100 mb-5">Services</h4>
          <ul class="space-y-2.5">
            <li v-for="l in serviceLinks" :key="l.label">
              <NuxtLink :to="l.to" class="font-body text-sm text-mist hover:text-blue-400 transition-colors">
                {{ l.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-display font-extrabold text-sm uppercase tracking-widest text-cream-100 mb-5">Contact</h4>
          <ul class="space-y-4">
            <li v-for="c in contacts" :key="c.label" class="flex items-start gap-3">
              <svg class="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="c.icon"/>
              </svg>
              <div>
                <div class="font-mono text-[10px] text-mist/60 uppercase tracking-widest mb-0.5">{{ c.label }}</div>
                <a :href="c.href" class="font-body text-sm text-cream-200 hover:text-blue-400 transition-colors">
                  {{ c.value }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="font-mono text-mist text-xs">© {{ new Date().getFullYear() }} HRY Printing. All rights reserved.</p>
        <div class="flex gap-6">
          <NuxtLink to="/about"   class="font-mono text-mist text-xs hover:text-cream-100 transition-colors">About</NuxtLink>
          <NuxtLink to="/contact" class="font-mono text-mist text-xs hover:text-cream-100 transition-colors">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials      = [
  { name:'Facebook',  abbr:'Fb', href:'https://www.facebook.com/vannyprintingshop' },

]
const productLinks = [
  { label:'Polo Grap',  to:'/products?category=business-cards'   },
  { label:'Polo Polyester', to:'/products?category=banners-signs'    },
  { label:'Cotton 65%',       to:'/products?category=brochures-flyers' },
  { label:'Cotton 300GSM',        to:'/products?category=stickers-labels'  },
  { label:'T-shirt Dry Fit',       to:'/products?category=packaging'        },
  { label:'T-shirt Dry Fit',       to:'/products?category=packaging'        },
  { label:'T-shirt Dry Fit',       to:'/products?category=packaging'        },
]
const serviceLinks = [
  { label:'Silk Screen Printing',  to:'/services/offset-printing'     },
  { label:'Embroidery', to:'/services/digital-printing'    },
  { label:'DTF Printing',     to:'/services/large-format-printing'},
  { label:'Sublimation Printing',  to:'/services/design-services'     },
  { label:'School Uniform',        to:'/services/finishing-services'  },
  { label:'Staff Uniform',        to:'/services/finishing-services'  },
]
const contacts = [
  { label:'Phone',   value:'010-871-011',          href:'tel:85510871011',               icon:'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { label:'Phone',   value:'017-871-011',          href:'tel:85517871011',               icon:'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { label:'Phone',   value:'097-9871-011',          href:'tel:855979871011',               icon:'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { label:'Email',   value:'hrkhfilm@gmail.com', href:'hrkhfilm@gmail.com', icon:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label:'Address', value:'#339-340,19st,borey laykong, Phnom Penh', href:'https://maps.app.goo.gl/HtTykLyByJkPWy7T7',                       icon:'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
]
</script>
