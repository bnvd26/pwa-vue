<template>
  <div id="app">
    <div class="header">

      <div class="logo" >
        <img alt="4L logo" src="./assets/logo.png">
      </div>
       <span></span>
      <div id="nav">
        <button> <router-link to="/"><img alt="home" src="./assets/home.svg" class="icon" ></router-link> </button>
        <button class="buttonArticle"> <router-link to="/posts"><img alt="article" src="./assets/article.svg" class="icon" ></router-link> </button>
        <button> <router-link to="/post/12"><img alt="trophy" src="./assets/trophy.svg" class="icon trophy"></router-link> </button>
      </div>
   
      
    </div>
      <router-view />
     
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /*  background: orchid; */
  overflow: hidden;
}


  .header{

    display: flex; 
    flex-direction: row;
    align-content: center;
    padding:  30px  0 0 0;
  }
 .logo{ 
    margin-left: 35px;
    margin-right: 30%;
 } 
  button{
    background: #1B7FF3;
    border: 1px solid rgba(27, 127, 243, 0.2);
    box-sizing: border-box;
    box-shadow: 6px 6px 23px #2C87F3, -6px -6px 16px rgba(0, 94, 204, 0.33);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    padding: 2px;
    outline: none;
    
  }
  .buttonArticle{
    margin-left: 30px;
    margin-right: 20px;
  }
  button:hover{
    background: white;
    margin-top: 5px;
  }
  .icon.trophy{
    margin-top: 7px;
  }
  
  /* .titleHeader{
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    position: absolute;
    left: 80%; 
    top: 40px;
    right : 10px;
  } */
  span {
    position: absolute;
    width: 80%;
    height: 0.5px;
    background: white;
    margin-top: 80px;
    margin-left: 130px;
   
  }

  #nav {
   
    overflow: hidden;
    display: flex; 
    flex-direction: row;
    margin-top: 20px;
    margin-right: 20px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
