<template>
  <header class="px-4 bg-gray-800 shadow-sm">
    <div class="container mx-auto flex items-center max-w-full px-4">
      <h1 class="m-0 p-0 font-bold text-white text-3xl">
        <NuxtLink to="/">Itsy News</NuxtLink>
      </h1>

      <nav class="flex-1 ml-8">
        <ul>
          <li class="inline-block">
            <NuxtLink to="/about" class="block px-3 py-4 font-bold text-white">
              About
            </NuxtLink>
          </li>
          <li class="inline-block">
            <NuxtLink to="/news" class="block px-3 py-4 font-bold text-white">
              News
            </NuxtLink>
          </li>
          <li class="inline-block">
            <NuxtLink to="/news/test" class="block px-3 py-4 font-bold text-white">
              Test
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <slot />
  </main>

  <footer class="container mx-auto p-4 border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/news">News</NuxtLink></li>
    </ul>
  </footer>
</template>

<style scoped lang="postcss">
  header {
    a {
      transition: color 0.3s ease-in-out;

      &.router-link-exact-active {
        color: theme("colors.red.600");
        position: relative;

        &:after {
          background: theme("colors.red.600");
          bottom: 0;
          content: "";
          height: 4px;
          left: 0;
          position: absolute;
          right: 0;
        }
      }

      &:active,
      &:focus,
      &:hover {
        color: theme("colors.red.600");
      }
    }
  }
</style>
