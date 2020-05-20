<template>
  <div id="app">
    <div v-if="!online" class="no-network">
      Vérifier votre connexion internet
      <img
        class="icon-network"
        src="./assets/network.png"
        alt="icon-network"
      />
    </div>

    <div class="header">
      <div class="logo">
        <img alt="4L logo" src="./assets/logo.png" />
      </div>
      <span></span>
      <div id="nav">
        <button>
          <router-link to="/">
            <img alt="home" src="./assets/home.svg" class="icon" />
          </router-link>
        </button>
        <button class="buttonArticle">
          <router-link to="/posts">
            <img alt="article" src="./assets/article.svg" class="icon" />
          </router-link>
        </button>
        <button>
          <router-link to="/post/12">
            <img alt="trophy" src="./assets/trophy.svg" class="icon trophy" />
          </router-link>
        </button>
      </div>
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
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  overflow-x: hidden;
}

.header {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}
.logo {
  margin-left: 30px;
  margin-right: 30%;
}
button {
  background: #1b7ff3;
  border: 1px solid rgba(27, 127, 243, 0.2);
  box-sizing: border-box;
  box-shadow: 6px 6px 23px #2c87f3, -6px -6px 16px rgba(0, 94, 204, 0.33);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  padding: 2px;
  outline: none;
}
.buttonArticle {
  margin-left: 20px;
  margin-right: 20px;
}
button:hover {
  background: white;
}
.icon.trophy {
  margin-top: 7px;
}
span {
  position: absolute;
  width: 80%;
  height: 0.5px;
  background: white;
  margin-top: 80px;
  margin-left: 130px;
}

#nav {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-right: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.no-network {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-network {
  margin-left: 5px;
  width: 20px;
}
@media (min-width: 700px) {
#nav {
  margin-left : 25%
}
}
</style>
