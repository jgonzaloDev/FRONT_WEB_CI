import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import '@/assets/custom_styles.css'
import 'material-icons/iconfont/material-icons.css'
//import PrimeVue from 'primevue/config';

// import 'primevue/resources/themes/saga-blue/theme.css'; // Cambia el tema si lo prefieres
// import 'primevue/resources/primevue.min.css'; // Estilos generales de PrimeVue
// import 'primeicons/primeicons.css'; // Estilos de los íconos de PrimeVue

//import Skeleton from 'primevue/skeleton';
const app = createApp(App);
//createApp(App).use(store).use(router).mount('#app')
//app.component('Skeleton', Skeleton); // Registro global
//app.use(PrimeVue); 
app.use(store).use(router);
app.mount('#app');
