import './assets/main.css'
/* Bootstrap Styling */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Bootstrap JavaScript */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
