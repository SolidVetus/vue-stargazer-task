<template>
  <div>
    <h1>Main Page</h1>
    <div v-if="loading" class="loader-container">
      <div class="loader">Loading...</div>
    </div>

    <ul v-else>
      <li class="repo-list" v-for="repo in repositories" :key="repo.id">
        <a :href="repo.html_url">{{ repo.id }}</a>
        - ⭐ {{ repo.stargazers_count }} stars
        <p>{{ repo.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
// import { useStore } from '@/stores/store'

// const { repositories, fetchRepos, loading } = useStore()

const url =
  'https://api.github.com/search/repositories?q=created:%3E2023-10-01&sort=stargazers_count&order=desc&per_page=30'

const repositories = ref([])
const loading = ref(false)

const fetchRepos = async () => {
  loading.value = true
  try {
    const response = await axios.get(url)
    repositories.value = response.data.items
  } catch (error) {
    console.error('Error fetching repositories:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  console.log('started')
  fetchRepos()
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
