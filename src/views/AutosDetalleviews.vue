<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import vehicles from '../assets/autos.json' // Asegúrate que la ruta sea correcta

const route = useRoute()
const router = useRouter()

// Buscamos el auto cuyo ID coincida con el ID de la URL
const vehicle = computed(() => {
  return vehicles.find(v => v.id === Number(route.params.id))
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="container mt-5">
    <div v-if="vehicle" class="row">
      <div class="col-md-6">
        <img :src="vehicle.imagen" class="img-fluid rounded shadow" :alt="vehicle.modelo">
      </div>
      <div class="col-md-6">
        <h1 class="display-5">{{ vehicle.marca }} {{ vehicle.modelo }}</h1>
        <h3 class="text-primary">{{ vehicle.precio }}</h3>
        <p class="lead mt-4">{{ vehicle.descripcion }}</p>
        
        <div class="mt-4">
          <h5>Especificaciones:</h5>
          <ul>
            <li v-for="(spec, index) in vehicle.especificaciones" :key="index">
              {{ spec }}
            </li>
          </ul>
        </div>

        <button @click="goBack" class="btn btn-secondary mt-4">Volver</button>
      </div>
    </div>

    <div v-else class="text-center mt-5">
      <h2>Vehículo no encontrado</h2>
      <button @click="goBack" class="btn btn-primary mt-3">Volver al inicio</button>
    </div>
  </div>
</template>