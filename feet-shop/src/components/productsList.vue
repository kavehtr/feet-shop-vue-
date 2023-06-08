<template>
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
      <router-link :to="'/ProductPage/' + item.id">
        <button class="btn btn-warning">View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsList",
  props: ["products"],
};
</script>
