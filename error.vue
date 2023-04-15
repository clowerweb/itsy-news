<script setup>
  defineProps(['error'])

  const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <Head>
    <Title>{{ error.statusCode }} | Itsy News</Title>
  </Head>

  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>Whoops!</p>
    <p>{{ error.message }}</p>
    <button class="btn" @click="handleClearError">Go home, you're drunk...</button>
  </div>
</template>
