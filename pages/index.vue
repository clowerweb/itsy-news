<template>
  <!-- Hero Section with Featured Articles -->
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-slate-200">Featured Stories</h2>
    
    <div v-if="featuredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- First featured article (larger) -->
      <div class="md:col-span-2" v-if="featuredArticles[0]">
        <Card :post="featuredArticles[0]" :featured="true" />
      </div>
      
      <!-- Other featured articles -->
      <div class="flex flex-col gap-6">
        <Card v-for="(article, index) in featuredArticles.slice(1, 3)" 
              :key="index" 
              :post="article" />
      </div>
    </div>
    
    <div v-else class="bg-slate-100 p-8 rounded-lg text-center">
      <p class="text-slate-600">Featured stories coming soon!</p>
    </div>
  </section>
  
  <!-- Latest News Section -->
  <section class="mb-12">
    <div class="flex justify-between items-center mb-6 pb-2 border-b border-slate-200">
      <h2 class="text-2xl font-bold">Latest News</h2>
      <NuxtLink to="/news" class="text-red-600 hover:text-red-700 font-medium">View All</NuxtLink>
    </div>
    
    <div v-if="latestArticles.length > 0" class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card v-for="(article, index) in latestArticles.slice(0, 8)" 
            :key="index" 
            :post="article" />
    </div>
    
    <div v-else class="bg-slate-100 p-8 rounded-lg text-center">
      <p class="text-slate-600">Latest news coming soon!</p>
    </div>
  </section>
  
  <!-- Categories Section -->
  <section>
    <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-slate-200">News Categories</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <NuxtLink 
        v-for="category in categories" 
        :key="category.slug"
        :to="`/news/${category.slug}`"
        class="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <h3 class="font-bold text-lg text-slate-800">{{ category.name }}</h3>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
  // Fetch articles from API (this would be replaced with your actual API endpoint)
  const { data: articles } = await useFetch('https://news.clowerweb.com/');

  // For demonstration, split articles into featured and regular
  const featuredArticles = computed(() => {
    if (!articles.value) return [];
    return articles.value.slice(0, 3);
  });

  const latestArticles = computed(() => {
    if (!articles.value) return [];
    return articles.value.slice(3);
  });

  // Define categories with sample articles
  const categories = [
    { name: 'Politics', slug: 'politics' },
    { name: 'Business', slug: 'business' },
    { name: 'Technology', slug: 'technology' },
    { name: 'Entertainment', slug: 'entertainment' },
    { name: 'Health', slug: 'health' },
    { name: 'Science', slug: 'science' },
  ];

  // Set page metadata
  useHead({
    title: 'Itsy News - Concise news summaries without the clickbait',
    meta: [
      { name: 'description', content: 'Itsy News provides condensed news articles from popular sources for quick reading without sensationalism or clickbait.' }
    ]
  });
</script>
