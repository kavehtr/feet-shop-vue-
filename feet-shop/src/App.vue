<template>
  <navbar />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
</script>

<style scoped>
</style>
