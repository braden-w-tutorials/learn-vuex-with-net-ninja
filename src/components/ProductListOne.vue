<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products" :key="product">
        <span class="name">{{ product.name }}</span> <br />
        <span class="price">{{ product.price }}</span> <br />
      </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
    <h2>Sale Products</h2>
    <ul>
      <li v-for="sale in saleProducts" :key="sale">
        <span>
          Name: {{ sale.name }} <br />
          Price: {{ sale.price }} <br
        /></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePrice() {
      // this.$store.state.products.forEach(product => {
      //   product.price -= 1;
      // });
      this.$store.commit("reducePrice");
    }
  }
};
</script>

<style></style>
