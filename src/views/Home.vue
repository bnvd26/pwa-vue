<template>
	<div class="home">
		<div class="hero">
			<div class="intro" v-if="post">
				<h2>{{ post.title }}</h2>
				<h3>le safari urbain</h3>
				<p>{{ post.body }}</p>
				<div class="linkTo">
					<p>
						<router-link :to="`/post/${post.id}`"> lire l'article</router-link>
					</p>
					<img alt="arrow" src="../assets/Arrow.svg" class="arrow" />
				</div>
				<img alt="arrow" src="../assets/home-image.png" class="imageIntro" />
			</div>
		</div>
		<FormPost />
	</div>
</template>
<style>
.home {
	background: #1b7ff3;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
}
.hero {
	/* margin-top: -800px; */
	/* background:greenyellow; */
	display: flex;
	flex-direction: column;
	margin-left: 12%;
}

.intro {
	/* background: red; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 30px;
	text-align: left;
}
.linkTo {
	display: flex;
	flex-direction: row;
}
.imageIntro {
	height: 500px;
	width: 500px;
	margin-left: -20px;
	align-self: center;
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
		fetch(`https://jsonplaceholder.typicode.com/posts/1`)
			.then((response) => (this.state = response.json()))
			.then((json) => (this.post = json));
	},
};
</script>
