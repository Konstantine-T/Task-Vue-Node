import Vue from 'vue';
import App from './App';
import store from './store/store';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store: store,
});
