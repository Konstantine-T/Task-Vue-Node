<template>
  <div id="app">
    <router-view></router-view>
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

<style>
body {
  background-color: rgb(198, 202, 202);
  display: flex;
  justify-content: center;
}
input {
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
button {
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}
</style>
