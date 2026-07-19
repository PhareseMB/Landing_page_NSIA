import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PageEnCreation from '../views/PageEnCreation.vue'
import Kinda from '../views/Kinda.vue'
import PolitiqueConfidentialite from '../views/PolitiqueConfidentialite.vue'
import OffresNonVie from '../views/OffresNonVie.vue'
import OffresVie from '../views/OffresVie.vue'
import PolitiqueConfidentialiteVie from '../views/PolitiqueConfidentialiteVie.vue'

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
    path: '/politique-confidentialite/vie',
    name: 'politique-confidentialite-vie',
    component: PolitiqueConfidentialiteVie,
  },
  {
    path: '/offres-non-vie',
    name: 'offres-non-vie',
    component: OffresNonVie,
  },
  {
    path: '/offres-vie',
    name: 'offres-vie',
    component: OffresVie,
  },
  
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  },
})
