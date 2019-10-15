import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import {routes} from './routes.js';

import {store} from './store/store.js';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false;

new Vue({
  store, 
  router,
  render: h => h(App),
}).$mount('#app')
