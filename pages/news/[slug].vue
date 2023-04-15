<script setup>
  const { slug } = useRoute().params
  const uri = `https://fakestoreapi.com/products/${slug}`
  const { data: product } = await useFetch(uri, { key: slug })

  if (!product.value) {
    throw createError({
      statusCode: 404,
      message: 'This product could not be found.',
      fatal: true
    })
  }
</script>

<template>
  <Head>
    {{ product.title }} | Itsy News
  </Head>

  <h2>{{ product.title }}</h2>

  <div class="card__image">
    <img :src="product.image" :alt="product.title" />
  </div>
  <div class="card__content">
    <h3 class="card__title">{{ product.title }}</h3>
    <p class="card__price">${{ product.price }}</p>
    <p class="card__description">{{ product.description }}</p>
  </div>
</template>
