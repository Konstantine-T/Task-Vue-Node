import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const setDefaultState = () => ({
  email: 'araaaaaaaaaaaaaaa',
  userToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMWZiNjMwNDMtNzkyYS00ODFhLWIwMTMtZGYwZTBhNWMwZjRjIiwiZW1haWwiOiJ0ZXN0ZnJvbnQxQG5ld2FnZS5pbyJ9LCJpYXQiOjE2NjgwMDk2ODUsImV4cCI6MTY2ODAxMzI4NX0.WzaxmK7J-A8RveysBgNb_g_9wlFpxgIaV4sdN_PTwfE',
  id: '1fb63043-792a-481a-b013-df0e0a5c0f4c',
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
