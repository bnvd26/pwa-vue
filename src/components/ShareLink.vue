<template>
  <div @click="this.shareArticle" v-if="sharing">Partager</div>
</template>

<script>
export default {
  name: "ShareLink",
  data: function() {
    return {
      sharing: null
    };
  },
  props: {},
  mounted: function() {
    // Verfy if current navigator support Web Share API
    if (navigator.share) {
      this.sharing = true;
    } else {
      this.sharing = false;
    }
  },
  methods: {
    shareArticle() {
      if (navigator.share) {
        let item = document.getElementById("url");
        navigator.share({
          title: item.getAttribute("data-share-title"),
          text: item.getAttribute("data-share-text"),
          url: item.getAttribute("data-share-url")
        });
      } else {
        alert(
          "Veuillez changer de navigateur pour profiter de cette fonctionalité (Safari, Chrome for Android)"
        );
      }
    }
  }
};
</script>