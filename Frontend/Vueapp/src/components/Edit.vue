<template>
  <div class="container">
    <form>
      <label for="fName"
        >First Name <input type="text" v-model="user.firstName" /><br /><br />
      </label>
      <label for="lName"
        >Last Name <input type="text" v-model="user.lastName" /><br /><br />
      </label>
      <button class="editBtn" type="submit" @click.prevent="handleUpdate">
        Update
      </button>
      <button class="editBtn" type="submit" @click.prevent="handleCancel">
        Cancel
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import store from '../store/store';

export default {
  name: 'Edit',
  data: () => ({
    user: {
      firstName: '',
      lastName: '',
    },
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
        this.user.firstName = '';
        this.user.lastName = '';
        this.$router.push({ name: 'profile' });
      } catch (err) {
        console.log(err);
      }
    },
    handleCancel() {
      this.$router.push({ name: 'profile' });
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
.editBtn {
  margin-top: 5px;
}
</style>
