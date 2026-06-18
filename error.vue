<template>
  <div class="min-h-screen bg-ink-950 flex items-center justify-center px-5">
    <div class="text-center max-w-lg">
      <div class="font-display font-900 leading-none select-none mb-6
                  text-[clamp(7rem,22vw,15rem)] text-ink-800">
        {{ error?.statusCode || 404 }}
      </div>
      <h1 class="font-display font-900 text-4xl uppercase text-cream-100 mb-4">
        {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
      </h1>
      <p class="font-body text-mist leading-relaxed mb-10">
        {{ error?.statusCode === 404
          ? "The page you're looking for doesn't exist or has been moved."
          : 'An unexpected error occurred. Please try again or contact us if the problem persists.' }}
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Go Home
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-outline">Contact Us</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ error: any }>()
useHead({ title: `${props.error?.statusCode || 'Error'} — HRY Printing` })
</script>
