<template>
  <div class="container mt-4" v-if="auto">
    <div class="row">
      <div class="col-lg-6">
        <h2>{{ auto.marca }} {{ auto.modelo }} {{ auto.anio }}</h2>
        <h4 class="text-success">{{ auto.precio }}</h4>

        <ul class="list-group my-3">
          <li
            v-for="(item, index) in auto.especificaciones"
            :key="index"
            class="list-group-item"
          >
            {{ item }}
          </li>
        </ul>

        <p>{{ auto.descripcion }}</p>

        <router-link to="/contacto" class="btn btn-primary">
          Solicitar información
        </router-link>
      </div>

      <div class="col-lg-6">
        <img :src="auto.imagen" class="img-fluid rounded" />
      </div>
    </div>
  </div>
</template>

<script>
import autos from "../assets/autos.json"

export default {
  data() {
    return {
      auto: null
    }
  },
  mounted() {
    const id = parseInt(this.$route.params.id)
    this.auto = autos.find(a => a.id === id)
  }
}
</script>
