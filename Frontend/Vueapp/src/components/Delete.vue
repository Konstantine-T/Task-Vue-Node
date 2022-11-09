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
        console.log(this.$router);
        await axios.delete(
          `http://localhost:8000/api/users/${store.state.id}`,
          {
            headers: {
              usertoken: this.userToken,
            },
          }
        );
        console.log('USER DELETED');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
