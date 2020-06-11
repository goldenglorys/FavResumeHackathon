import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from './router';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/style/style.css';



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  iconfont: 'mdi',
  render: h => h(App)
}).$mount('#app')
