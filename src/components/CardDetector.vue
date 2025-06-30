<template>
    <div>
      <!-- Mostrar mensaje cuando no haya conexión -->
      <div v-if="!isOnline" class="offline-message">
        <p>No tienes conexión a Internet. Algunas funciones podrían no estar disponibles.</p>
      </div>
  
      <!-- El resto de tu aplicación -->
      <p v-else>Conectado a Internet. ¡Todo funcionando!</p>
  
      <!-- El contenido de tu aplicación aquí -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  export default {
    setup() {
      const isOnline = ref(window.navigator.onLine); // Inicializa con el estado actual de la conexión
  
      // Función que actualiza el estado cuando cambia la conexión
      const updateOnlineStatus = () => {
        isOnline.value = window.navigator.onLine;
      };
  
      // Registra los eventos de cambio de conexión
      onMounted(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
      });
  
      // Limpia los eventos cuando el componente se destruya
      onBeforeUnmount(() => {
        window.removeEventListener('online', updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
      });
  
      return { isOnline };
    }
  };
  </script>
  
  <style scoped>
  .offline-message {
    background-color: #ffcccc;
    color: #d9534f;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  