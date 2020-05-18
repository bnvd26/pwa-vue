<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    notify() {
      if ("Notification" in window) {
        this.requestPermissionNotification();
        if (Notification.permission === "granted") {
          this.sendNotification("hello");
        } else if (Notification.permission === "denied") {
          this.noAuthorizeNotification();
        }
      }
    },
    requestPermissionNotification() {
      Notification.requestPermission();
    },
    sendNotification(message) {
      new Notification(message);
    },
    noAuthorizeNotification() {
      alert(
        "si vous voulez recevoir une notification, autoriser la notification dans les parametres de votre navigateur"
      );
    }
  }
};
</script>
