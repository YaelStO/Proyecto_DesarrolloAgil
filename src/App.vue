<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">AutosMX</router-link>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/vehiculos">Vehículos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="../components/AutoCard">Autos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacto">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  
    <router-view></router-view>

    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5>Autos MX</h5>
            <p>Tu proveedor de automóviles.</p>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p><i class="fas fa-map-marker-alt me-2"></i> Av. Hipodromo, Tlaxiaco, Oaxaca</p>
            <p><i class="fas fa-phone me-2"></i> 55 4526 1380 </p>
            <p><i class="fas fa-envelope me-2"></i> contacto@autos.mx</p>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Horario</h5>
            <p>Lunes a Viernes: 9:00 - 18:00</p>
            <p>Sábado: 9:00 - 14:00</p>
            <p>Domingo: Cerrado</p>
          </div>
        </div>
        <hr>
        <div class="text-center">
          <p class="mb-0">&copy; 2025 AutosMX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Estilos globales */
body {
  padding-top: 56px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navbar {
  box-shadow: 0 2px 10px rgba(13, 0, 83, 0.1);
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
}

footer {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
</style>