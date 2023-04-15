<script setup>
  const { product } = defineProps([
    'product'
  ])
</script>

<template>
    <NuxtLink :to="`/news/${product.id}`">
      <div class="card__image">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="card__content">
        <h3 class="card__title">{{ product.title }}</h3>
        <p class="card__price">${{ product.price }}</p>
        <p class="card__description">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          Add to cart
        </button>
      </div>
    </NuxtLink>
</template>
