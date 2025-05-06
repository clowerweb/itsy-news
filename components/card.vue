<template>
  <div :class="['news-card bg-itsy-white rounded-lg shadow-sm h-full transition-all duration-300 hover:shadow-md border border-itsy-black/5',
               {'md:flex': featured}]">
    <!-- Article Image with gradient overlay -->
    <div :class="['news-card__image-container relative overflow-hidden',
                 featured ? 'md:w-2/5 h-auto' : 'aspect-video']">
      <img
          :src="post.image || 'https://placehold.co/600x400/e2e8f0/475569?text=Itsy+News'"
          :alt="post.title"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-itsy-black/50 to-transparent opacity-70"></div>
      <!-- Category Badge -->
      <div class="absolute top-3 left-3 bg-itsy-yellow text-itsy-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
        {{ post.category || 'News' }}
      </div>
      <!-- Source Badge - repositioned to image -->
      <div class="absolute bottom-3 left-3 bg-itsy-black/70 text-itsy-white text-xs px-2 py-1 rounded-full">
        {{ post.source || 'Itsy News' }}
      </div>
    </div>

    <!-- Article Content -->
    <div :class="['news-card__content p-5', featured ? 'md:w-3/5' : '']">
      <!-- Time -->
      <div class="flex justify-end items-center mb-2 text-xs text-itsy-black/60">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ post.date ? getTimeAgo(post.date) : '1h ago' }}
        </span>
      </div>

      <!-- Title -->
      <h3 :class="['news-card__title font-bold leading-tight mb-3 text-itsy-black transition-colors duration-300 group-hover:text-itsy-blue',
                  featured ? 'text-xl md:text-2xl' : 'text-lg']">
        {{ post.title }}
      </h3>

      <!-- Summary -->
      <p class="news-card__summary text-itsy-black/80 text-sm mb-3 line-clamp-3 leading-relaxed">
        {{ post.summary || post.description || 'No summary available for this article.' }}
      </p>

      <!-- Footer -->
      <div class="flex justify-between items-center mt-auto pt-3 text-xs border-t border-itsy-black/5">
        <span class="bg-itsy-teal/10 text-itsy-blue px-3 py-1 rounded-full font-medium">
          {{ post.readTime || '~1 min read' }}
        </span>
        <NuxtLink
            :to="post.url || '/news/' + (post.slug || 'article')"
            class="read-more-link font-medium text-itsy-red hover:text-itsy-red/80 transition-colors flex items-center"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

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

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.read-more-link svg {
  transition: transform 0.2s ease;
}

.read-more-link:hover svg {
  transform: translateX(3px);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card__image-container img {
  transition: transform 0.5s ease;
}

.news-card:hover .news-card__image-container img {
  transform: scale(1.05);
}
</style>