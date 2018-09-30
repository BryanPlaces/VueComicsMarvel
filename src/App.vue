<template>
  <div id="app">
    <header class="header">
      <h1>
        <img class="logo" src="./assets/marvelLogo.svg" alt="Marvel Logo">
        <span id= "api">API Explorer</span>
      </h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */

}
.header {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  width: 100%;
  height: 50px;
  background-color: #bd1023;

}

.logo {
  vertical-align: middle;
  width: 50px;
  height: 19.08;
}

h1 {
  
  margin: 0;
  font-size: inherit;
}

#api {
    margin-left: 4px;
    position: relative;
    top: 5px;
}

body {
  margin: 0;
  margin-bottom: 55px;
  font-size: 16px;
  background-color: #1f1f1f;
  color: white;
  
}
</style>
