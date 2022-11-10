<template>
  <form>
    <button type="submit" @click.prevent="handleDelete">DELETE USER!</button>
  </form>
</template>
<script>
import axios from 'axios';
import store from '../store/store';

export default {
  name: 'Delete',
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
        this.$router.push({ name: 'signin' });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
