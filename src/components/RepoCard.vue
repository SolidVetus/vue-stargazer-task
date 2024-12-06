<template>
  <li class="repo-card">
    <div class="repo-card__outer">
      <div class="repo-card__header">
        <div>
          <h4 class="repo-card__heading">
            <a class="repo-card__link" :href="url"> {{ name }} </a>
          </h4>
          <p class="repo-card__description">{{ description }}</p>
        </div>
        <div class="repo-card__footer">
          <span class="repo-card__rating">
            <img src="https://img.icons8.com/?size=20&id=81443&format=png" alt="star-logo" />
            {{ stars }}
          </span>
          <button class="repo-card__button" @click="handleClick">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const { addToFavorites, removeFromFavorites, favoriteRepositories } = store

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'Нет описания',
  },
  stars: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const isInFavorites = computed(() => favoriteRepositories.some((repo) => repo.id === props.id))

const buttonText = computed(() => (isInFavorites.value ? 'remove' : 'add'))
const handleClick = computed(() =>
  isInFavorites.value ? removeFromFavorites(props.id) : addToFavorites(props.id)
)
</script>

<style scoped>
.repo-card {
  display: flex;
  height: 200px;
  width: 100%;
}

.repo-card__outer {
  display: flex;
  background-color: gray;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 8px;
  padding: 4px;
}

.repo-card__header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  margin-bottom: 4px;
  margin-left: 8px;
}

.repo-card__heading {
  font-size: x-large;
  font-weight: bold;
}

.repo-card__link {
  text-transform: capitalize;
  transition: all 0.3s ease-in;
  color: cyan;
  border-bottom: 8px solid;
  border-color: transparent;
}

.repo-card__link:hover {
  color: purple;
  border-color: purple;
}

.repo-card__description {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: small;
  color: blue;
}

.repo-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.repo-card__rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  font-size: small;
  font-weight: 500;
  color: blue;
}

.repo-card__button {
  margin-right: 4px;
  margin-top: auto;
  padding: 4px 12px;
  border-radius: 20px;
  background: green;
  transition: all 0.5s ease-in;
  text-transform: capitalize;
}
</style>
