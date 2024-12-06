import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios'

export const useStore = defineStore('repositories', () => {
  const url =
    'https://api.github.com/search/repositories?q=created:%3E2023-10-01&sort=stargazers_count&order=desc&per_page=30'

  const repositories = reactive([])
  const favoriteRepositories = reactive([])
  const loading = ref(false)

  const fetchRepos = async () => {
    loading.value = true
    try {
      const response = await axios.get(url)
      repositories.push(...response.data.items)
    } catch (error) {
      console.error('Error fetching repositories:', error)
    } finally {
      loading.value = false
    }
  }

  const addToFavorites = (id) => {
    const repositoryToAdd = repositories.find((repo) => repo.id === id)
    if (repositoryToAdd) {
      favoriteRepositories.push(repositoryToAdd)
    }
  }
  // const isInFavorites = computed((id) => favoriteRepositories.some((repo) => repo.id === id))

  const removeFromFavorites = (id) => {
    const updatedFavorites = favoriteRepositories.filter((repo) => repo.id !== id)
    favoriteRepositories.length = 0
    favoriteRepositories.push(...updatedFavorites)
  }

  return {
    repositories,
    fetchRepos,
    loading,
    favoriteRepositories,
    addToFavorites,
    removeFromFavorites,
  }
})
