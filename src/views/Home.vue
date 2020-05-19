<template>
  <div class="home">
    <p @click="this.notify">Notify me</p>
    <p>  it's working </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
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
      return new Notification(message);
    },
    noAuthorizeNotification() {
      alert(
        "si vous voulez recevoir une notification, autoriser la notification dans les parametres de votre navigateur"
      );
    }
  }
};
</script>
