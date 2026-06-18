export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const user  = ref<any | null>(null)

  const isLoggedIn = computed(() => !!token.value)
  const isAdmin    = computed(() => user.value?.role === 'admin')

  if (import.meta.client) {
    token.value = localStorage.getItem('hry_token')
    const u = localStorage.getItem('hry_user')
    if (u) user.value = JSON.parse(u)
  }

  const setAuth = (t: string, u: any) => {
    token.value = t; user.value = u
    if (import.meta.client) {
      localStorage.setItem('hry_token', t)
      localStorage.setItem('hry_user', JSON.stringify(u))
    }
  }

  const logout = () => {
    token.value = null; user.value = null
    if (import.meta.client) {
      localStorage.removeItem('hry_token')
      localStorage.removeItem('hry_user')
    }
  }

  return { token, user, isLoggedIn, isAdmin, setAuth, logout }
})
