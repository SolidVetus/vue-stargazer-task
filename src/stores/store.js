import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useStore = defineStore('repositories', () => {
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

  return {
    repositories,
    fetchRepos,
    loading,
  }
})
