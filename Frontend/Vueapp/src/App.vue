<template>
  <div id="app">
    <Profile />
  </div>
</template>

<script>
import Signup from './components/Signup.vue';
import Signin from './components/Signin.vue';
import Profile from './components/Profile.vue';

export default {
  name: 'App',
  components: {
    Signup,
    Signin,
    Profile,
  },
};
</script>

<style></style>
