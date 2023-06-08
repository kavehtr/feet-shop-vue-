<template>
  <div
    class="card mb-3"
    style="max-width: 540px"
    v-for="item in products"
    :key="item.id"
  >
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
          <button type="button" class="btn btn-warning">
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCartList",
  props: ["products"],
};
</script>
