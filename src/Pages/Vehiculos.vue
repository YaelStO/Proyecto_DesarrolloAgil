<script setup>
import vehicles from '../assets/autos.json'
import VehicleCard from '../components/AutoCard.vue'

// Opcional: Si quieres separar por categorías como tenías en tu diseño original
const clasicos = vehicles.filter(v => [2, 3, 4, 10, 8].includes(v.id))
const mexico = vehicles.filter(v => [1, 7, 9, 12, 5].includes(v.id))
const deportivos = vehicles.filter(v => [6, 11, 13].includes(v.id))
</script>

<template>
  <div class="container pb-5">
    
    <section class="hero-section text-center mb-4" id="inicio">
      <div class="container">
        <h1 class="display-4 fw-bold">Autos Clásicos en Exhibición</h1>
        <p class="lead">Descubre modelos icónicos y legendarios</p>
      </div>
    </section>

    <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div class="col" v-for="car in clasicos" :key="car.id">
        <VehicleCard :vehicle="car" />
      </div>
    </div>

    <section class="hero-section text-center mb-4">
      <div class="container">
        <h1 class="display-4 fw-bold">Autos En México</h1>
        <p class="lead">Descubre modelos icónicos y legendarios en México</p>
      </div>
    </section>

    <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div class="col" v-for="car in mexico" :key="car.id">
        <VehicleCard :vehicle="car" />
      </div>
    </div>

    <section class="hero-section text-center mb-4">
      <div class="container">
        <h1 class="display-4 fw-bold">Autos Deportivos</h1>
        <p class="lead">Potencia y diseño sin límites</p>
      </div>
    </section>

    <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div class="col" v-for="car in deportivos" :key="car.id">
        <VehicleCard :vehicle="car" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.hero-section {
  background-color: #f8f9fa;
  padding: 40px 0;
  border-radius: 10px;
  margin-top: 20px;
}
</style>