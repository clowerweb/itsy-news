<script setup>
  const { data: products } = await useFetch('https://fakestoreapi.com/products');

  useHead({
    title: 'News | Itsy News',
    meta: [
      { hid: 'description', name: 'description', content: 'News' },
      { hid: 'og:title', property: 'og:title', content: 'News' },
      { hid: 'og:description', property: 'og:description', content: 'News' },
      { hid: 'og:image', property: 'og:image', content: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
      { hid: 'og:url', property: 'og:url', content: 'https://fakestoreapi.com/products/1' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'News' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'News' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    ]
  })
</script>

<template>
  <h2>News index</h2>

  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
      <Card :product="p" />
    </div>
  </div>
</template>
