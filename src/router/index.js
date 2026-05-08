import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PageEnCreation from '../views/PageEnCreation.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/en-creation',
    name: 'en-creation',
    component: PageEnCreation,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
