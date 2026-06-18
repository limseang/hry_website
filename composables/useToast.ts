interface Toast { id: number; type: 'success' | 'error' | 'info'; message: string }

const toasts = ref<Toast[]>([])
let nextId = 0

export const useToast = () => {
  const add = (message: string, type: Toast['type'] = 'info') => {
    const id = ++nextId
    toasts.value.push({ id, type, message })
    setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, 3500)
  }

  return {
    toasts: readonly(toasts),
    success: (m: string) => add(m, 'success'),
    error:   (m: string) => add(m, 'error'),
    info:    (m: string) => add(m, 'info'),
    remove:  (id: number) => { toasts.value = toasts.value.filter(t => t.id !== id) },
  }
}
