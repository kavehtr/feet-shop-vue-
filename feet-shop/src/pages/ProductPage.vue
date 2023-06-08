<template>
  <div class="container">
    <h3 class="header">Product Page</h3>
    <hr />
   <productsList :products="products"/>
  </div>
</template>

<script>
import { products } from "../temp-data";
import productsList from "../components/productsList.vue";
export default {
  name: "ProductPage",
  components: {
    productsList
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
</style>
