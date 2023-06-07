<template>
  <div class="container">
    <h3 class="header">Product Page</h3>
    <hr />
    <div
      class="card m-2"
      style="width: 18rem; display: inline-block"
      v-for="item in products"
    >
      <img :src="item.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">
          {{ item.price }}
        </p>
        <router-link :to="'/ProductPage/' + products.id">
          <button class="btn btn-warning">View Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../temp-data";
export default {
  name: "ProductPage",
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
