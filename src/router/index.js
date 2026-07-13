import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PageEnCreation from '../views/PageEnCreation.vue'
import Kinda from '../views/Kinda.vue'
import PolitiqueConfidentialite from '../views/PolitiqueConfidentialite.vue'
import OffresNonVie from '../views/OffresNonVie.vue'

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
  {
    path: '/kinda',
    name: 'kinda',
    component: Kinda,
  },
  {
    path: '/politique-confidentialite',
    name: 'politique-confidentialite',
    component: PolitiqueConfidentialite,
  },
  {
    path: '/offres-non-vie',
    name: 'offres-non-vie',
    component: OffresNonVie,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  },
})
