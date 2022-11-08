<template>
  <form>
    <label for="email"
      >Email <input type="text" v-model="user.email" /><br /><br />
    </label>
    <label for="password"
      >Password <input type="password" v-model="user.password" /><br /><br />
    </label>
    <button type="submit" @click.prevent="handleLogin">Log in, mate</button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "Signin",
  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async handleLogin() {
      try {
        console.log(this.user.email, this.user.password);
        const res = await axios.post("http://localhost:8000/api/auth/sign-in", {
          data: this.user,
        });
      } catch (err) {
        console.log(err.response.data);
      } finally {
        this.user.email = this.user.password = "";
      }
    },
  },
};
</script>
