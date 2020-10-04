import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vue from 'vue';
import { Lazyload } from 'vant';

createApp(App).use(store).use(router).use(Lazyload).mount('#app');
////gitlab

