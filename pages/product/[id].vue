<template>
  <div>
    <div>
      <img :src="product.image" alt="" />
      <p>
        {{ product.title }}
      </p>

      <p>
        {{ product.description }}
      </p>

      <p>{{ product.price }} $</p>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });

definePageMeta({
  layout: "product",
});
</script>

<style lang="scss" scoped></style>
