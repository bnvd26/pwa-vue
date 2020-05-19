<template>
  <div class="home">
    <h1>Ecrire un post</h1>
    <div v-if="postCreated">
      <Spinner />
    </div>
    <div v-if="msgCreated">Votre post à bien été crée</div>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" required />
    <label for="body">Contenu</label>
    <input type="body" name="body" id="body" required />
    <button @click="this.postOnApi">Envoyer</button>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
export default {
  name: "Home",
  components: {
    Spinner
  },
  data() {
    return {
      postCreated: false,
      msgCreated: false
    };
  },
  methods: {
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
        .then(json => {
          this.sendNotification("Un nouvel article a été publié", json.title),
            (this.postCreated = false),
            setTimeout(() => {
              this.msgCreated = true;
            }, 100);
        })
        .then(() =>
          setTimeout(() => {
            this.msgCreated = false;
          }, 2000)
        )
        .catch(err => {
          console.log("Unable to Post Data", err);
        });
    },
    sendNotification(title, message) {
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(title, {
          body: message,
          icon:
            "https://pwa-vue.netlify.app/img/icons/android-chrome-192x192.png"
        });
      }
    }
  }
};
</script>
