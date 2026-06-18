<template>
  <Teleport to="body">
    <div class="fixed bottom-6 right-6 z-[70] flex flex-col gap-2 pointer-events-none">
      <TransitionGroup name="toast">
        <div v-for="t in toast.toasts" :key="t.id"
          class="flex items-center gap-3 px-5 py-3.5 rounded-lg shadow-2xl pointer-events-auto
                 border backdrop-blur-md max-w-sm w-full font-body text-sm"
          :class="{
            'bg-green-900/90 border-green-500/30 text-green-300':  t.type === 'success',
            'bg-red-900/90  border-red-500/30  text-red-300':    t.type === 'error',
            'bg-ink-800/95  border-white/10    text-cream-100':  t.type === 'info',
          }"
        >
          <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path v-if="t.type==='success'" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            <path v-else-if="t.type==='error'" stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="flex-1">{{ t.message }}</span>
          <button @click="toast.remove(t.id)" class="opacity-50 hover:opacity-100 transition-opacity">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const toast = useToast()
</script>

<style scoped>
.toast-enter-active { transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
.toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from   { opacity: 0; transform: translateX(40px); }
.toast-leave-to     { opacity: 0; transform: translateX(40px); }
</style>
