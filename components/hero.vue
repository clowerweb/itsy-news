<script setup>
  const props = defineProps({
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    cta: {
      type: Object,
      required: false,
      default: () => ({
        text: null,
        link: null
      })
    },
  });
</script>

<template>
  <div class="bg-gradient-to-r from-itsy-blue via-itsy-blue/90 to-itsy-blue/80 rounded-xl overflow-hidden p-8 md:p-10 mb-12 text-itsy-white relative shadow-lg">
    <div class="hero-content md:max-w-lg relative z-10">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 text-itsy-white leading-tight" v-html="props.heading"></h1>
      <p v-if="props.text" class="text-itsy-white/90 text-lg mb-6 leading-relaxed">
        {{ props.text }}
      </p>
      <NuxtLink
        v-if="props.cta.link && props.cta.text"
        :to="props.cta.link"
        class="inline-flex items-center bg-itsy-yellow hover:bg-itsy-yellow/90 text-itsy-black font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
      >
        {{ props.cta.text }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Abstract pattern overlay -->
    <div class="absolute right-0 top-0 w-full h-full opacity-10 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full">
        <path fill="#ffffff" d="M0,0 L100,0 C80,20 90,50 100,100 L0,100 Z" />
      </svg>
    </div>
  </div>
</template>