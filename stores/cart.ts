interface CartItem {
  product_id:    number
  product_name:  string
  thumbnail_url: string | null
  price:         number
  unit:          string
  quantity:      number
  options:       Record<string, string>
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const count    = computed(() => items.value.reduce((s, i) => s + i.quantity, 0))
  const subtotal = computed(() => items.value.reduce((s, i) => s + i.price * i.quantity, 0))

  const addItem = (item: CartItem) => {
    const ex = items.value.find(
      i => i.product_id === item.product_id &&
           JSON.stringify(i.options) === JSON.stringify(item.options)
    )
    if (ex) ex.quantity += item.quantity
    else     items.value.push({ ...item })
    save()
  }

  const removeItem = (id: number) => { items.value = items.value.filter(i => i.product_id !== id); save() }
  const updateQty  = (id: number, qty: number) => { const i = items.value.find(i => i.product_id === id); if (i) { i.quantity = qty; save() } }
  const clear      = () => { items.value = []; if (import.meta.client) localStorage.removeItem('hry_cart') }

  const save    = () => { if (import.meta.client) localStorage.setItem('hry_cart', JSON.stringify(items.value)) }
  const hydrate = () => { if (import.meta.client) { const s = localStorage.getItem('hry_cart'); if (s) items.value = JSON.parse(s) } }

  return { items, count, subtotal, addItem, removeItem, updateQty, clear, hydrate }
})
