import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

const app = createApp(App)
app.component('RouterLink', router.options.history.routerLink);
app.use(router)
.use(store)
app.mount('#app')
