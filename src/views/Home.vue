<template>
  <div class="home">
    <p @click="this.notify">Notify me</p>
    <h1>Ecrire un post</h1>
    <div v-if="postCreated">
      <AlertFlashMessage />
    </div>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" required />
    <label for="body">Contenu</label>
    <input type="body" name="body" id="body" required />
    <button @click="this.postOnApi">Envoyer</button>
  </div>
</template>

<script>
import AlertFlashMessage from "../components/AlertFlashMessage";
export default {
  name: "Home",
  components: {
    AlertFlashMessage
  },
  data() {
    return {
      postCreated: false
    };
  },
  methods: {
    notify() {
      if ("Notification" in window) {
        this.requestPermissionNotification();
        if (Notification.permission === "granted") {
          this.sendNotification("hello", "ceci est un test");
        } else if (Notification.permission === "denied") {
          this.noAuthorizeNotification();
        }
      }
    },
    postOnApi() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: document.getElementById("title").value,
          body: document.getElementById("body").value,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json(), (this.postCreated = true))
        .then(json =>
          this.sendNotification("Un nouvel article a été publié", json.title)
        )
        .then(() =>
          setTimeout(() => {
            this.postCreated = false;
          }, 1000)
        );
    },
    requestPermissionNotification() {
      Notification.requestPermission();
    },
    sendNotification(title, message) {
      return new Notification(title, {
        body: message,
        icon: "https://pwa-vue.netlify.app/img/icons/android-chrome-192x192.png"
      });
    },
    noAuthorizeNotification() {
      alert(
        "si vous voulez recevoir une notification, autoriser la notification dans les parametres de votre navigateur"
      );
    }
  }
};
</script>
