<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products" :key="product">
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "Banana Skin", price: 20 },
        { name: "Shiny Star", price: 20 },
      ],
    }
  },
}
</script>

<style></style>
