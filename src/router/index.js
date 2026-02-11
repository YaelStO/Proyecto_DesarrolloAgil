import { createRouter, createWebHistory } from 'vue-router'

// 1. Importación de Pages (Vistas)
import Home from '../Pages/Home.vue'
import Vehiculos from '../Pages/Vehiculos.vue'
import Contacto from '../Pages/Contacto.vue'

// Importaciones de tus archivos individuales (Si ya usas la ruta dinámica, estos podrían no ser necesarios a futuro, pero los dejo por si acaso)
import Auto1 from '../Pages/Auto1.vue'
import Auto2 from '../Pages/Auto2.vue'
import Auto3 from '../Pages/Auto3.vue'
import DogeChaller from '../Pages/DogeChaller.vue'
import Shelby from '../Pages/Shelby.vue'
import Chebroletpikup from '../Pages/Chebroletpikup.vue'
import AtosHy from '../Pages/AtosHy.vue'
import Bocho from '../Pages/Bocho.vue'
import Tsuru from '../Pages/Tsuru.vue'
import Chevy from '../Pages/Chevy.vue'
import Npnissan from '../Pages/Npnissan.vue'
import Aveo from '../Pages/Aveo.vue'
import Mtx from '../Pages/Mtx.vue'
import Bmw from '../Pages/Bmw.vue'
import Porche from '../Pages/Porche.vue'



import Autos from '../views/Autos.vue'


import AutoDetalle from '../components/AutoDetalle.vue'

const routes = [
  // --- Rutas Principales ---
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vehiculos',
    name: 'Vehiculos',
    component: Vehiculos
  },
  {
    path: '/autos',
    name: 'Autos',
    component: Autos
  },
  
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },

  // --- RUTA DINÁMICA (ESTA ES LA MÁS IMPORTANTE) ---
  // Debe ser '/autos/:id' (en plural) para coincidir con tu AutoCard
  {
    path: '/autos/:id', 
    name: 'AutoDetalle',
    component: AutoDetalle,
    props: true // Permite recibir el ID como propiedad en el componente
  },

  // --- Rutas Estáticas de Autos (Individuales) ---
  { path: '/auto1', name: 'Auto1', component: Auto1 },
  { path: '/auto2', name: 'Auto2', component: Auto2 },
  { path: '/auto3', name: 'Auto3', component: Auto3 },
  { path: '/dogechaller', name: 'DogeChaller', component: DogeChaller },
  { path: '/shelby', name: 'Shelby', component: Shelby },
  { path: '/chebroletpikup', name: 'Chebroletpikup', component: Chebroletpikup },
  { path: '/atoshy', name: 'AtosHy', component: AtosHy },
  { path: '/bocho', name: 'Bocho', component: Bocho },
  { path: '/tsuru', name: 'Tsuru', component: Tsuru },
  { path: '/chevy', name: 'Chevy', component: Chevy },
  { path: '/npnissan', name: 'Npnissan', component: Npnissan },
  { path: '/aveo', name: 'Aveo', component: Aveo },
  { path: '/mtx', name: 'Mtx', component: Mtx },
  { path: '/bmw', name: 'Bmw', component: Bmw },
  { path: '/porche', name: 'Porche', component: Porche },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Mejor práctica para Vite
  routes
})

export default router