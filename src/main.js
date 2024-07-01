import './assets/main.css'
import './assets/css/satoshi.css'
import './assets/css/style.css'
import "@bhplugin/vue3-datatable/dist/style.css";
// import 'jsvectormap/dist/css/jsvectormap.min.css'
// import 'flatpickr/dist/flatpickr.min.css'
import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import store from "./store";
import HelpersPlugin from './helper/helperPlugin';
import apiPlugin from './helper/apiPlugin';

const app = createApp(App)
app.component('RouterLink', router.options.history.routerLink);
app.use(router)
.use(store)
.use(createPinia())
app.use(VueApexCharts)
app.use(apiPlugin)
app.use(HelpersPlugin)
app.mount('#app')
