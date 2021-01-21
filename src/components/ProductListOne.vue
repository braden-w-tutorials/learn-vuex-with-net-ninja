<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products" :key="product">
        <span class="name">{{ product.name }}</span> <br />
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    saleProducts() {
      const saleProducts = this.$store.state.products.map((product) => {
        return { name: `** ${product.name} **`, price: product.price / 2 }
      })
      return saleProducts
    },
  },
}
</script>

<style></style>
