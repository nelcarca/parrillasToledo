import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contacto from '../views/Contacto.vue'
import Productos from '../views/Productos.vue'
import Quinchos from '../views/Quinchos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/quinchos',
    name: 'Quinchos',
    component: Quinchos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
