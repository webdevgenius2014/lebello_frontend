import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import HelpersPlugin from './helper/helperPlugin';
import apiPlugin from './helper/apiPlugin';

const app = createApp(App)
app.component('RouterLink', router.options.history.routerLink);
app.use(router)
.use(store)
app.use(apiPlugin)
app.use(HelpersPlugin)
app.mount('#app')
