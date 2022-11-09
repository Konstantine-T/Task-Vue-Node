import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const setDefaultState = () => ({
  email: 'araaaaaaaaaaaaaaa',
  userToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMWZiNjMwNDMtNzkyYS00ODFhLWIwMTMtZGYwZTBhNWMwZjRjIiwiZW1haWwiOiJ0ZXN0ZnJvbnQxQG5ld2FnZS5pbyJ9LCJpYXQiOjE2Njc5OTk4MzcsImV4cCI6MTY2ODAwMzQzN30.KND-xIMigmUNqk1SQuHjG2TH3mR2_hTQogvuV-ISsOk',
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
