<script setup>
  import NewsletterForm from "~/components/newsletter-form.vue";

  const { data: posts } = await useFetch('https://news.clowerweb.com/');

  // Define categories with sample articles
  const categories = [
    { name: 'Politics', slug: 'politics', icon: '🏛️' },
    { name: 'Business', slug: 'business', icon: '💼' },
    { name: 'Technology', slug: 'technology', icon: '💻' },
    { name: 'Entertainment', slug: 'entertainment', icon: '🎬' },
    { name: 'Health', slug: 'health', icon: '🏥' },
    { name: 'Science', slug: 'science', icon: '🔬' },
    { name: 'Sports', slug: 'sports', icon: '⚽' },
    { name: 'World', slug: 'world', icon: '🌎' }
  ];

  // For demonstration, assign articles to categories randomly
  // In a real implementation, this would come from your backend with proper categorization
  const getCategoryArticles = (categorySlug) => {
    if (!posts.value) return [];
    // In a real implementation, filter articles by category
    // For demo purposes, just take a slice of the array
    const startIndex = categories.findIndex(cat => cat.slug === categorySlug) * 3 % (posts.value.length || 1);
    return posts.value.slice(startIndex, startIndex + 3);
  };

  useHead({
    title: 'News | Itsy News',
    meta: [
      { hid: 'description', name: 'description', content: 'Browse all news categories on Itsy News' },
      { hid: 'og:title', property: 'og:title', content: 'News | Itsy News' },
      { hid: 'og:description', property: 'og:description', content: 'Browse all news categories on Itsy News' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'News | Itsy News' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Browse all news categories on Itsy News' },
      { hid: 'twitter:image', name: 'twitter:image', content: '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    ]
  })
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="bg-gradient-to-r from-itsy-blue to-itsy-blue/80 rounded-xl p-6 md:p-8 mb-12 text-itsy-white relative overflow-hidden">
      <div class="relative z-10">
        <h1 class="text-3xl font-bold mb-3">News Categories</h1>
        <p class="text-itsy-white/90 text-lg">Browse all our condensed news stories by category</p>
      </div>
      <!-- Abstract pattern overlay -->
      <div class="absolute right-0 top-0 w-full h-full opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full">
          <path fill="#ffffff" d="M0,0 L100,0 C80,20 90,50 100,100 L0,100 Z" />
        </svg>
      </div>
    </div>

    <!-- Category Navigation Pills -->
    <div class="mb-8 overflow-x-auto pb-2">
      <div class="flex space-x-2 min-w-max">
        <NuxtLink
          v-for="category in categories"
          :key="category.slug"
          :to="`/news/${category.slug}`"
          class="px-4 py-2 bg-itsy-white border border-itsy-black/10 rounded-full inline-flex items-center hover:bg-itsy-teal/20 hover:border-itsy-teal/20 transition-colors"
        >
          <span class="mr-2">{{ category.icon }}</span>
          <span>{{ category.name }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- All Categories Grid -->
    <div class="space-y-16">
      <section v-for="category in categories" :key="category.slug" class="category-section">
        <div class="flex justify-between items-center mb-6 pb-2 border-b border-neutral-200">
          <h2 class="text-2xl font-bold flex items-center">
            <span class="bg-itsy-blue w-2 h-6 inline-block mr-3 rounded-sm"></span>
            <span class="mr-2">{{ category.icon }}</span>
            {{ category.name }}
          </h2>
          <NuxtLink
            :to="`/news/${category.slug}`"
            class="text-itsy-red hover:text-itsy-red/80 font-medium transition-colors flex items-center"
          >
            View More
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <div v-if="getCategoryArticles(category.slug).length" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- First article (larger on desktop) -->
          <div class="md:col-span-2">
            <Card 
              v-if="getCategoryArticles(category.slug)[0]" 
              :post="{...getCategoryArticles(category.slug)[0], category: category.name}" 
              :featured="true" 
            />
          </div>
          
          <!-- Second article -->
          <div>
            <Card 
              v-if="getCategoryArticles(category.slug)[1]" 
              :post="{...getCategoryArticles(category.slug)[1], category: category.name}" 
            />
          </div>
        </div>
        
        <div v-else class="bg-itsy-white p-6 rounded-lg text-center">
          <p class="text-neutral-600">No articles available for this category yet.</p>
        </div>
      </section>
    </div>

    <newsletter-form />
  </div>
</template>

<style scoped>
.category-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Smooth transitions */
.category-section {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(10px);
}

.category-section:nth-child(1) { animation-delay: 0.1s; }
.category-section:nth-child(2) { animation-delay: 0.2s; }
.category-section:nth-child(3) { animation-delay: 0.3s; }
.category-section:nth-child(4) { animation-delay: 0.4s; }
.category-section:nth-child(5) { animation-delay: 0.5s; }
.category-section:nth-child(6) { animation-delay: 0.6s; }
.category-section:nth-child(7) { animation-delay: 0.7s; }
.category-section:nth-child(8) { animation-delay: 0.8s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
