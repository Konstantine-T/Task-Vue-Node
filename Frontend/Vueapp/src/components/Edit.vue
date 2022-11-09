<template>
  <form>
    <label for="fName"
      >First Name <input type="text" v-model="user.firstName" /><br /><br />
    </label>
    <label for="lName"
      >Last Name <input type="text" v-model="user.lastName" /><br /><br />
    </label>
    <button type="submit" @click.prevent="handleUpdate">Update</button>
  </form>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import store from '../store/store';

export default {
  name: 'Edit',
  data: () => ({
    user: {
      firstName: '',
      lastName: '',
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
    async handleUpdate() {
      try {
        const res = await axios.put(
          `http://localhost:8000/api/users/${store.state.id}`,
          {
            headers: {
              usertoken: this.userToken,
            },
            data: this.user,
          }
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
