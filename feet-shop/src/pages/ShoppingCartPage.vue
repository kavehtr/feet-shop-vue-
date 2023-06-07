<template>
  <div class="container">
    <h3 class="header">Shopping Cart</h3>
    <hr />
    <div class="card mb-3" style="max-width: 540px" v-for="item in cartProducts" :key="item.id">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="item.image" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              {{ item.price }}
            </p>
            <button type="button" class="btn btn-warning">Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-warning">Proceed to Checkout</button>
  </div>
</template>

<script>
import { cartProducts } from "../temp-data";
export default {
  name: "ShoppingCartPage",
  data() {
    return {
      cartProducts,
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
