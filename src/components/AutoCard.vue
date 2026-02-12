<script setup>
defineProps({
  vehicle: Object
})

const getRoute = (id) => {
  const routes = {
    1: '/atoshy',
    2: '/auto1',
    3: '/auto2',
    4: '/auto3',
    5: '/aveo',
    6: '/bmw',
    7: '/bocho',
    8: '/chebroletpikup',
    9: '/chevy',
    10: '/dogechaller',
    11: '/mtx',
    12: '/npnissan',
    13: '/porche',
    14: '/tsuru',
    15: '/shelby'
  }
  return routes[id] || '/'
}
</script>

<template>
  <div class="card h-100 shadow-sm border-0">
    <div class="img-wrapper">
      <img :src="vehicle.imagen" class="card-img-top" :alt="vehicle.modelo" />
    </div>
    <div class="card-body d-flex flex-column text-start">
      <h5 class="fw-bold mb-1">{{ vehicle.marca }} {{ vehicle.modelo }}</h5>
      <p class="text-muted small flex-grow-1">
        {{ vehicle.descripcion || 'Clásico con potencia legendaria.' }}
      </p>
      <div class="mt-auto">
        <p class="fw-bold mb-3">{{ vehicle.precio }}</p>
        <router-link :to="getRoute(vehicle.id)" class="btn btn-negro mt-auto w-100">
          Ver detalles
        </router-link>
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
  height: 200px;
  overflow: hidden;
  background-color: #f0f0f0;
}
.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-negro {
  background-color: #000;
  border-color: #000;
  color: white;
  font-weight: 600;
}
.btn-negro:hover {
  background-color: #2c2c2c;
  border-color: #2c2c2c;
  color: white;
}
</style>