<script setup>
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4 fw-bold">BMW M2 Coupé</h1>
        <div class="price-display mb-4">83,000 MXN</div>
        <div class="card mb-4 shadow-sm border-0">
          <div class="card-body">
            <h3 class="card-title h5 fw-bold mb-3">
              <i class="fas fa-list-alt me-2"></i>Especificaciones
            </h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item px-0"><span class="specs-number">0:</span> Motor: 3.0L I6 TwinPower Turbo</li>
              <li class="list-group-item px-0"><span class="specs-number">1:</span> Potencia: 460 HP</li>
              <li class="list-group-item px-0"><span class="specs-number">2:</span> 0-100 km/h: 4.1 segundos</li>
              <li class="list-group-item px-0"><span class="specs-number">3:</span> Transmisión: Manual 6 vel. / Automática 8 vel.</li>
              <li class="list-group-item px-0"><span class="specs-number">4:</span> Tracción: RWD</li>
              <li class="list-group-item px-0"><span class="specs-number">5:</span> Consumo combinado: 9.0 km/L</li>
            </ul>
          </div>
        </div>
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h3 class="card-title h5 fw-bold mb-3">
              <i class="fas fa-file-alt me-2"></i>Descripción
            </h3>
            <p class="card-text fs-5">
              El BMW M2 Coupé representa la entrada al mundo M de la marca bávara. Compacto pero feroz, combina ingeniería alemana con una experiencia de manejo emocionante.
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
            src="https://revologycars.com/wp-content/uploads/2024/10/1967-revology-shelby-gt500-243-02-1024x683.jpg"
            class="img-fluid rounded shadow vehicle-img"
            alt="BMW M2 Coupé"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn-negro {
  background-color: #000;
  border-color: #000;
  color: white;
  font-weight: 600;
  padding: 12px 30px;
}

.btn-negro:hover {
  background-color: #2c2c2c;
  border-color: #2c2c2c;
  color: white;
}

.card {
  border-radius: 12px;
}

.list-group-item {
  border: none;
  border-bottom: 1px solid #eee;
  font-size: 1.1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.list-group-item:last-child {
  border-bottom: none;
}

.price-display {
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
}

.specs-number {
  color: #000;
  display: inline-block;
  font-weight: 700;
  margin-right: 8px;
  min-width: 25px;
}

.vehicle-img {
  transition: transform 0.3s ease;
}

.vehicle-img:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .list-group-item {
    font-size: 1rem;
  }

  .price-display {
    font-size: 1.5rem;
  }

  .sticky-top {
    margin-top: 2rem;
    position: relative;
    top: 0;
  }
}

</style>