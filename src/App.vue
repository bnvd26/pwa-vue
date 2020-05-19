<template>
  <div id="app">
    <div v-if="!online">Vérifier votre connexion internet</div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/posts">Post</router-link>|
      <router-link to="/post/12">Detail d'un article exemple</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      online: navigator.onLine
    };
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e;
      this.online = type === "online";
    }
  },

  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  },
  beforeDestroy() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  }
};
</script>

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
