<template>
  <div class="home">
    Article numéro {{ $route.params.id}}
    <div>
      <input
        id="url"
        value="http://localhost:3000/post/12"
        data-clipboard="http://localhost:3000/post/12"
        data-share-url="http://localhost:3000/post/12"
        data-share-title="Titre de l'article"
        data-share-text="User vous partage cet article"
      />
      <div v-if="!isCopied">
        <p @click="this.getEle">Copié</p>
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
    getEle() {
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
    }
  }
};
</script>

