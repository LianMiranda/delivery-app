import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '../views/SplashView.vue'
import HomeView from '../views/HomeView.vue'; 
import DetelheCategorieView from '@/views/DetelheCategorieView.vue';
// import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
     {
       path: '/detalhe-categorie',
       name: 'detalhe-categorie',
       component: DetelheCategorieView,
     }
]})

export default router
