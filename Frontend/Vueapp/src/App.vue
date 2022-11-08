<template>
  <div id="app">
    <Signin />
  </div>
</template>

<script>
import Signup from "./components/Signup.vue";
import Signin from "./components/Signin.vue";

export default {
  name: "App",
  components: {
    Signup,
    Signin,
  },
};
</script>

<style></style>
