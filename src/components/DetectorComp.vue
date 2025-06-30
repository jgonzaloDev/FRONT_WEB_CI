<template>
    <div>
      <p v-if="isOnline" class="online" >Tienes conexión a Internet</p>
       <p v-else class="offline">No tienes conexión a Internet. Algunas funciones podrían no estar disponibles.</p> 
    </div>
</template>
  
  <script>
  import useNetworkDetector from "@/composable/useNetworkDetector.js"; // Importa la función que creamos
  
  export default {
    setup() {
      const { isOnline } = useNetworkDetector(); // Desestructuramos el valor reactivo isOnline
  
      return { isOnline }; // Debemos retornar isOnline para acceder en la plantilla
    }
  };
  </script>

  <style scoped>

    .online{
        background-color: darkseagreen;
        padding: 20px;
        color: white;
        text-align: center;
    }

    .offline{
        background-color: crimson;
        padding: 20px;
        color: white;
        text-align: center;
    }

  </style>
  