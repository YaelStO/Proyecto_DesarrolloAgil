<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

// ✅ RUTA CORREGIDA - El JSON está en ../assets/autos.json
import vehicles from '../assets/autos.json';

const router = useRouter();

// Estado para controlar la pestaña activa
const activeTab = ref('comprar');

// Estado del formulario de compra
const compraForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  vehiculoId: '',
  mensaje: '',
  metodoContacto: 'email'
});

// Estado del formulario de venta
const ventaForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  marca: '',
  modelo: '',
  anio: '',
  kilometraje: '',
  precio: '',
  color: '',
  transmision: '',
  combustible: '',
  descripcion: '',
  fotos: [],
  fotosPreviews: []  // Para las vistas previas
});

const isSending = ref(false);
const submitted = ref(false);
const tipoSolicitud = ref('');

// Computed para obtener el vehículo seleccionado
const vehiculoSeleccionado = computed(() => {
  if (!compraForm.value.vehiculoId) return null;
  return vehicles.find(car => car.id === compraForm.value.vehiculoId);
});

// Función para manejar la selección de fotos
const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  ventaForm.value.fotos = files;
  
  // Limpiar previews anteriores y crear nuevos
  ventaForm.value.fotosPreviews.forEach(preview => URL.revokeObjectURL(preview));
  ventaForm.value.fotosPreviews = files.map(file => URL.createObjectURL(file));
};

// Función para remover una foto específica
const removerFoto = (index) => {
  URL.revokeObjectURL(ventaForm.value.fotosPreviews[index]);
  ventaForm.value.fotosPreviews.splice(index, 1);
  ventaForm.value.fotos.splice(index, 1);
};

// Función para manejar error de imagen
const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/300x200?text=Sin+Imagen';
};

