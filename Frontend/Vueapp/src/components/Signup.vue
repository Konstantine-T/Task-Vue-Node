<template>
  <div class="container">
    <form class="form">
      <label for="fname"
        >First name <input type="text" v-model="user.firstName" /><br /><br
      /></label>

      <label for="lname"
        >Last name <input type="text" v-model="user.lastName" /><br /><br />
      </label>

      <label for="birthday"
        >Birthday (dd-mm-yyyy)
        <input
          type="text"
          v-mask="`##-##-####`"
          v-model="user.birthday"
        /><br /><br />
      </label>
      <label for="email"
        >Email <input type="text" v-model="user.email" /><br /><br />
      </label>
      <label for="password"
        >Password <input type="password" v-model="user.password" /><br /><br />
      </label>
      <p class="error" v-if="error">{{ errorMessage }}</p>
      <button type="submit" @click.prevent="handleSubmit">Register</button>
      <p>
        Already have an account? <span @click="handleSignin">Sign in</span>.
      </p>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import VueMask from 'v-mask';
Vue.use(VueMask);
export default {
  name: 'Signup',
  data: () => ({
    user: {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      password: '',
    },
    error: false,
    errorMessage: '',
  }),
  methods: {
    async handleSubmit() {
      try {
        console.log(this.user.firstName, this.user.password);
        await axios.post('http://localhost:8000/api/auth/sign-up', {
          data: this.user,
        });
        this.error = false;
        this.$router.push({ name: 'signin' });
      } catch (err) {
        this.error = true;
        this.errorMessage = err.response.data;
      } finally {
        this.user.firstName =
          this.user.lastName =
          this.user.email =
          this.user.birthday =
          this.user.password =
            '';
      }
    },
    handleSignin() {
      this.$router.push({ name: 'signin' });
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
span {
  color: blue;
  text-decoration: underline;
}
.error {
  color: red;
}
</style>