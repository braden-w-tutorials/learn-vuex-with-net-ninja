<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
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
  props: ["products"],
  data() {
    return {}
  },
}
</script>

<style></style>
