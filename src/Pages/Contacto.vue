<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// Importamos los vehículos del JSON
import vehicles from '../assets/autos.json';

const router = useRouter();

// Estado del formulario
const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  interes: '',
  vehiculoId: '', // Nuevo campo para el ID del auto
  mensaje: '',
  metodoContacto: 'email' // Campo extra para complejidad
});

const isSending = ref(false);
const submitted = ref(false);

const submitForm = () => {
  isSending.value = true;
  
  // Simulamos una petición al servidor
  setTimeout(() => {
    console.log('Datos procesados:', form.value);
    isSending.value = false;
    submitted.value = true;
    
    // Redirigir al inicio tras 4 segundos
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
        <div class="col-lg-10 col-xl-8">
          
          <div class="card shadow-lg border-0">
            <div class="row g-0">
              <div class="col-md-4 bg-primary text-white p-4 p-lg-5 d-flex flex-column justify-content-center">
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

              <div class="col-md-8 bg-white p-4 p-lg-5">
                <div v-if="!submitted">
                  <h2 class="fw-bold mb-4">Envíanos un mensaje</h2>
                  
                  <form @submit.prevent="submitForm" class="needs-validation">
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label class="form-label fw-semibold small text-uppercase">Nombre Completo</label>
                        <input v-model="form.nombre" type="text" class="form-control custom-input" placeholder="Juan Pérez" required>
                      </div>

                      <div class="col-md-6">
                        <label class="form-label fw-semibold small text-uppercase">Email</label>
                        <input v-model="form.email" type="email" class="form-control custom-input" placeholder="correo@ejemplo.com" required>
                      </div>

                      <div class="col-md-6">
                        <label class="form-label fw-semibold small text-uppercase">¿Qué buscas?</label>
                        <select v-model="form.interes" class="form-select custom-input" required>
                          <option value="" disabled>Seleccionar...</option>
                          <option value="compra">Compra de vehículo</option>
                          <option value="venta">Venta / Consignación</option>
                          <option value="partes">Refacciones clásicas</option>
                        </select>
                      </div>

                      <div class="col-md-6">
                        <label class="form-label fw-semibold small text-uppercase">Vehículo de Interés</label>
                        <select v-model="form.vehiculoId" class="form-select custom-input" :required="form.interes === 'compra'">
                          <option value="">-- Ver catálogo disponible --</option>
                          <option v-for="car in vehicles" :key="car.id" :value="car.id">
                            {{ car.marca }} {{ car.modelo }} ({{ car.anio }})
                          </option>
                        </select>
                      </div>

                      <div class="col-12 mt-3">
                        <label class="form-label fw-semibold small text-uppercase d-block">Preferencia de contacto</label>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" value="email" v-model="form.metodoContacto" id="checkEmail">
                          <label class="form-check-label small" for="checkEmail">Correo</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" value="whatsapp" v-model="form.metodoContacto" id="checkWA">
                          <label class="form-check-label small" for="checkWA">WhatsApp</label>
                        </div>
                      </div>

                      <div class="col-12">
                        <label class="form-label fw-semibold small text-uppercase">Mensaje o dudas específicas</label>
                        <textarea v-model="form.mensaje" class="form-control custom-input" rows="4" placeholder="Escribe aquí..." required></textarea>
                      </div>

                      <div class="col-12 mt-4">
                        <button type="submit" class="btn btn-primary w-100 btn-lg shadow-sm d-flex align-items-center justify-content-center" :disabled="isSending">
                          <span v-if="isSending" class="spinner-border spinner-border-sm me-2"></span>
                          {{ isSending ? 'ENVIANDO...' : 'ENVIAR SOLICITUD' }}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div v-else class="text-center py-5">
                  <div class="success-animation mb-4">
                    <i class="fas fa-paper-plane fa-4x text-success animate__animated animate__bounceIn"></i>
                  </div>
                  <h3 class="fw-bold">¡Solicitud Recibida!</h3>
                  <p class="text-muted">Gracias por tu interés, <strong>{{ form.nombre }}</strong>. Un asesor te contactará vía <strong>{{ form.metodoContacto }}</strong> en menos de 24 horas.</p>
                  <div class="progress mt-4" style="height: 5px;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%"></div>
                  </div>
                  <small class="text-muted mt-2 d-block">Redirigiendo al catálogo...</small>
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
  border-color: #0d6efd;
  box-shadow: 0 0 8px rgba(13, 110, 253, 0.15);
}

.btn-primary {
  padding: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.card {
  overflow: hidden;
  border-radius: 15px;
}

/* Animación simple */
@keyframes bounceIn {
  from { opacity: 0; transform: scale(0.3); }
  to { opacity: 1; transform: scale(1); }
}

.animate__bounceIn {
  animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>