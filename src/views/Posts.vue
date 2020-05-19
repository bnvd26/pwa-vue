<template>
  <div class="post">
   <Listing msg=" article " /> 
   <h2> TOUS NOS ARTICLES</h2>
   

   <div class="preview first">
     <div class="object">
        <h3> Reine de l'aventure </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, </p>
        <p class="linkto"> lire l'article  <img alt="arrow" src="../assets/Arrow.svg" class="arrow"></p>
        <span></span>
      </div>
      <div>
       <img alt="arrow" src="../assets/slider-image.png" class="car">
      </div>
      
   </div>

    
    <div class="preview second">
     <div class="object">
        <h3> Reine de l'aventure </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, </p>
        <p> lire l'article  <img alt="arrow" src="../assets/Arrow.svg" class="arrow"></p>
        <span></span>
      </div>
      <div>
       <img alt="arrow" src="../assets/slider-image.png" class="car">
      </div>
    </div>
  </div>
</template>

<style>
Listing{
  float: Right;
}
.post{
  text-align: left;
}
.preview{
  margin-left: 100px;
}
.first, .second{
  display : flex;
  flex-direction: row;
}
.car{
  margin-left: 50px;
}
.post h2{
  margin-left: 50px;
  margin-bottom: 50px;
}
.post span{
  margin-top: 0;
  margin-left: 0;
}
.second{
  margin-top: 50px;
}
.linkto{
  margin-top: 20px
}
</style>
<script>

import Listing from "@/components/Listing.vue";

export default {
  name: "Post",
  components: {
    Listing
  }
};
</script>
