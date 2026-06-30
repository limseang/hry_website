<template>
  <div class="py-12 lg:py-20">
    <div class="wrap">

      <div class="lbl mb-6">Get in Touch</div>
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <h1 class="font-display font-900 uppercase text-cream-100 leading-none
                   text-[clamp(3rem,8vw,7rem)] tracking-tight">
          LET'S<br/>PRINT
        </h1>
        <p class="font-body text-mist max-w-sm leading-relaxed lg:pb-2">
          Looking for a reliable printing company in Phnom Penh, Cambodia? Tell us about your
          project and our team at HRY Printing will get back to you within 2 hours on business days.
        </p>
      </div>

      <div class="hr mb-14"/>

      <div class="grid lg:grid-cols-3 gap-12 xl:gap-20">

        <!-- Form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="submit" class="space-y-6">

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2">
                  Full Name *
                </label>
                <input v-model="form.name" type="text" placeholder="Your name" required class="inp"/>
              </div>
              <div>
                <label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2">
                  Email Address *
                </label>
                <input v-model="form.email" type="email" placeholder="you@company.com" required class="inp"/>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2">
                  Phone Number
                </label>
                <input v-model="form.phone" type="tel" placeholder="0812345678" class="inp"/>
              </div>
              <div>
                <label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2">
                  Company / Brand
                </label>
                <input v-model="form.company" type="text" placeholder="Company name" class="inp"/>
              </div>
            </div>

            <div>
                <label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2">
                  Product / Service Interested In
                </label>
              <select v-model="form.service" class="inp appearance-none">
                <option value="">Select…</option>
                <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>

            <div>
                <label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2">
                  Project Details *
                </label>
              <textarea v-model="form.message" rows="5" required
                placeholder="Describe your project — quantity, size, materials, deadline, any special requirements…"
                class="inp resize-none"/>
            </div>

            <!-- File upload zone -->
            <div>
                <label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2">
                Attach Reference / Artwork Files
                </label>
              <label class="block border-2 border-dashed border-white/15 hover:border-blue-500/50
                            rounded-xl p-8 text-center cursor-pointer transition-all duration-200 group">
                <input type="file" multiple
                       accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.svg,.zip"
                       class="hidden" @change="onFiles"/>
                <svg class="w-8 h-8 text-mist group-hover:text-blue-500 transition-colors mx-auto mb-3"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                <p class="font-body text-sm text-mist group-hover:text-cream-200 transition-colors">
                  {{ files.length ? `${files.length} file(s) selected` : 'Click to upload or drag & drop' }}
                </p>
                <p class="font-mono text-[10px] text-mist/50 mt-1">PDF, AI, EPS, PNG, JPG, SVG, ZIP — max 50 MB</p>
              </label>
            </div>

            <!-- Success -->
            <Transition name="msg">
              <div v-if="sent"
                class="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 flex items-center gap-4">
                <svg class="w-6 h-6 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <div class="font-display font-extrabold text-lg uppercase text-cream-100">Message Sent!</div>
                  <p class="font-body text-sm text-mist">We'll get back to you within 2 hours on business days.</p>
                </div>
              </div>
            </Transition>

            <button type="submit" :disabled="submitting"
              class="btn-primary w-full !py-4 !text-xl">
              <svg v-if="submitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              {{ submitting ? 'Sending…' : 'Send Message' }}
              <svg v-if="!submitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </form>
        </div>

        <!-- Info sidebar -->
        <div class="space-y-5">

          <div v-for="c in contacts" :key="c.label" class="card p-6 flex items-start gap-5">
            <div class="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="c.icon"/>
              </svg>
            </div>
            <div>
              <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">{{ c.label }}</div>
              <div v-if="c.values" class="flex flex-col gap-0.5">
                <a v-for="v in c.values" :key="v.href" :href="v.href"
                  class="font-body text-sm font-semibold text-cream-100 hover:text-blue-400 transition-colors">
                  {{ v.value }}
                </a>
              </div>
              <a v-else :href="c.href"
                class="font-body text-sm font-semibold text-cream-100 hover:text-blue-400 transition-colors">
                {{ c.value }}
              </a>
            </div>
          </div>

          <!-- Hours -->
          <div class="card p-6">
            <div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-4">Business Hours</div>
            <div class="space-y-2.5">
              <div class="flex justify-between">
                <span class="font-body text-sm text-mist">Monday – Friday</span>
                <span class="font-body text-sm font-semibold text-cream-100">8:00 – 18:00</span>
              </div>
              <div class="flex justify-between">
                <span class="font-body text-sm text-mist">Saturday</span>
                <span class="font-body text-sm font-semibold text-cream-100">9:00 – 15:00</span>
              </div>
              <div class="flex justify-between">
                <span class="font-body text-sm text-mist">Sunday</span>
                <span class="font-mono text-xs text-mist/50 italic">Closed</span>
              </div>
            </div>
          </div>

          <!-- Response badge -->
          <div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <div class="font-display font-extrabold text-lg text-cream-100 uppercase">2-Hour Response</div>
              <div class="font-mono text-[10px] text-mist">On all business day enquiries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact HRY Printing — Printing Company in Phnom Penh, Cambodia',
  description: 'Contact HRY Printing in Phnom Penh, Cambodia for a free quote. Call 010 871 011 or visit us at #339-340, Street 19, Borey Laykong. Premium printing services across Cambodia.',
})

const form = reactive({
  name: '', email: '', phone: '', company: '', service: '', message: '',
})
const files     = ref<File[]>([])
const submitting = ref(false)
const sent       = ref(false)

const onFiles = (e: Event) => {
  files.value = Array.from((e.target as HTMLInputElement).files || [])
}

const submit = async () => {
  submitting.value = true
  // Simulate sending — connect to your backend as needed
  await new Promise(r => setTimeout(r, 1200))
  sent.value = true; submitting.value = false
  Object.assign(form, { name:'', email:'', phone:'', company:'', service:'', message:'' })
  files.value = []
}

const serviceOptions = [
  'Business Cards', 'Banners & Signs', 'Brochures & Flyers',
  'Stickers & Labels', 'Packaging', 'Large Format Printing',
  'Design Services', 'Finishing Services', 'Other / Custom',
]
const contacts = [
  { label:'Phone',   values:[
      { value:'010-871-011',  href:'tel:85510871011' },
      { value:'017-871-011',  href:'tel:85517871011' },
      { value:'097-9871-011', href:'tel:855979871011' },
    ], icon:'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { label:'Email',   value:'hrkhfilm@gmail.com',       href:'mailto:hrkhfilm@gmail.com',   icon:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label:'Address', value:'#339-340, Street 19, Borey Laykong, Phnom Penh, Cambodia', href:'https://maps.app.goo.gl/HtTykLyByJkPWy7T7', icon:'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { label:'Telegram', value:'@Hryprintingshop',        href:'https://t.me/Hryprintingshop', icon:'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
]
</script>

<style scoped>
.msg-enter-active, .msg-leave-active { transition: all .3s ease; }
.msg-enter-from, .msg-leave-to       { opacity:0; transform:translateY(-8px); }
</style>
