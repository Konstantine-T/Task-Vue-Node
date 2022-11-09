import Vue from 'vue';
import App from './App';
import store from './store/store';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Routes from './router/routes';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store: store,
  router: router,
});
