<template>
  <div>
    <button type="submit" @click.prevent="fetchData">Fetch user data</button>

    <tr style="background-color: #8fbc8f">
      <td align="center"><b>Fast Name</b></td>
      <td align="center"><b>Last Name</b></td>
      <td align="center"><b>Birthday</b></td>
      <td align="center"><b>Email</b></td>
    </tr>
    <tr>
      <td align="center">
        <div>{{ user.firstName }}</div>
      </td>
      <td align="center">
        <div>{{ user.lastName }}</div>
      </td>
      <td align="center">
        <div>{{ user.birthday }}</div>
      </td>
      <td align="center">
        <div>{{ user.email }}</div>
      </td>
    </tr>
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
  }),
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
        console.log(err);
      }
    },
  },
};
</script>
