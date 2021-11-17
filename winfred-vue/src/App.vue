<template>
  <div id="nav">
    <!-- <router-link to="/about">About</router-link>
    <br> -->
    <router-link to="/age">Example 1</router-link>
    |
    <router-link to="/form">Example 2</router-link>
    |
    <router-link to="/degree">Example 3</router-link>
    <br>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
