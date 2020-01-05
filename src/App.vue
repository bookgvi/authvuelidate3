<template>
  <div id="app">
    <b-container>
      <b-row id="nav" class="mb-3">
        <b-col class="fixed-top bg-light py-3">
          <router-link to="/hello">Hello</router-link> |
          <router-link to="/customers">Клиенты</router-link> |
          <router-link to="/bookings">Бронирования</router-link> |
          <router-link to="/about">About</router-link>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <router-view/>
      </b-row>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
