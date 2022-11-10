<template>
  <form>
    <button type="submit" @click.prevent="handleDelete">DELETE USER!</button>
    <p class="error" v-if="error">{{ errorMessage }}</p>
  </form>
</template>
<script>
import axios from 'axios';
import store from '../store/store';

export default {
  name: 'Delete',
  data: () => ({
    error: false,
    errorMessage: '',
  }),
  mounted() {
    if (!store.state.userToken) {
      this.$router.push({ name: 'signup' });
    }
  },
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
    async handleDelete() {
      try {
        await axios.delete(
          `http://localhost:8000/api/users/${store.state.id}`,
          {
            headers: {
              usertoken: this.userToken,
            },
          }
        );
        store.commit('setEmail', '');
        store.commit('setUserToken', '');
        store.commit('setId', '');
        this.error = false;
        this.$router.push({ name: 'signin' });
      } catch (err) {
        this.error = true;
        this.errorMessage = err.response.data;
      }
    },
  },
};
</script>
<style>
.error {
  color: red;
}
</style>