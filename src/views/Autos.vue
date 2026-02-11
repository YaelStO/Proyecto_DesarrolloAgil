<script setup>
import vehicles from '../assets/autos.json'
import VehicleCard from '../components/AutoCard.vue'
</script>

<template>
  <div class="container my-5">
    <h2 class="mb-4">Catálogo de Autos</h2>

    <div class="row">
      <VehicleCard
        v-for="v in vehicles"
        :key="v.id"
        :vehicle="v"
      />
    </div>
  </div>
</template>
