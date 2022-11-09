<template>
  <form>
    <label for="email"
      >Email <input type="text" v-model="user.email" /><br /><br />
    </label>
    <label for="password"
      >Password <input type="password" v-model="user.password" /><br /><br />
    </label>
    <button type="submit" @click.prevent="handleLogin">Log in, mate</button>
    <p>{{ userToken }}</p>
  </form>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import store from '../store/store';

export default {
  name: 'Signin',
  data: () => ({
    user: {
      email: '',
      password: '',
    },
  }),
  computed: {
    email: () => {
      return store.state.email;
    },
    userToken: () => {
      return store.state.userToken;
    },
    id: () => {
      return store.state.id;
    },
  },
  methods: {
    ...mapActions(['setUserToken', 'setEmail', 'setId']),
    async handleLogin() {
      try {
        const res = await axios.post('http://localhost:8000/api/auth/sign-in', {
          data: this.user,
        });
        store.commit('setEmail', this.user.email);
        store.commit('setUserToken', res.data.data.userToken);
        store.commit('setId', res.data.data._uuid);
      } catch (err) {
        console.log(err);
      } finally {
        this.user.email = this.user.password = '';
      }
    },
  },
};
</script>
