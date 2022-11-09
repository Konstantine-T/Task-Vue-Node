import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const setDefaultState = () => ({
  email: '',
  userToken: '',
  id: '',
});

const store = new Vuex.Store({
  state: setDefaultState(),
  getters: {
    getEmail: state => state.email,
    getUserToken: state => state.userToken,
    getId: state => state.id,
  },
  mutations: {
    setEmail: (state, email) => {
      state.email = email;
    },
    setUserToken: (state, token) => {
      state.userToken = token;
    },
    setId: (state, id) => {
      state.id = id;
    },
  },
  actions: {
    setEmail: ({ commit }, email) => {
      commit('setEmail', email);
    },
    setUserToken: ({ commit }, token) => {
      commit('setUserToken', token);
    },
    setId: ({ commit }, id) => {
      commit('setId', id);
    },
  },
});

export default store;
