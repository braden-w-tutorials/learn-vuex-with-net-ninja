<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products" :key="product">
        <span class="name">{{ product.name }}</span> <br />
        <span class="price">{{ product.price }}</span> <br />
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
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
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts
    // }
    ...mapGetters(["saleProducts"])
  },
  methods: {
    // reducePrice(amount) {
    // this.$store.state.products.forEach(product => {
    //   product.price -= 1;
    // });
    //   this.$store.dispatch("reducePrice", amount);
    // }
    ...mapActions(["reducePrice"])
  }
};
</script>

<style></style>
