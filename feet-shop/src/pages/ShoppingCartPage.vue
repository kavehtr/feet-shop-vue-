<template>
  <div class="container">
    <h3 class="header">Shopping Cart</h3>
    <hr />
    <shoppingCartList :products="cartProducts" />
    <button type="button" class="btn btn-warning">Proceed to Checkout</button>
  </div>
</template>

<script>
import { cartProducts } from "../temp-data";
import shoppingCartList from "../components/shoppingCartList.vue";
export default {
  name: "ShoppingCartPage",
  components: {
    shoppingCartList
  },
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
