import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {Toast,Icon} from "vant";
import FastClick from 'fastclick';

import {Image as VanImage} from 'vant'

// import VueLazyLoad from 'vue-lazyload'

// import {registryToast} from "./components/common/toast";
// .use(registryToast)

createApp(App).use(store).use(router).use(Icon).use(VanImage).use(Toast).mount('#app')
FastClick.attach(document.body)


// Vue.use(VueLazyLoad,{
//   loading:require('.assets/img/common/placeholder.png')
// }) //图片懒加载
// src -> v-lazy

////github

