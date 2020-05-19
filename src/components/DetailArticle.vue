<template>
  <div class="article">
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
      <div @click="this.shareArticle" v-if="sharing">Partager</div>
      <div v-if="!isCopied">
        <p @click="this.copyLink">Copié</p>
      </div>
      <div v-else>
        <p>Element copié</p>
      </div>
    </div>
     <div class="articleContenaire">
      <h2> L'excellence à la française</h2>
      <div class="imageHolder">
        <div class="singleCar">
          <img alt="arrow" src="../assets/image1.png" class="firstCar" >
        </div>
 
        <div class="deusCar">
          
          <div><img alt="arrow" src="../assets/image8.png" class="secondCar" ></div>
          <div><img alt="arrow" src="../assets/image7.png" class="thirdCar" ></div>
       
        </div>
       
      </div>
      <div class="textBox">
       <p>Lorem ipsum dolor sit amet, consectetur  <br>adipiscing elit, Lorem ipsum dolor sit amet, <br> nfnoilk knezan n  njnfrz ofn njnv zonrfv nklz<br> nrklzfqknc onlj fnlk fznjlgv soj ln qfkln sglgzn<br>  k:g;nzolkn nklag n  neqnr lnfelrn ferng nhn ioqglkn n an onfong</p>
      </div>
    </div>
  </div>
  
</template>

<style>
.article{
  width: 100%;
 /*  background: yellow; */
  margin-top:100px;
}
  .articleContenaire{
    width: 100%;
   /*  background:lightcoral; */
    display : flex;
    flex-direction: column;
    justify-content: center;

  }
  .imageHolder{
    width: 100%;
    display : flex;
    flex-direction: row;
    justify-content: space-between;
   
  }
  .singleCar{
   margin-top: -20px;
   
  }

  .deusCar{
    margin-left: -50px; 
    display : flex;
    flex-direction: column;
    justify-content: center;
  }
  .secondCar{
   margin-bottom: 40px;
  }

</style>


<script>
export default {
  name: "DetailArticle",
  data: function() {
    return {
      isCopied: false,
      sharing: null
    };
  },
  mounted: function() {
    // Verfy if current navigator support Web Share API
    if (navigator.share) {
      this.sharing = true;
    } else {
      this.sharing = false;
    }
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

