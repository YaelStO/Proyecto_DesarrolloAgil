<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  vehicle: Object
})
</script>

<template>
  <div class="card h-100 shadow-sm border-0">
    <div class="img-wrapper">
      <img :src="vehicle.imagen" class="card-img-top" :alt="vehicle.modelo" />
    </div>

    <div class="card-body d-flex flex-column text-start">
      <h5 class="fw-bold mb-1">{{ vehicle.marca }} {{ vehicle.modelo }}</h5>
      <p class="text-muted small flex-grow-1">
        {{ vehicle.descripcion || 'Clásico con potencia legendaria y diseño icónico.' }}
      </p>
      
      <div class="mt-auto">
        <p class="fw-bold mb-3" v-if="vehicle.precio">{{ vehicle.precio }}</p>
        <RouterLink
          :to="`/autos/${vehicle.id}`"
          class="btn btn-primary px-4"
        >
          Ver detalles
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
}

.img-wrapper {
  height: 200px; /* Altura fija para que todas las fotos se alineen */
  overflow: hidden;
  background-color: #f0f0f0;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Esto evita que las fotos se estiren feo */
}

.btn-primary {
  border-radius: 5px;
  font-weight: 500;
}
</style>