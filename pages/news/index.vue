<script setup>
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
    <h1 class="text-3xl font-bold mb-8">News Categories</h1>

    <!-- All Categories Grid -->
    <div class="space-y-16">
      <section v-for="category in categories" :key="category.slug" class="category-section">
        <div class="flex justify-between items-center mb-6 pb-2 border-b border-slate-200">
          <h2 class="text-2xl font-bold flex items-center">
            <span class="mr-2">{{ category.icon }}</span>
            {{ category.name }}
          </h2>
          <NuxtLink 
            :to="`/news/${category.slug}`" 
            class="text-red-600 hover:text-red-700 font-medium"
          >
            View More
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
        
        <div v-else class="bg-slate-100 p-6 rounded-lg text-center">
          <p class="text-slate-600">No articles available for this category yet.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.category-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
