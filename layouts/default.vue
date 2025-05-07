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
  <main class="min-h-screen bg-itsy-white relative">
    <div class="container mx-auto py-8 px-4 relative">
      <slot />
    </div>
  </main>

  <!-- Footer -->
  <Footer />
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
