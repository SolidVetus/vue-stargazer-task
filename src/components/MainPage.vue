
<template>
  <div>
    <h1>Main Page</h1>
    <div v-if="loading" class="loader-container">
      <div class="loader">Loading...</div>
    </div>

    <ul v-else>
      <RepoCard
        v-for="{ name, description, url, stargazers_count: stars, id } in repositories"
        :key="id"
        :name="name"
        :description="description"
        :url="url"
        :stars="stars"
        :id="id"
      />
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import RepoCard from './RepoCard.vue'

const store = useStore()

const { repositories, loading } = storeToRefs(store)

onMounted(async () => {
  await store.fetchRepos()
})
</script>

<style scoped>
.repo-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  margin: auto;
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.loader {
  display: inline-block;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 0.5rem;
  background-color: #86efac;
  border-radius: 1rem;
}

.loader::before {
  content: '⏳';
  margin-right: 10px;
  display: inline-block;
  animation: spin 1.5s linear infinite;
  transform-origin: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
