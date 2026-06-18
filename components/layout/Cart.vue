<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="open" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" @click="open = false"/>
    </Transition>

    <Transition name="drawer">
      <div v-if="open"
        class="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-ink-900 border-l border-white/[0.07] z-[61] flex flex-col">

        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
          <div>
            <h2 class="font-display font-700 text-xl text-cream-100 uppercase tracking-wide">Cart</h2>
            <p class="font-mono text-stone text-xs mt-0.5">{{ cart.count }} item{{ cart.count !== 1 ? 's' : '' }}</p>
          </div>
          <button @click="open = false" class="p-2 text-stone hover:text-cream-100 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Items -->
        <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <div v-if="cart.items.length === 0" class="text-center py-16">
            <svg class="w-12 h-12 text-stone/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <p class="font-body text-stone text-sm">Your cart is empty</p>
            <button @click="open = false; navigateTo('/products')"
              class="btn-primary btn-sm mt-6">Browse Products</button>
          </div>

          <div v-for="item in cart.items" :key="item.product_id"
               class="flex gap-4 bg-ink-800 border border-white/[0.07] rounded-lg p-4">
            <div class="w-16 h-16 bg-ink-700 rounded-md overflow-hidden shrink-0">
              <img v-if="item.thumbnail_url" :src="item.thumbnail_url" :alt="item.product_name" class="w-full h-full object-cover"/>
              <div v-else class="w-full h-full flex items-center justify-center">
                <svg class="w-6 h-6 text-stone/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/>
                </svg>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-body font-500 text-cream-100 text-sm truncate">{{ item.product_name }}</p>
              <p class="font-mono text-blue-400 text-xs mt-0.5">${{ item.price.toLocaleString() }} / {{ item.unit }}</p>
              <div class="flex items-center gap-2 mt-2">
                <button @click="cart.updateQty(item.product_id, Math.max(1, item.quantity - 1))"
                  class="w-6 h-6 border border-white/10 text-stone hover:text-cream-100 hover:border-white/30 text-xs flex items-center justify-center rounded transition-colors">−</button>
                <span class="font-mono text-cream-100 text-sm w-6 text-center">{{ item.quantity }}</span>
                <button @click="cart.updateQty(item.product_id, item.quantity + 1)"
                  class="w-6 h-6 border border-white/10 text-stone hover:text-cream-100 hover:border-white/30 text-xs flex items-center justify-center rounded transition-colors">+</button>
              </div>
            </div>
              <button @click="cart.removeItem(item.product_id)" class="text-stone hover:text-blue-500 transition-colors shrink-0 mt-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <polyline points="3,6 5,6 21,6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cart.items.length > 0" class="border-t border-white/[0.07] px-6 py-5 space-y-4">
          <div class="flex items-center justify-between">
            <span class="font-body text-stone text-sm">Subtotal (excl. tax)</span>
            <span class="font-display font-700 text-cream-100 text-xl">${{ cart.subtotal.toLocaleString() }}</span>
          </div>
          <NuxtLink to="/orders/new" @click="open = false" class="btn-primary w-full">
            Request Quote
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
          <button @click="cart.clear()" class="w-full font-mono text-stone text-xs hover:text-blue-500 transition-colors text-center">Clear cart</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const open = useState('cartOpen', () => false)
const cart = useCartStore()
</script>

<style scoped>
.overlay-enter-active, .overlay-leave-active { transition: opacity 0.25s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }
.drawer-enter-active, .drawer-leave-active { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
.drawer-enter-from, .drawer-leave-to { transform: translateX(100%); }
</style>