const submitCompraForm = () => {
  isSending.value = true;
  tipoSolicitud.value = 'compra';
  
  setTimeout(() => {
    console.log('Solicitud de compra:', compraForm.value);
    isSending.value = false;
    submitted.value = true;
    
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, 1500);
};

const submitVentaForm = () => {
  isSending.value = true;
  tipoSolicitud.value = 'venta';
  
  setTimeout(() => {
    console.log('Solicitud de venta:', ventaForm.value);
    isSending.value = false;
    submitted.value = true;
    
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, 1500);
};
</script>

<template>
  <div class="contact-page bg-light min-vh-100">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10">
          
          <div class="card shadow-lg border-0">
            <div class="row g-0">
              
              <!-- Sidebar de información -->
              <div class="col-md-4 bg-dark text-white p-4 p-lg-5 d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-4">Información de Contacto</h3>
                <p class="small mb-4 text-white-50">¿Tienes dudas sobre un modelo clásico o necesitas asesoría técnica? Escríbenos.</p>
                
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box me-3"><i class="fas fa-phone-alt"></i></div>
                  <span>+52 55 1234 5678</span>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box me-3"><i class="fas fa-envelope"></i></div>
                  <span>ventas@tuweb.com</span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="icon-box me-3"><i class="fas fa-map-marker-alt"></i></div>
                  <span>Puebla, México</span>
                </div>
              </div>

              <!-- Sección principal -->
              <div class="col-md-8 bg-white p-4 p-lg-5">
                <div v-if="!submitted">
                  
                  <!-- Tabs de navegación -->
                  <div class="d-flex mb-4 border-bottom">
                    <button 
                      @click="activeTab = 'comprar'" 
                      class="btn-tab me-4 pb-2"
                      :class="{ 'active-tab': activeTab === 'comprar' }"
                    >
                      <i class="fas fa-shopping-cart me-2"></i>COMPRAR
                    </button>
                    <button 
                      @click="activeTab = 'vender'" 
                      class="btn-tab pb-2"
                      :class="{ 'active-tab': activeTab === 'vender' }"
                    >
                      <i class="fas fa-tag me-2"></i>VENDER
                    </button>
                  </div>

                  <!-- FORMULARIO DE COMPRA -->
                  <div v-if="activeTab === 'comprar'">
                    <h2 class="fw-bold mb-4">Solicitud de Compra</h2>
                    
                    <form @submit.prevent="submitCompraForm">
                      <div class="row g-3">
                        
                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Nombre Completo</label>
                          <input v-model="compraForm.nombre" type="text" class="form-control custom-input" placeholder="Juan Pérez" required>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Email</label>
                          <input v-model="compraForm.email" type="email" class="form-control custom-input" placeholder="correo@ejemplo.com" required>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Teléfono</label>
                          <input v-model="compraForm.telefono" type="tel" class="form-control custom-input" placeholder="55 1234 5678" required>
                        </div>

                        <!-- Selección de vehículo -->
                        <div class="col-12">
                          <label class="form-label fw-semibold small text-uppercase">Vehículo de Interés</label>
                          <select v-model="compraForm.vehiculoId" class="form-select custom-input" required>
                            <option value="" disabled selected>-- Selecciona un modelo --</option>
                            <option v-for="car in vehicles" :key="car.id" :value="car.id">
                              {{ car.marca }} {{ car.modelo }} ({{ car.anio }})
                            </option>
                          </select>
                        </div>

                        <!-- Mostrar imagen del vehículo seleccionado -->
                        <div v-if="vehiculoSeleccionado" class="col-12 mt-3">
                          <div class="vehicle-card border rounded p-3 bg-light">
                            <div class="row align-items-center">
                              <div class="col-md-5">
                                <div class="vehicle-image-container">
                                  <img 
                                    :src="vehiculoSeleccionado.imagen || 'https://via.placeholder.com/300x200?text=Auto+Clasico'"
                                    :alt="`${vehiculoSeleccionado.marca} ${vehiculoSeleccionado.modelo}`"
                                    class="img-fluid rounded vehicle-image"
                                    @error="handleImageError"
                                  >
                                </div>
                              </div>
                              <div class="col-md-7">
                                <div class="vehicle-details">
                                  <h5 class="fw-bold mb-2">{{ vehiculoSeleccionado.marca }} {{ vehiculoSeleccionado.modelo }}</h5>
                                  <div class="d-flex flex-wrap gap-2 mb-2">
                                    <span class="badge bg-dark">{{ vehiculoSeleccionado.anio }}</span>
                                    <span class="badge bg-secondary">{{ vehiculoSeleccionado.tipo || 'Clásico' }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Método de contacto -->
                        <div class="col-12 mt-3">
                          <label class="form-label fw-semibold small text-uppercase d-block">Preferencia de contacto</label>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="email" v-model="compraForm.metodoContacto" id="checkEmailCompra">
                            <label class="form-check-label small" for="checkEmailCompra">Correo</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="whatsapp" v-model="compraForm.metodoContacto" id="checkWACompra">
                            <label class="form-check-label small" for="checkWACompra">WhatsApp</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="telefono" v-model="compraForm.metodoContacto" id="checkTelCompra">
                            <label class="form-check-label small" for="checkTelCompra">Teléfono</label>
                          </div>
                        </div>

                        <div class="col-12">
                          <label class="form-label fw-semibold small text-uppercase">Mensaje o dudas específicas</label>
                          <textarea v-model="compraForm.mensaje" class="form-control custom-input" rows="4" placeholder="Escribe aquí tu mensaje..." required></textarea>
                        </div>

                        <div class="col-12 mt-4">
                          <button type="submit" class="btn btn-dark w-100 btn-lg shadow-sm" :disabled="isSending">
                            <span v-if="isSending" class="spinner-border spinner-border-sm me-2"></span>
                            {{ isSending ? 'ENVIANDO...' : 'SOLICITAR INFORMACIÓN' }}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <!-- FORMULARIO DE VENTA -->
                  <div v-if="activeTab === 'vender'">
                    <h2 class="fw-bold mb-4">Vende tu Vehículo</h2>
                    <p class="text-muted mb-4">Completa el formulario con los datos de tu auto.</p>
                    
                    <form @submit.prevent="submitVentaForm">
                      <div class="row g-3">
                        
                        <h5 class="fw-bold mt-2 mb-3 text-dark border-bottom pb-2">Datos del Vendedor</h5>
                        
                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Nombre Completo</label>
                          <input v-model="ventaForm.nombre" type="text" class="form-control custom-input" placeholder="Juan Pérez" required>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Email</label>
                          <input v-model="ventaForm.email" type="email" class="form-control custom-input" placeholder="correo@ejemplo.com" required>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Teléfono</label>
                          <input v-model="ventaForm.telefono" type="tel" class="form-control custom-input" placeholder="55 1234 5678" required>
                        </div>

                        <h5 class="fw-bold mt-4 mb-3 text-dark border-bottom pb-2">Datos del Vehículo</h5>
                        
                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Marca</label>
                          <input v-model="ventaForm.marca" type="text" class="form-control custom-input" placeholder="Ej. Ford" required>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Modelo</label>
                          <input v-model="ventaForm.modelo" type="text" class="form-control custom-input" placeholder="Ej. Mustang" required>
                        </div>

                        <div class="col-md-4">
                          <label class="form-label fw-semibold small text-uppercase">Año</label>
                          <input v-model="ventaForm.anio" type="number" class="form-control custom-input" placeholder="1965" required>
                        </div>

                        <div class="col-md-4">
                          <label class="form-label fw-semibold small text-uppercase">Kilometraje</label>
                          <input v-model="ventaForm.kilometraje" type="text" class="form-control custom-input" placeholder="Ej. 80,000 km" required>
                        </div>

                        <div class="col-md-4">
                          <label class="form-label fw-semibold small text-uppercase">Color</label>
                          <input v-model="ventaForm.color" type="text" class="form-control custom-input" placeholder="Ej. Rojo" required>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Transmisión</label>
                          <select v-model="ventaForm.transmision" class="form-select custom-input" required>
                            <option value="" disabled selected>Seleccionar...</option>
                            <option value="manual">Manual</option>
                            <option value="automatica">Automática</option>
                          </select>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Combustible</label>
                          <select v-model="ventaForm.combustible" class="form-select custom-input" required>
                            <option value="" disabled selected>Seleccionar...</option>
                            <option value="gasolina">Gasolina</option>
                            <option value="diesel">Diesel</option>
                          </select>
                        </div>

                        <div class="col-md-6">
                          <label class="form-label fw-semibold small text-uppercase">Precio deseado</label>
                          <input v-model="ventaForm.precio" type="text" class="form-control custom-input" placeholder="Ej. $250,000" required>
                        </div>

                        <!-- Fotos del vehículo -->
                        <div class="col-12 mt-3">
                          <label class="form-label fw-semibold small text-uppercase d-block">Fotos del Vehículo</label>
                          <div class="upload-area border rounded p-4 text-center bg-light">
                            <i class="fas fa-cloud-upload-alt fa-3x text-dark mb-3"></i>
                            <h6 class="fw-bold">Agrega fotos de tu vehículo</h6>
                            <p class="small text-muted mb-3">Selecciona múltiples imágenes</p>
                            <input 
                              type="file" 
                              @change="handleFileUpload" 
                              accept="image/*" 
                              multiple 
                              class="form-control d-none" 
                              id="fotosVehiculo"
                            >
                            <label for="fotosVehiculo" class="btn btn-outline-dark">
                              <i class="fas fa-camera me-2"></i>Seleccionar fotos
                            </label>
                          </div>
                        </div>

                        <div class="col-12">
                          <label class="form-label fw-semibold small text-uppercase">Descripción</label>
                          <textarea v-model="ventaForm.descripcion" class="form-control custom-input" rows="4" placeholder="Describe tu vehículo..." required></textarea>
                        </div>

                        <div class="col-12 mt-4">
                          <button type="submit" class="btn btn-dark w-100 btn-lg shadow-sm" :disabled="isSending">
                            <span v-if="isSending" class="spinner-border spinner-border-sm me-2"></span>
                            {{ isSending ? 'ENVIANDO...' : 'ENVIAR SOLICITUD' }}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <!-- Mensaje de éxito -->
                <div v-else class="text-center py-5">
                  <i class="fas fa-paper-plane fa-4x text-dark mb-4"></i>
                  <h3 class="fw-bold">¡Solicitud Recibida!</h3>
                  <p class="text-muted">
                    Gracias por tu solicitud. Te contactaremos pronto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding-top: 40px;
}

.icon-box {
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.custom-input {
  border: 1px solid #e0e0e0;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.custom-input:focus {
  border-color: #000000;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

.btn-dark {
  padding: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.btn-tab {
  background: none;
  border: none;
  font-weight: 600;
  color: #6c757d;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.btn-tab:hover {
  color: #000000;
}

.active-tab {
  color: #000000;
  border-bottom: 3px solid #000000;
}

.vehicle-image-container {
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
}

.vehicle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-area {
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-area:hover {
  background-color: #e9ecef;
  border-color: #000000 !important;
}

.card {
  border-radius: 15px;
  overflow: hidden;
}
</style>