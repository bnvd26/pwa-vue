<template>
	<div class="home">
		<div class="hero">
			<div class="intro" v-if="post">
				<h2>{{ post.title }}</h2>
				<h3>le safari urbain</h3>
				<p class="extract">{{ post.body }}</p>
				<div class="linkTo">
					<p>
						<router-link :to="`/post/${post.id}`"> lire l'article</router-link>
					</p>
					<img alt="arrow" src="../assets/Arrow.svg" class="arrow" />
				</div>
       
			</div>
       <div class="interaction">
          <img alt="arrow" src="../assets/home-image.png" class="imageIntro" />
          <FormPost />
        </div>
		</div>
		
	</div>
</template>
<style>
.home {

	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
  justify-content: center;
}
.hero {
	display: flex;
	flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin-top : 100px
}

.intro {
	display: flex;
	flex-direction: column;
	justify-content: center;
  
	text-align: left;
}
.linkTo {
	display: flex;
	flex-direction: row;
}
.imageIntro {
	align-self: center;
}

.interaction{
  display : flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 30px ;
  padding-bottom: 30px;
  
}
h2 {
	font-family: "Open Sans";
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	line-height: 34px;
	letter-spacing: 0.04em;
	color: #ffffff;
}

h3 {
	margin-top: -10px;
	font-family: "Open Sans";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 0.07em;
	color: #ffffff;
}
p,
a {
	margin-top: -10px;
	font-family: "Open Sans";
	font-style: normal;
	font-weight: 300;
	font-size: 15px;
	line-height: 20px;
	color: #ffffff;
}

label,
input {
	font-family: "Open Sans";
	font-style: normal;
	font-weight: 300;
	font-size: 15px;
	line-height: 20px;
	color: #ffffff;
}
.arrow {
	margin-top: -20px;
	margin-left: 10px;
}

@media (min-width: 700px) {

.intro{
 width: 50%;
}

}
@media (max-width: 700px) {
 .extract {
   display: none;
 }
 .interaction{
  display : flex;
  flex-direction: column;
  justify-content: space-around;

  
}
}
</style>
<script>
import FormPost from "../components/FormPost";
export default {
	name: "Home",
	components: { FormPost },
	data() {
		return {
			post: null,
		};
	},
	created() {
		fetch(`https://my-json-server.typicode.com/benads/pwa-vue/posts/1`)
			.then((response) => (this.state = response.json()))
			.then((json) => (this.post = json));
	},
};
</script>
