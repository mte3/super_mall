import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {Toast} from "vant";

// import {registryToast} from "./components/common/toast";
// .use(registryToast)

createApp(App).use(store).use(router).use(Toast).mount('#app');

////github

