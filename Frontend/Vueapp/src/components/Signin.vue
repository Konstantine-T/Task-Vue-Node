<template>
  <div class="container">
    <form>
      <label for="email"
        >Email <input type="text" v-model="user.email" /><br /><br />
      </label>
      <label for="password"
        >Password <input type="password" v-model="user.password" /><br /><br />
      </label>
      <p class="error" v-if="error">{{ errorMessage }}</p>
      <button type="submit" @click.prevent="handleLogin">Log in, mate</button>
    </form>
  </div>
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
    error: false,
    errorMessage: '',
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
        store.commit('setId', res.data.data.id);
        this.error = false;
        this.$router.push({ name: 'profile' });
      } catch (err) {
        this.error = true;
        this.errorMessage = err.response.data;
      } finally {
        this.user.email = this.user.password = '';
      }
    },
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>