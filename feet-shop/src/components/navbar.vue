<template>
  <nav class="navbar bg-dark">
    <form class="container-fluid justify-content-start">
      <router-link to="/ProductPage">
        <button type="button" class="btn btn-warning me-2">
          Product Page
        </button></router-link
      >
      <router-link to="/ShoppingCartPage">
        <button type="button" class="btn btn-warning">Shopping Cart</button>
      </router-link>
    </form>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style></style>
