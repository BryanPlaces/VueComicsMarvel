<template>
  <div id="app">
    <router-link to="/comics"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import Buscador from './components/Buscador';

export default {
  name: 'App',
  components: {
    Buscador,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
