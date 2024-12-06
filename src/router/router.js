import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import FavouritesPage from '@/components/FavouritesPage.vue'

export default createRouter({
  routes: [
    { path: '/main', component: MainPage, alias: '/' },
    { path: '/favourites', component: FavouritesPage },
  ],
  history: createWebHistory(),
})
