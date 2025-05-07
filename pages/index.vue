<script setup>
  // Fetch articles from API (this would be replaced with your actual API endpoint)
  import NewsletterForm from "~/components/newsletter-form.vue";

  //const { data: articles } = await useFetch('https://news.clowerweb.com/');
  const articles = [];

  // For demonstration, split articles into featured and regular
  const featuredArticles = computed(() => {
    if (!articles.value) return [];
    return articles.value.slice(0, 3);
  });

  const latestArticles = computed(() => {
    if (!articles.value) return [];
    return articles.value.slice(3);
  });

  // Define categories with icons
  const categories = [
    { name: 'Politics', slug: 'politics', icon: 'account_balance' },
    { name: 'Business', slug: 'business', icon: 'business_center' },
    { name: 'Technology', slug: 'technology', icon: 'computer' },
    { name: 'Entertainment', slug: 'entertainment', icon: 'movie' },
    { name: 'Health', slug: 'health', icon: 'local_hospital' },
    { name: 'Science', slug: 'science', icon: 'science' },
  ];

  // Set page metadata
  useHead({
    title: 'Itsy News - Concise news summaries without the clickbait',
    meta: [
      { name: 'description', content: 'Itsy News provides condensed news articles from popular sources for quick reading without sensationalism or clickbait.' }
    ]
  });
</script>

<template>
  <!-- Hero Section -->
  <Hero
    :heading="'<span class=\'text-itsy-yellow\'>Quick</span> news. <span class=\'text-itsy-yellow\'>No fluff</span>.'"
    :text="'Stay informed with quick ~1-minute reads'"
    :cta="{ link: '/news', text: 'Browse All News' }"
  />

  <section class="mb-12">
    <!-- Featured Articles Section -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-itsy-black/10 flex items-center">
        <span class="bg-itsy-blue w-2 h-6 inline-block mr-3 rounded-sm"></span>
        Featured Stories
      </h2>

      <div v-if="featuredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- First featured article (larger) -->
        <div class="md:col-span-2" v-if="featuredArticles[0]">
          <Card :post="featuredArticles[0]" :featured="true" />
        </div>

        <!-- Other featured articles -->
        <div class="flex flex-col gap-6">
          <Card
            v-for="(article, index) in featuredArticles.slice(1, 3)"
            :key="index"
            :post="article"
          />
        </div>
      </div>

      <div v-else class="bg-itsy-white p-8 rounded-lg text-center shadow-sm border border-itsy-black/5">
        <p class="text-neutral-600">Featured stories coming soon!</p>
      </div>
    </div>
  </section>
  
  <!-- Latest News Section -->
  <section class="mb-12">
    <div class="flex justify-between items-center mb-6 pb-2 border-b border-itsy-black/10">
      <h2 class="text-2xl font-bold flex items-center">
        <span class="bg-itsy-red w-2 h-6 inline-block mr-3 rounded-sm"></span>
        Latest News
      </h2>
      <NuxtLink to="/news" class="text-itsy-red hover:text-itsy-red/80 font-medium transition-colors flex items-center group">
        View All
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
    
    <div v-if="latestArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        v-for="(article, index) in latestArticles.slice(0, 8)"
        :key="index"
        :post="article" />
    </div>
    
    <div v-else class="bg-itsy-white p-8 rounded-lg text-center shadow-sm border border-itsy-black/5">
      <p class="text-neutral-600">Latest news coming soon!</p>
    </div>
  </section>
  
  <!-- Categories Section -->
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-itsy-black/10 flex items-center">
      <span class="bg-itsy-yellow w-2 h-6 inline-block mr-3 rounded-sm"></span>
      News Categories
    </h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <NuxtLink 
        v-for="category in categories" 
        :key="category.slug"
        :to="`/news/${category.slug}`"
        class="group bg-white border border-itsy-black/5 shadow-sm hover:shadow-md rounded-lg p-6 text-center transition-all duration-300 flex flex-col items-center justify-center"
      >
        <div class="category-icon bg-gradient-to-br from-itsy-teal/20 to-itsy-blue/20 text-itsy-blue p-3 rounded-full mb-3 text-2xl transition-all duration-300 group-hover:bg-itsy-blue group-hover:text-itsy-white w-12 h-12 flex items-center justify-center">
          <span class="material-icons">{{ category.icon }}</span>
        </div>

        <h3 class="font-bold text-lg text-itsy-black">{{ category.name }}</h3>
      </NuxtLink>
    </div>
  </section>

  <!-- Newsletter form -->
  <NewsletterForm />
</template>

<style scoped>
/* Category transition effects */
.category-icon {
  transition: all 0.3s ease;
}

/* Hero section responsive adjustments */
@media (min-width: 768px) {
  .hero-section {
    min-height: 320px;
  }
}

/* Staggered animation for cards */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-animation {
  animation: fadeInUp 0.6s ease forwards;
}
</style>
