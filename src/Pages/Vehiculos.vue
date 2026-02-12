<script setup>
import { ref } from 'vue'
import vehicles from '../assets/autos.json'
import VehicleCard from '../components/AutoCard.vue'

const allVehicles = ref(vehicles)
</script>

<template>
  <section class="hero-section text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">Autos Clásicos en Exhibición</h1>
      <p class="lead">Descubre modelos icónicos y legendarios</p>
    </div>
  </section>

  <section class="container mb-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="vehicle in allVehicles" :key="vehicle.id" class="col">
        <VehicleCard :vehicle="vehicle" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: #f8f9fa;
  padding: 60px 0;
  margin-bottom: 40px;
}
</style>