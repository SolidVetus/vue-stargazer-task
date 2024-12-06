<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<style scoped>
div {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
