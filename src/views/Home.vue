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

