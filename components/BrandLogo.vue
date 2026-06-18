<template>
  <div class="flex items-center gap-3 shrink-0">
    <img
      :src="logoSrc"
      alt="HRY Printing"
      class="object-contain shrink-0 w-auto"
      :class="imgClass"
      width="120"
      height="80"
    />
    <div class="leading-none">
      <div
        class="font-mono text-mist uppercase leading-none"
        :class="subtitleClass"
      >
        Printing
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoSrc from '~/assets/image/logo.png'

const props = withDefaults(
  defineProps<{ variant?: 'header' | 'footer' | 'auth' }>(),
  { variant: 'header' },
)

const imgClass = computed(() =>
  props.variant === 'auth' ? 'h-10 sm:h-11' : 'h-9',
)

const subtitleClass = computed(() =>
  props.variant === 'auth'
    ? 'text-[9px] tracking-widest mt-0.5'
    : 'text-[9px] tracking-[0.3em] mt-0.5',
)
</script>
