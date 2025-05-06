<script setup>
  const props = defineProps({
    post: {
      type: Object,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  });

  // Calculate "time ago" for publication date
  const getTimeAgo = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };
</script>

<template>
  <div :class="['news-card overflow-hidden bg-white rounded-lg shadow-md h-full transition-transform hover:shadow-lg hover:-translate-y-1', 
               {'md:flex': featured}]">
    <!-- Article Image -->
    <div :class="['news-card__image-container relative overflow-hidden', 
                 featured ? 'md:w-2/5' : 'aspect-video']">
      <img 
        :src="post.image || 'https://placehold.co/600x400/e2e8f0/475569?text=Itsy+News'" 
        :alt="post.title"
        class="w-full h-full object-cover"
      />
      <!-- Category Badge -->
      <div class="absolute top-3 left-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
        {{ post.category || 'News' }}
      </div>
    </div>
    
    <!-- Article Content -->
    <div :class="['news-card__content p-4', featured ? 'md:w-3/5' : '']">
      <!-- Source and Time -->
      <div class="flex justify-between items-center mb-2 text-xs text-gray-500">
        <span class="font-medium">{{ post.source || 'Itsy News' }}</span>
        <span>{{ post.date ? getTimeAgo(post.date) : '1h ago' }}</span>
      </div>
      
      <!-- Title -->
      <h3 :class="['news-card__title font-bold leading-tight mb-2', 
                  featured ? 'text-xl' : 'text-lg']">
        {{ post.title }}
      </h3>
      
      <!-- Summary -->
      <p class="news-card__summary text-gray-600 text-sm mb-3 line-clamp-2">
        {{ post.summary || post.description || 'No summary available for this article.' }}
      </p>
      
      <!-- Footer -->
      <div class="flex justify-between items-center mt-auto pt-2 text-xs">
        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded">
          {{ post.readTime || '~1 min read' }}
        </span>
        <NuxtLink 
          :to="post.url || '/news/' + (post.slug || 'article')" 
          class="font-medium text-red-600 hover:text-red-800"
        >
          Read More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
