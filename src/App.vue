<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/Header/TheHeader.vue'

export default {
  components: { TheHeader },
}
</script>

<style scoped>
div {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
