<template>
  <div class="home">
    
    <!--  <div>
        <p @click="this.notify">Notify me</p> 
      </div> -->
    
    <div class= "hero">
      <div class="intro">
          <h2>
            Reine de L’aventure 
          </h2>
          <h3>
            le safari urbain 
          </h3>
          <div class="linkTo"> 
            <p> Article</p>
            <img alt="arrow" src="../assets/Arrow.svg" class="arrow">
          </div>
          <img alt="arrow" src="../assets/home-image.png" class="imageIntro">
      </div>
    </div>

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
<style>
  @viewport {
  width: device-width;
}
  .home{
    background: #1B7FF3;
    display: flex; 
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  .hero{
    /* margin-top: -800px; */
    /* background:greenyellow; */
   display : flex;
   flex-direction: column;
   margin-left: 12%;
   
  }

  .intro{
   /* background: red; */
    display : flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px; 
    text-align: left;
  }
  .linkTo{
    display : flex;
    flex-direction: row;
  }
  .imageIntro{
    height: 500px;
    width: 500px;
    margin-left: -20px;
     align-self: center;
  }

  h2{
    
    font-family:'Open Sans' ;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 34px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }

  h3{
    margin-top: -10px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.07em;
    color: #FFFFFF;  
  }
  p{
     margin-top: -10px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;
  }
  .arrow{
    margin-top : -20px;
    margin-left : 10px;
  }

</style>
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
          this.sendNotification("Un nouvel article a été publié", json.title);
        })
        .then(() =>
          setTimeout(() => {
            this.postCreated = false;
          }, 1000)
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

