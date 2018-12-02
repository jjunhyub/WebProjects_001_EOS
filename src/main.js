/* eslint-disable eol-last */
import Vue from 'vue';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';

Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');