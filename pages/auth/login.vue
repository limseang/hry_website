<template>
  <div class="min-h-[80vh] flex items-center justify-center py-16">
    <div class="w-full max-w-md px-5">

      <!-- Logo -->
      <div class="flex justify-center mb-10">
        <BrandLogo variant="auth" />
      </div>

      <div class="card p-8 lg:p-10">
        <h1 class="font-display font-900 text-4xl uppercase text-cream-100 mb-2">Welcome back</h1>
        <p class="font-body text-mist text-sm mb-8">Sign in to manage your orders and requests.</p>

        <p v-if="error" class="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3
                                font-mono text-sm text-red-400 mb-6">{{ error }}</p>

        <form @submit.prevent="submit" class="space-y-5">
          <div>
            <label class="font-mono text-[11px] text-mist uppercase tracking-widest block mb-2">Email</label>
            <input v-model="form.email" type="email" required placeholder="you@company.com"
              class="inp" autocomplete="email"/>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="font-mono text-[11px] text-mist uppercase tracking-widest">Password</label>
              <a href="#" class="font-mono text-[11px] text-blue-500 hover:text-blue-400 transition-colors">
                Forgot password?
              </a>
            </div>
            <div class="relative">
              <input v-model="form.password" :type="showPw ? 'text' : 'password'" required
                placeholder="••••••••" class="inp !pr-12" autocomplete="current-password"/>
              <button type="button" @click="showPw=!showPw"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-mist hover:text-cream-100 transition-colors p-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    :d="showPw
                      ? 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                      : 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'"/>
                </svg>
              </button>
            </div>
          </div>

          <button type="submit" :disabled="loading"
            class="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:!translate-y-0 disabled:!shadow-none">
            <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {{ loading ? 'Signing in…' : 'Sign In' }}
          </button>
        </form>

        <p class="font-body text-mist text-sm text-center mt-6">
          Don't have an account?
          <NuxtLink to="/auth/register" class="text-blue-500 hover:text-blue-400 transition-colors font-medium">
            Create one →
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Sign In — HRY Printing' })

const api    = useApi()
const auth   = useAuthStore()
const router = useRouter()

if (auth.isLoggedIn) router.replace('/')

const form    = reactive({ email: '', password: '' })
const loading = ref(false)
const error   = ref('')
const showPw  = ref(false)

const submit = async () => {
  loading.value = true; error.value = ''
  try {
    const r = await api.login(form.email, form.password)
    auth.setAuth(r.data.token, r.data.user)
    router.push('/')
  } catch (e: any) {
    error.value = e?.data?.message || 'Invalid email or password.'
  } finally { loading.value = false }
}
</script>
