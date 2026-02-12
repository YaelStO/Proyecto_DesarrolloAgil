<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4">
      <div class="container-fluid">

        <router-link class="navbar-brand ms-2 ms-md-4" to="/">
          <img 
            src="/img/logo1.png" 
            alt="AutosMX" 
            height="80" 
            class="d-inline-block align-top"
          >
        </router-link>

        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 gap-lg-3">
            <li class="nav-item">
              <router-link class="nav-link px-3" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-3" to="/vehiculos">Vehículos</router-link>
            </li>
            <!--li class="nav-item">
              <router-link class="nav-link px-3" to="../components/AutoCard">Autos</router-link>
            </!--li-->
            <li class="nav-item">
              <router-link class="nav-link px-3" to="/contacto">Contacto</router-link>
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
            <p><i class="fas fa-phone me-2"></i> 55 4526 1380</p>
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

body {
  padding-top: 96px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navbar {
  box-shadow: 0 2px 10px rgba(13, 0, 83, 0.1);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-brand {
  padding-top: 0;
  padding-bottom: 0;
}

.navbar-brand img {
  max-height: 80px;
  width: auto;
  transition: transform 0.2s ease;
}

.navbar-brand img:hover {
  transform: scale(1.05); 
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
  font-weight: 500;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.navbar-nav .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 991.98px) {
  .navbar-nav {
    margin-top: 1rem;
  }
  .navbar-nav .nav-link {
    padding-left: 1rem !important;
  }
}

footer {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
</style>