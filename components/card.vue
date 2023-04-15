<script setup>
  const { data } = defineProps([
    'data'
  ])
</script>

<template>
  <div class="card__content">
    <h3 class="card__title">{{ data.title }}</h3>
    <button class="btn flex">
      <i class="material-icons mr-2">add_shopping_cart</i>
      Add to cart
    </button>
  </div>
</template>
