<script setup>
import { ref } from 'vue'
import vehicles from '../assets/autos.json'
import VehicleCard from '../components/AutoCard.vue'

// Mostrar solo 6 destacados
const featuredVehicles = vehicles.slice(0, 6)

// Datos dinámicos para las reseñas
const reviews = ref([
  { id: 1, name: "Carlos Pérez", comment: "Excelente atención y los autos están impecables.", stars: 5 },
  { id: 2, name: "María García", comment: "Compré un SUV y el proceso de envío fue rapidísimo.", stars: 4 },
  { id: 3, name: "Juan Rivas", comment: "Gran variedad de repuestos originales. Muy recomendados.", stars: 5 }
])

// Estado del formulario
const newReview = ref({
  name: '',
  email: '',
  comment: ''
})

const submitReview = () => {
  console.log("Datos enviados:", newReview.value)
  alert(`¡Gracias ${newReview.value.name} por tu reseña!`)
  // Limpiar formulario
  newReview.value = { name: '', email: '', comment: '' }
}
</script>

<template>
  <div id="mainCarousel" class="carousel slide shadow-sm" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/banner-lavado-autos-moderno_1426-5432.jpg" class="d-block w-100 banner-img" alt="Repuestos">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h3 class="display-5 fw-bold">Los mejores repuestos</h3>
          <p>Calidad garantizada para tu vehículo</p>
        </div>
      </div>

      <div class="carousel-item">
        <img src="/img/SV-Banner-catalogo.webp" class="d-block w-100 banner-img" alt="Catálogo">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h3 class="display-5 fw-bold">Gran catálogo</h3>
          <p>Todo lo que necesitas en un solo lugar</p>
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
      <router-link to="/vehiculos" class="btn btn-outline-primary d-none d-sm-block">Ver todos</router-link>
    </div>

    <div class="row">
      <div 
        class="col-12 col-md-6 col-lg-4 mb-4" 
        v-for="vehicle in featuredVehicles" 
        :key="vehicle.id"
      >
        <div class="h-100 hover-shadow transition">
          <VehicleCard :vehicle="vehicle" />
        </div>
      </div>
    </div>

    <div class="text-center mt-2 d-sm-none">
      <router-link to="/vehiculos" class="btn btn-primary w-100">Ver más vehículos</router-link>
    </div>
  </div>

  <div class="bg-primary text-white py-5 mt-5 shadow-lg">
    <div class="container text-center">
      <h3 class="fw-bold">¿Buscas un modelo específico?</h3>
      <p class="lead">Nuestro equipo te ayudará a encontrar el auto de tus sueños.</p>
      <router-link to="/contacto" class="btn btn-light btn-lg mt-3 px-5 shadow">
        Contactar ahora
      </router-link>
    </div>
  </div>

  <div class="container my-5 py-4">
    <h2 class="text-center mb-5 fw-bold">Opiniones de nuestros clientes</h2>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="review in reviews" :key="review.id">
        <div class="card h-100 border-0 shadow-sm review-card">
          <div class="card-body text-center">
            <div class="mb-2 text-warning">
              <span v-for="star in review.stars" :key="star">★</span>
            </div>
            <p class="fst-italic text-muted">"{{ review.comment }}"</p>
            <h6 class="fw-bold mb-0">- {{ review.name }}</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-lg-8">
        <div class="card border-0 shadow">
          <div class="card-body p-4 p-md-5">
            <h3 class="text-center mb-4 fw-bold">Cuéntanos tu experiencia</h3>
            
            <form @submit.prevent="submitReview">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label small fw-bold">Nombre</label>
                  <input v-model="newReview.name" type="text" class="form-control bg-light border-0" placeholder="Ej. Juan Pérez" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label small fw-bold">Correo</label>
                  <input v-model="newReview.email" type="email" class="form-control bg-light border-0" placeholder="juan@correo.com" required>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-bold">Reseña</label>
                <textarea v-model="newReview.comment" class="form-control bg-light border-0" rows="4" placeholder="¿Qué te pareció nuestro servicio?" required></textarea>
              </div>

              <div class="text-center">
                <button class="btn btn-primary px-5 py-2 fw-bold">Enviar Reseña</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-img {
  height: 500px;
  object-fit: cover;
}

.transition {
  transition: all 0.3s ease;
}

.hover-shadow:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.review-card {
  border-top: 4px solid #0d6efd; /* Color primario de Bootstrap */
}

.bg-light {
  background-color: #f8f9fa !important;
}

@media (max-width: 768px) {
  .banner-img {
    height: 300px;
  }
}
</style>