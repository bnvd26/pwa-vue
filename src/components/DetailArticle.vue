<template>
  <div class="home">
    Article numéro {{ $route.params.id}}
    <div>
      <input
        id="url"
        value="http://localhost:8080/post/12"
        data-clipboard="http://localhost:8080/post/12"
        data-share-url="http://localhost:8080/post/12"
        data-share-title="Titre de l'article"
        data-share-text="User vous partage cet article"
      />
      <div @click="this.shareArticle">Partager</div>
      <div v-if="!isCopied">
        <p @click="this.copyLink">Copié</p>
      </div>
      <div v-else>
        <p>Element copié</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailArticle",
  data: function() {
    return {
      isCopied: false
    };
  },
  methods: {
    copyLink() {
      if (navigator.clipboard) {
        let url = document.getElementById("url");
        navigator.clipboard
          .writeText(url.getAttribute("data-clipboard"))
          .then(() => (this.isCopied = true))
          .then(() =>
            setTimeout(() => {
              this.isCopied = false;
            }, 2000)
          );
      }
    },
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

