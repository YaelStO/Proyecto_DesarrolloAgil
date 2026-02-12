<script setup>
import { computed } from 'vue'
import vehicles from '../assets/autos.json'
import VehicleCard from '../components/AutoCard.vue'

const featuredVehicles = computed(() => vehicles.slice(0, 3))
</script>

<template>
  <div id="mainCarousel" class="carousel slide shadow-sm" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/YUSNWRNWFFH4DIQS2ASXXIUYFM.jpg" class="d-block w-100 banner-img" alt="Auto deportivo">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h3 class="display-5 fw-bold">Deportivos de ensueño</h3>
          <p>Diseño, velocidad y tecnología de punta</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2F00%2Fb0%2F9231dea640d18455a1000d245d5a%2F15fordf150-04.jpg&w=1280&q=75" class="d-block w-100 banner-img" alt="Pickup">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h3 class="display-5 fw-bold">Pickups robustas</h3>
          <p>Diseñadas para el trabajo y la aventura</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>

  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold">Vehículos Destacados</h2>
      <router-link to="/vehiculos" class="btn btn-outline-negro d-none d-sm-block">Ver todos</router-link>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="car in featuredVehicles" :key="car.id" class="col">
        <VehicleCard :vehicle="car" />
      </div>
    </div>

    <div class="text-center mt-4 d-sm-none">
      <router-link to="/vehiculos" class="btn btn-negro w-100">Ver más vehículos</router-link>
    </div>
  </div>

  <div class="bg-negro text-white py-5 mt-5 shadow-lg">
    <div class="container text-center">
      <h3 class="fw-bold">¿Buscas un modelo específico?</h3>
      <p class="lead">Nuestro equipo te ayudará a encontrar el auto de tus sueños.</p>
      <router-link to="/contacto" class="btn btn-light btn-lg mt-3 px-5 shadow">
        Contactar ahora
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.banner-img {
  height: 500px;
  object-fit: cover;
}
@media (max-width: 768px) {
  .banner-img {
    height: 300px;
  }
}
</style>