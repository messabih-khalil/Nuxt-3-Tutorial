<template>
  <div>Products page</div>

  <div v-for="p in product">
    <nuxt-link :to="`/product/${p.id}`">{{ p.title }}</nuxt-link>
  </div>
</template>

<script setup>
const { data: product } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
