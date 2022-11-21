<template>
  <div>
    <nav class="bg-black text-white p-4 flex justify-between items-center">
      <div class="logo">
        <p>Logo</p>
      </div>

      <ul class="flex align-middle">
        <li class="mr-2">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/product">Product</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="container mx-auto pt-4">
        <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  padding: 0.5rem;
}
</style>
