<template>
  <div id="app">
    <Edit />
  </div>
</template>

<script>
import Signup from './components/Signup.vue';
import Signin from './components/Signin.vue';
import Profile from './components/Profile.vue';
import Edit from './components/Edit.vue';

export default {
  name: 'App',
  components: {
    Signup,
    Signin,
    Profile,
    Edit,
  },
};
</script>

<style></style>
