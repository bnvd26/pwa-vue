<template>
	<div class="article">
		<div v-if="post">
			<div class="articleContenaire">
				<h2>{{ post.title }}</h2>
			<div class="largeScreen"> 
          <div class="imageHolder">
            <div class="singleCar">
              <img alt="car" src="../assets/image1.png" class="firstCar" />
              <img alt="car" src="../assets/image42.png" class="firstCarLarge" />
            </div>

            <div class="deusCar">
              <div>
                <img alt="arrow" src="../assets/image8.png" class="secondCar" />
              </div>
              <div>
                <img alt="arrow" src="../assets/image7.png" class="thirdCar" />
              </div>
            </div>
          </div>
          <div class="textBox">
            <p>{{ post.body }}</p>
          </div>
        </div>
			</div>

			<ShareLink />
			<ClipboardLink />
			<input
				id="url"
				type="hidden"
				v-bind:data-clipboard="currentPathname"
				v-bind:data-share-url="currentPathname"
				v-bind:data-share-title="post.title"
				data-share-text="User vous partage cet article"
			/>
		</div>
  
	</div>
</template>

<style>
.article {
	width: 100%;
	margin-top: 100px;
}
.articleContenaire {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.imageHolder {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.singleCar {
	margin-top: -20px;
}

.deusCar {
	margin-left: -50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.secondCar {
	margin-bottom: 40px;
}
@media (max-width: 700px) {
.firstCarLarge{
    display: none; 
  }

  .articleContenaire h2{

    text-align: center;
  }

}
@media (min-width: 700px) {
	
  .largeScreen{
    display: flex;
    flex-direction: row;
  }

  .firstCar{
    display: none; 
  }
  .firstCarLarge{
    display: block; 
    height : 600px;
    width: 600px;
  }
  
  .textBox{
    margin-top : 25%;
   
  }
  .deusCar{
    flex-direction : row;
    justify-content: space-around;
    margin-top: -10%;
  }
  
  .articleContenaire h2{
    margin-left: 5%;
  }
  .imageHolder{
    flex-direction: column;
    margin-left: 5%;
    margin-top: -10%;
  }
}
</style>

<script>
import ShareLink from "./ShareLink";
import ClipboardLink from "./ClipboardLink";
export default {
	name: "DetailArticle",
	components: {
		ShareLink,
		ClipboardLink,
	},
	data: function() {
		return {
			post: null,
			currentPathname: window.location,
		};
	},
	created() {
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
			.then((response) => (this.state = response.json()))
			.then((json) => (this.post = json));
	},
};
</script>
