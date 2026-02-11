<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  vehicle: Object
})
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100 shadow-sm">
      <img :src="vehicle.imagen" class="card-img-top img" />

      <div class="card-body">
        <h5>{{ vehicle.marca }} {{ vehicle.modelo }}</h5>
        <p>{{ vehicle.precio }}</p>

        <RouterLink
          :to="`/autos/${vehicle.id}`"
          class="btn btn-primary w-100"
        >
          Ver detalles
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img{
  height:220px;
  object-fit:cover;
}
</style>
