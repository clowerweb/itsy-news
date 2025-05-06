<script setup>
const props = defineProps({});
</script>

<template>
  <!-- Newsletter Signup -->
  <section class="my-16">
    <div class="bg-gradient-to-r from-itsy-red to-itsy-red/90 rounded-xl p-8 text-itsy-white relative overflow-hidden">
      <div class="md:max-w-2/3 relative z-10">
        <h2 class="text-2xl font-bold mb-4">Stay Updated with Itsy News</h2>
        <p class="mb-6">Get the latest news summaries delivered straight to your inbox.</p>
        <div class="flex flex-col md:flex-row gap-3">
          <input type="email" placeholder="Your email address" class="px-4 py-3 rounded-md flex-grow text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <button class="bg-itsy-blue hover:bg-itsy-blue/90 px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
        <p class="text-xs mt-3 text-amber-100">We respect your privacy. Unsubscribe at any time.</p>
      </div>
      <!-- Abstract pattern overlay -->
      <div class="absolute right-0 top-0 w-full h-full opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full">
          <path fill="#ffffff" d="M100,0 L0,0 C20,30 10,50 0,100 L100,100 Z" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>