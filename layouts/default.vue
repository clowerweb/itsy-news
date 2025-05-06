<template>
  <!-- Header with improved design -->
  <header class="bg-itsy-blue shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <h1 class="m-0 p-0 font-bold text-itsy-white text-3xl flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-itsy-yellow mr-1">Itsy</span>News
          </NuxtLink>
        </h1>

        <!-- Main Navigation -->
        <nav class="hidden md:block">
          <ul class="flex items-center space-x-1">
            <li>
              <NuxtLink to="/" class="block px-4 py-2 rounded-md font-medium text-itsy-white hover:bg-itsy-blue/80 transition-colors duration-200">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news" class="block px-4 py-2 rounded-md font-medium text-itsy-white hover:bg-itsy-blue/80 transition-colors duration-200">
                News
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="block px-4 py-2 rounded-md font-medium text-itsy-white hover:bg-itsy-blue/80 transition-colors duration-200">
                About
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu button -->
        <button class="md:hidden text-itsy-white focus:outline-none" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-itsy-blue/90">
      <div class="container mx-auto px-4 py-2">
        <ul>
          <li>
            <NuxtLink to="/" class="block py-2 px-4 text-itsy-white" @click="mobileMenuOpen = false">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news" class="block py-2 px-4 text-itsy-white" @click="mobileMenuOpen = false">News</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="block py-2 px-4 text-itsy-white" @click="mobileMenuOpen = false">About</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Main content area with subtle pattern background -->
  <main class="min-h-screen bg-itsy-white relative">
    <!-- Subtle pattern overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    
    <div class="container mx-auto py-8 px-4 relative">
      <slot />
    </div>
  </main>

  <!-- Enhanced footer with more information and links -->
  <footer class="bg-itsy-black text-itsy-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About column -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-itsy-yellow">Itsy News</h3>
          <p class="text-itsy-white/90 text-sm leading-relaxed">
            Condensed news summaries from trusted sources without the sensationalism or clickbait. Get informed in ~1 minute reads.
          </p>
        </div>

        <!-- Categories column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-itsy-yellow">Categories</h3>
          <ul class="space-y-2 text-itsy-white/80 text-sm">
            <li><NuxtLink to="/news/politics" class="hover:text-itsy-yellow transition-colors">Politics</NuxtLink></li>
            <li><NuxtLink to="/news/business" class="hover:text-itsy-yellow transition-colors">Business</NuxtLink></li>
            <li><NuxtLink to="/news/technology" class="hover:text-itsy-yellow transition-colors">Technology</NuxtLink></li>
            <li><NuxtLink to="/news/entertainment" class="hover:text-itsy-yellow transition-colors">Entertainment</NuxtLink></li>
            <li><NuxtLink to="/news/science" class="hover:text-itsy-yellow transition-colors">Science</NuxtLink></li>
          </ul>
        </div>

        <!-- Quick links column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-itsy-yellow">Quick Links</h3>
          <ul class="space-y-2 text-itsy-white/80 text-sm">
            <li><NuxtLink to="/" class="hover:text-itsy-yellow transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/news" class="hover:text-itsy-yellow transition-colors">All News</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-itsy-yellow transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-itsy-yellow transition-colors">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-itsy-yellow transition-colors">Terms of Service</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-itsy-yellow">Connect</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-itsy-white/80 hover:text-itsy-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-itsy-white/80 hover:text-itsy-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </a>
            <a href="#" class="text-itsy-white/80 hover:text-itsy-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="mt-8 pt-6 border-t border-itsy-black/20 text-center text-itsy-teal/70 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Itsy News. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style scoped lang="postcss">
header {
  a {
    transition: all 0.2s ease-in-out;

    &.router-link-exact-active {
      color: theme("colors.itsy-yellow");
      background-color: theme("colors.itsy-blue/80");
    }
  }
}

/* Typography styles */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
}

/* Basic button styles */
.btn {
  @apply py-2 px-4 bg-itsy-yellow text-itsy-black font-medium rounded-md shadow-sm hover:bg-itsy-yellow/90 transition-colors duration-300;
}

/* Background pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, theme("colors.itsy-blue/5") 1px, transparent 1px),
    linear-gradient(to bottom, theme("colors.itsy-blue/5") 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Content transitions */
main {
  .container {
    animation: fadeIn 0.4s ease-in-out;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
