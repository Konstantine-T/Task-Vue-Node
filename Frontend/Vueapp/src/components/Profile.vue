<template>
  <div class="data">
    <button class="profileBtn" type="submit" @click.prevent="fetchData">
      Fetch user data
    </button>
    <ul>
      <li>First Name: {{ user.firstName }}</li>
      <li>Last Name: {{ user.lastName }}</li>
      <li>Birthday: {{ user.birthday }}</li>
      <li>Email: {{ user.email }}</li>
    </ul>
    <button class="profileBtn" type="submit" @click.prevent="handleEdit">
      Edit User
    </button>
    <br />
    <button class="profileBtn" type="submit" @click.prevent="handleDelete">
      Delete User
    </button>
    <p class="error" v-if="error">{{ errorMessage }}</p>
  </div>
</template>
<script>
import axios from 'axios';
import store from '../store/store';

export default {
  name: 'Profile',
  data: () => ({
    user: {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
    },
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
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get('http://localhost:8000/api/auth/me', {
          headers: {
            usertoken: this.userToken,
          },
        });
        this.user.firstName = res.data.firstName;
        this.user.lastName = res.data.lastName;
        this.user.birthday = res.data.birthday;
        this.user.email = res.data.email;
      } catch (err) {
        this.error = true;
        this.errorMessage = err.response.data;
      }
    },
    handleEdit() {
      this.$router.push({ name: 'edit' });
    },
    handleDelete() {
      this.$router.push({ name: 'delete' });
    },
  },
};
</script>
<style>
.data {
  margin: auto;
  width: 70%;
  background-color: rgb(136, 130, 127);
  padding: 10px;
  display: table-cell;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: 5px;
}
.profileBtn {
  align-content: center;
  position: flex;
  margin-top: 5px;
}
</style>