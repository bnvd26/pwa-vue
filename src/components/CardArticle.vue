<template>
<<<<<<< HEAD
 
		<div class="preview">
			<div class="object">
				<h3>{{ title }}</h3>
				<p >{{ body }},</p>
				<p class="linkto">
					<router-link :to="`/post/${id}`"> lire l'article</router-link>
				</p>
				
				<span></span>
			</div>
			<div>
				<img alt="arrow" src="../assets/slider-image.png" class="car" />
			</div>
=======
	<div class="preview">
		<div class="object">
			<h3>{{ title }}</h3>
			<p>{{ preview }},</p>
			<p class="linkto">
				<router-link :to="`/post/${id}`"> lire l'article</router-link>
			</p>

			<span></span>
>>>>>>> 08902baf3e96961e4f75add5ecc1298cb3aec63d
		</div>
	
</template>

<style>

.preview {
	justify-content: center;
	padding: 20px;
	
}
.first,
.second {
	display: flex;
	flex-direction: row;
}
.car {
	margin-left: 50px;
}
.post h2 {
	margin-left: 50px;
	margin-bottom: 50px;
}
.post span {
	margin-top: 0;
	margin-left: 0;
}
.linkto {
	margin-top: 20px;
}
</style>

<script>
export default {
	name: "CardArticle",
	props: {
		title: String,
		preview: String,
		id: Number,
	},
};
</script>
