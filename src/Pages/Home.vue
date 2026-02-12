<script setup>
import { ref, computed } from 'vue'
import vehicles from '../assets/autos.json'
import VehicleCard from '../components/AutoCard.vue'

const featuredVehicles = computed(() => vehicles.slice(0, 3))

const reviews = ref([
  { id: 1, name: "Carlos Pérez", comment: "Excelente atención y los autos están impecables.", stars: 5 },
  { id: 2, name: "María García", comment: "Compré un SUV y el proceso de envío fue rapidísimo.", stars: 4 },
  { id: 3, name: "Juan Rivas", comment: "Gran variedad de repuestos originales. Muy recomendados.", stars: 5 }
])

const newReview = ref({
  name: '',
  email: '',
  comment: ''
})

const submitReview = () => {
  alert(`¡Gracias ${newReview.value.name} por tu reseña!`)
  newReview.value = { name: '', email: '', comment: '' }
}
</script>

<template>

  <div id="mainCarousel" class="carousel slide shadow-sm" data-bs-ride="carousel">
    <div class="carousel-inner">

      <div class="carousel-item active">
        <img 
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/YUSNWRNWFFH4DIQS2ASXXIUYFM.jpg" 
          class="d-block w-100 banner-img" 
          alt="Auto deportivo futurista"
        >
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h3 class="display-5 fw-bold">Deportivos de ensueño</h3>
          <p>Diseño, velocidad y tecnología de punta</p>
        </div>
      </div>

      <div class="carousel-item">
        <img 
          src="https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2F00%2Fb0%2F9231dea640d18455a1000d245d5a%2F15fordf150-04.jpg&w=1280&q=75" 
          class="d-block w-100 banner-img" 
          alt="Ford F-150 pickup"
        >
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h3 class="display-5 fw-bold">Pickups robustas</h3>
          <p>Diseñadas para el trabajo y la aventura</p>
        </div>
      </div>

      <div class="carousel-item">
        <img 
          src="https://www.mediatiko.com/wp-content/uploads/2024/09/autos-de-lujo-en-cuba.jpg" 
          class="d-block w-100 banner-img" 
          alt="Autos de lujo"
        >
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h3 class="display-5 fw-bold">Autos de lujo</h3>
          <p>Elegancia, confort y exclusividad</p>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
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

  <div class="container my-5 py-4">
    <h2 class="text-center mb-5 fw-bold">Opiniones de nuestros clientes</h2>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div id="reviewsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

          <div class="carousel-indicators">
            <button v-for="(review, index) in reviews" :key="'indicator-' + review.id"
              type="button" data-bs-target="#reviewsCarousel" :data-bs-slide-to="index"
              :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : 'false'"
              :aria-label="'Slide ' + (index + 1)">
            </button>
          </div>

          <div class="carousel-inner">
            <div v-for="(review, index) in reviews" :key="'slide-' + review.id"
              class="carousel-item" :class="{ active: index === 0 }">
              <div class="card border-0 shadow-sm review-card mx-auto" style="max-width: 600px;">
                <div class="card-body text-center p-5">
                  <div class="mb-3 text-warning display-6">
                    <span v-for="star in review.stars" :key="star">★</span>
                  </div>
                  <p class="fst-italic fs-5 text-muted">"{{ review.comment }}"</p>
                  <h5 class="fw-bold mt-4">- {{ review.name }}</h5>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-lg-8">
        <div class="card border-0 shadow-lg">
          <div class="card-body p-4 p-md-5">
            <h3 class="text-center mb-4 fw-bold">Cuéntanos tu experiencia</h3>
            <form @submit.prevent="submitReview">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label small fw-bold">Nombre</label>
                  <input v-model="newReview.name" type="text" class="form-control bg-light border-0"
                    placeholder="Ej. Juan Pérez" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label small fw-bold">Correo</label>
                  <input v-model="newReview.email" type="email" class="form-control bg-light border-0"
                    placeholder="juan@correo.com" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label small fw-bold">Reseña</label>
                <textarea v-model="newReview.comment" class="form-control bg-light border-0"
                  rows="4" placeholder="¿Qué te pareció nuestro servicio?" required></textarea>
              </div>
              <div class="text-center">
                <button class="btn btn-negro px-5 py-2 fw-bold shadow">
                  Enviar Reseña
                </button>
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

.review-card {
  border-top: 4px solid #000000;
  border-radius: 15px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #000;
  background-size: 60%;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.carousel-indicators [data-bs-target] {
  background-color: #000;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .banner-img {
    height: 300px;
  }
}
</style>