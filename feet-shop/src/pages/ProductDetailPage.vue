<template>
  <div v-if="product">
  <div class="container">
    <h3 class="header">Product Details Page</h3>
    <hr />
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.image" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              {{ product.price }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div v-else>
  <NotFoundPage />
  </div>
</template>

<script>
import { products } from "../temp-data";
import  NotFoundPage  from "./NotFoundPage.vue";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find(product => product.id === this.$route.params.ProductId),
    };
  },
  components: {
    NotFoundPage
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