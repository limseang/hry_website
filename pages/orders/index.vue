<template>
  <div class="py-12 lg:py-20">
    <div class="hry-container max-w-4xl">

      <div class="lbl mb-5">Account</div>
      <h1 class="font-display font-900 uppercase text-cream-100
                 text-[clamp(2.5rem,6vw,5rem)] leading-none mb-12">
        MY ORDERS
      </h1>

      <!-- Auth guard -->
      <div v-if="!auth.isLoggedIn" class="text-center py-20">
        <div class="font-display font-900 text-6xl text-ink-700 mb-6 select-none uppercase">Access Denied</div>
        <p class="font-body text-mist mb-8">Please sign in to view your orders.</p>
        <NuxtLink to="/auth/login" class="btn-primary">Sign In</NuxtLink>
      </div>

      <template v-else>
        <!-- Loading -->
        <div v-if="loading" class="space-y-4">
          <div v-for="i in 3" :key="i" class="skel h-28 rounded-2xl"/>
        </div>

        <!-- Empty -->
        <div v-else-if="!orders.length" class="text-center py-20">
          <div class="w-20 h-20 rounded-full bg-ink-800 flex items-center justify-center mx-auto mb-6">
            <svg class="w-9 h-9 text-mist" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <div class="font-display font-900 text-3xl uppercase text-cream-100 mb-3">No orders yet</div>
          <p class="font-body text-mist mb-8">Your orders will appear here after you place them.</p>
          <NuxtLink to="/products" class="btn-primary">Browse Products</NuxtLink>
        </div>

        <!-- Orders list -->
        <div v-else class="space-y-4">
          <div v-for="o in orders" :key="o.id"
            class="card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 flex-wrap mb-2">
                <span class="font-mono font-500 text-sm text-cream-100">{{ o.order_number }}</span>
                <span :class="statusClass(o.status)" class="badge text-[10px] uppercase tracking-wider">
                  {{ o.status.replace(/_/g,' ') }}
                </span>
              </div>
              <div class="font-body text-mist text-sm mb-1">
                {{ o.items?.length || 0 }} item{{ o.items?.length !== 1 ? 's' : '' }}
                <span v-if="o.customer_name"> · {{ o.customer_name }}</span>
              </div>
              <div class="font-mono text-xs text-mist/60">
                {{ new Date(o.created_at).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }) }}
              </div>
            </div>

            <div class="text-right shrink-0">
              <div class="font-display font-900 text-2xl text-cream-100">
                ${{ Number(o.total).toLocaleString() }}
              </div>
              <div class="font-mono text-[10px] text-mist uppercase tracking-widest mt-0.5">Total</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'My Orders — HRY Printing' })

const api    = useApi()
const auth   = useAuthStore()
const orders = ref<any[]>([])
const loading = ref(true)

const statusClass = (s: string) => ({
  pending:       'badge bg-yellow-500/15 text-yellow-400 border border-yellow-500/30',
  confirmed:     'badge bg-blue-500/15 text-blue-400 border border-blue-500/30',
  in_production: 'badge bg-purple-500/15 text-purple-400 border border-purple-500/30',
  quality_check: 'badge bg-indigo-500/15 text-indigo-400 border border-indigo-500/30',
  ready:         'badge bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
  shipped:       'badge bg-orange-500/15 text-orange-400 border border-orange-500/30',
  delivered:     'badge bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  cancelled:     'badge bg-red-500/15 text-red-400 border border-red-500/30',
  refunded:      'badge bg-gray-500/15 text-gray-400 border border-gray-500/30',
})[s] || 'badge-mist'

onMounted(async () => {
  if (!auth.isLoggedIn) { loading.value = false; return }
  try {
    const r = await api.getMyOrders()
    orders.value = r?.data?.data ?? []
  } catch { orders.value = [] }
  finally { loading.value = false }
})
</script>
