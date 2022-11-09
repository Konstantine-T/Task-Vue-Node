import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const setDefaultState = () => ({
  email: 'araaaaaaaaaaaaaaa',
  userToken: '',
});

const store = new Vuex.Store({
  state: setDefaultState(),
  getters: {
    getEmail: state => state.email,
    getUserToken: state => state.userToken,
  },
  mutations: {
    setEmail: (state, email) => {
      state.email = email;
    },
    setUserToken: (state, token) => {
      state.userToken = token;
    },
  },
  actions: {
    setEmail: ({ commit }, email) => {
      commit('setEmail', email);
    },
    setUserToken: ({ commit }, token) => {
      commit('setUserToken', token);
    },
  },
});

export default store;
