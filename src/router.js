import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';
import ui from './components/ui.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '/Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/ui',
      name: 'ui',
      component: ui
    }
   
  ]
});