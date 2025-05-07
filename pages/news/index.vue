<script setup>
  import NewsletterForm from "~/components/newsletter-form.vue";

  //const { data: articles } = await useFetch('https://news.clowerweb.com/');
  const articles = [];

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
    if (!articles.value) return [];
    // In a real implementation, filter articles by category
    // For demo purposes, just take a slice of the array
    const startIndex = categories.findIndex(cat => cat.slug === categorySlug) * 3 % (posts.value.length || 1);
    return articles.value.slice(startIndex, startIndex + 3);
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
    <!-- Hero Section -->
    <Hero
      :heading="'<span class=\'text-itsy-yellow\'>News</span> Categories'"
      :text="'Browse all our condensed news stories by category'"
    />

    <!-- Category Navigation Pills -->
    <div class="mb-12 overflow-x-auto category-nav-container">
      <div class="flex space-x-3 min-w-max p-1">
        <NuxtLink
          v-for="category in categories"
          :key="category.slug"
          :to="`/news/${category.slug}`"
          class="px-4 py-2 bg-white border border-itsy-black/5 rounded-full inline-flex items-center hover:bg-itsy-teal/10 hover:border-itsy-teal/30 transition-all duration-200 shadow-sm hover:shadow"
        >
          <span class="mr-2 text-xl">{{ category.icon }}</span>
          <span class="font-medium">{{ category.name }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- All Categories Grid -->
    <div class="space-y-16">
      <section v-for="category in categories" :key="category.slug" class="category-section">
        <div class="flex justify-between items-center mb-6 pb-2 border-b border-itsy-black/10">
          <h2 class="text-2xl font-bold flex items-center">
            <span class="bg-gradient-to-r from-itsy-blue to-itsy-teal w-2 h-6 inline-block mr-3 rounded-sm"></span>
            <span class="mr-2 bg-itsy-blue/10 text-itsy-blue p-1 rounded">{{ category.icon }}</span>
            {{ category.name }}
          </h2>
          <NuxtLink
            :to="`/news/${category.slug}`"
            class="text-itsy-red hover:text-itsy-red/80 font-medium transition-colors flex items-center group"
          >
            View More
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        
        <div v-else class="bg-itsy-white p-8 rounded-lg text-center shadow-sm border border-itsy-black/5">
          <p class="text-itsy-black/70">No articles available for this category yet.</p>
        </div>
      </section>
    </div>

    <!-- Newsletter form -->
    <section class="bg-gradient-to-r from-itsy-teal/10 to-itsy-blue/10 rounded-xl p-8 my-12">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-3 text-itsy-black">Stay Updated with Itsy News</h2>
        <p class="text-itsy-black/70 mb-6">Get the latest condensed news delivered straight to your inbox</p>
        
        <NewsletterForm />
        
        <p class="text-xs text-itsy-black/50 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.category-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Smooth transitions */
.category-section {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(15px);
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

/* Category navigation */
.category-nav-container {
  border-radius: 9999px;
  background: linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.8));
  padding: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
</style>
