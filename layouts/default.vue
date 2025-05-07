<script setup>
  const mobileMenuOpen = ref(false);
</script>

<template>
  <!-- Header -->
  <header class="bg-gradient-to-r from-itsy-blue to-itsy-blue/90 shadow-md sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <h1 class="m-0 p-0 font-bold text-itsy-white text-3xl flex items-center">
          <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity">
            <span class="text-itsy-yellow mr-1">Itsy</span><span class="bg-itsy-yellow text-itsy-black px-1 rounded">News</span>
          </NuxtLink>
        </h1>

        <!-- Main Navigation -->
        <nav class="hidden md:block">
          <ul class="flex items-center space-x-2">
            <li>
              <NuxtLink to="/" class="block px-4 py-2 rounded-md font-medium text-itsy-white hover:bg-itsy-white/10 transition-colors duration-200">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news" class="block px-4 py-2 rounded-md font-medium text-itsy-white hover:bg-itsy-white/10 transition-colors duration-200">
                News
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="block px-4 py-2 rounded-md font-medium text-itsy-white hover:bg-itsy-white/10 transition-colors duration-200">
                About
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu button -->
        <button class="md:hidden text-itsy-white focus:outline-none" @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="block w-6 h-5 relative transform transition-all duration-300">
            <span class="absolute bg-itsy-white h-0.5 w-full rounded-lg transition-all duration-300"
                  :class="mobileMenuOpen ? 'rotate-45 top-2' : 'top-0'"></span>
            <span class="absolute bg-itsy-white h-0.5 w-full rounded-lg top-2 transition-opacity duration-300"
                  :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
            <span class="absolute bg-itsy-white h-0.5 w-full rounded-lg transition-all duration-300"
                  :class="mobileMenuOpen ? '-rotate-45 top-2' : 'top-4'"></span>
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile menu with improved animation -->
    <div 
      class="md:hidden bg-itsy-blue/95 overflow-hidden transition-all duration-300 ease-in-out"
      :class="mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="container mx-auto px-4 py-2">
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" class="block py-2 text-itsy-white hover:text-itsy-yellow transition-colors" @click="mobileMenuOpen = false">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news" class="block py-2 text-itsy-white hover:text-itsy-yellow transition-colors" @click="mobileMenuOpen = false">News</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="block py-2 text-itsy-white hover:text-itsy-yellow transition-colors" @click="mobileMenuOpen = false">About</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Main content area with subtle pattern background -->
  <main class="min-h-screen bg-gradient-to-br from-itsy-white to-itsy-white/90 relative">
    <!-- Subtle pattern overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    
    <div class="container mx-auto py-8 px-4 relative">
      <slot />
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gradient-to-br from-itsy-black to-itsy-black/95 text-itsy-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About column -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-itsy-yellow flex items-center">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            About Itsy News
          </h3>
          <p class="text-itsy-white/80 text-sm leading-relaxed">
            Condensed news summaries from trusted sources without the sensationalism or clickbait. Get informed in ~1 minute reads.
          </p>
        </div>

        <!-- Categories column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-itsy-yellow flex items-center">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
            Categories
          </h3>
          <ul class="space-y-2 text-itsy-white/70 text-sm">
            <li><NuxtLink to="/news/politics" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">🏛️</span> Politics</NuxtLink></li>
            <li><NuxtLink to="/news/business" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">💼</span> Business</NuxtLink></li>
            <li><NuxtLink to="/news/technology" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">💻</span> Technology</NuxtLink></li>
            <li><NuxtLink to="/news/entertainment" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">🎬</span> Entertainment</NuxtLink></li>
            <li><NuxtLink to="/news/science" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">🔬</span> Science</NuxtLink></li>
          </ul>
        </div>

        <!-- Quick links column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-itsy-yellow flex items-center">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </span>
            Quick Links
          </h3>
          <ul class="space-y-2 text-itsy-white/70 text-sm">
            <li><NuxtLink to="/" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">→</span> Home</NuxtLink></li>
            <li><NuxtLink to="/news" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">→</span> All News</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">→</span> About Us</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">→</span> Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-itsy-yellow transition-colors flex items-center"><span class="mr-1">→</span> Terms of Service</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-itsy-yellow flex items-center">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </span>
            Connect
          </h3>
          <div class="flex space-x-4">
            <a href="#" class="bg-itsy-black/50 hover:bg-itsy-yellow hover:text-itsy-black p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="bg-itsy-black/50 hover:bg-itsy-yellow hover:text-itsy-black p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </a>
            <a href="#" class="bg-itsy-black/50 hover:bg-itsy-yellow hover:text-itsy-black p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="mt-10 pt-6 border-t border-itsy-white/10 text-center">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-itsy-white/50 text-sm">
            &copy; {{ new Date().getFullYear() }} Itsy News. All rights reserved.
          </p>
          <p class="text-itsy-white/50 text-sm mt-2 md:mt-0">
            <span class="text-itsy-yellow">Itsy News</span> - Get informed, not overwhelmed
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
  header {
    a {
      transition: all 0.2s ease-in-out;

      &.router-link-exact-active {
        color: theme("colors.itsy-orange");
        background-color: theme("colors.itsy-white/10");
        font-weight: 600;
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

  /* Add some depth to the header on scroll */
  @media (min-width: 768px) {
    header {
      transition: all 0.3s ease;
    }

    header.scrolled {
      @apply shadow-lg;
      backdrop-filter: blur(5px);
    }
  }
</style>
