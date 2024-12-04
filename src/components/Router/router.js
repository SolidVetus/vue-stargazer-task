import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../MainPage.vue'
import FavouritesPage from '../FavouritesPage.vue'

export default createRouter({
  routes: [
    { path: '/main', component: MainPage, alias: '/' },
    { path: '/favourites', component: FavouritesPage },
  ],
  history: createWebHistory(),
})
