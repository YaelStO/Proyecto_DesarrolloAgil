<script setup>
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4 fw-bold">Ford Mustang Shelby GT500 1967</h1>
        <div class="price-display mb-4">54,000 MXN</div>
        <div class="card mb-4 shadow-sm border-0">
          <div class="card-body">
            <h3 class="card-title h5 fw-bold mb-3">
              <i class="fas fa-list-alt me-2"></i>Especificaciones
            </h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item px-0">
                <span class="specs-number">0:</span> Motor: 7.0L V8
              </li>
              <li class="list-group-item px-0">
                <span class="specs-number">1:</span> Potencia: 400 HP
              </li>
              <li class="list-group-item px-0">
                <span class="specs-number">2:</span> 0-100 km/h: 5.8 segundos
              </li>
              <li class="list-group-item px-0">
                <span class="specs-number">3:</span> Color: Wimbledon White
              </li>
              <li class="list-group-item px-0">
                <span class="specs-number">4:</span> Transmisión: Manual 4 velocidades
              </li>
              <li class="list-group-item px-0">
                <span class="specs-number">5:</span> Kilometraje: 28,500 millas
              </li>
            </ul>
          </div>
        </div>
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h3 class="card-title h5 fw-bold mb-3">
              <i class="fas fa-file-alt me-2"></i>Descripción
            </h3>
            <p class="card-text fs-5">
              Muscle car clásico con motor 428 Cobra Jet.
            </p>
          </div>
        </div>
        <div class="mt-4">
          <router-link to="/contacto" class="btn btn-negro btn-lg px-5">
            <i class="fas fa-envelope me-2"></i>Solicitar información
          </router-link>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="sticky-top" style="top: 100px;">
          <img
            src="https://www.gallery-aaldering.com/wp-content/uploads/2025/02/ford-mustang-shelby-gt-500-fastback-1967.jpg?v=13"
            class="img-fluid rounded shadow vehicle-img"
            alt="Ford Mustang Shelby GT500 1967"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.price-display {
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
}
.specs-number {
  font-weight: 700;
  color: #000;
  margin-right: 8px;
  min-width: 25px;
  display: inline-block;
}
.vehicle-img {
  transition: transform 0.3s ease;
}
.vehicle-img:hover {
  transform: scale(1.02);
}
.list-group-item {
  border: none;
  border-bottom: 1px solid #eee;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.1rem;
}
.list-group-item:last-child {
  border-bottom: none;
}
.card {
  border-radius: 12px;
}
.btn-negro {
  background-color: #000;
  border-color: #000;
  color: white;
  padding: 12px 30px;
  font-weight: 600;
}
.btn-negro:hover {
  background-color: #2c2c2c;
  border-color: #2c2c2c;
  color: white;
}
@media (max-width: 768px) {
  .price-display {
    font-size: 1.5rem;
  }
  .sticky-top {
    position: relative;
    top: 0;
    margin-top: 2rem;
  }
  .list-group-item {
    font-size: 1rem;
  }
}
</style>