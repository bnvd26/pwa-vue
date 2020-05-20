<template>
	<div>
		<div v-for="post in posts" :key="post.id">
			<CardArticle
				v-bind:title="post.title"
				v-bind:id="post.id"
				v-bind:body="post.body"
			></CardArticle>
		</div>
	</div>
</template>

<script>
import CardArticle from "./CardArticle";
export default {
	name: "Listing",
	components: {
		CardArticle,
	},
	data() {
		return { posts: null };
	},
	props: {},
	created() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => (this.posts = json));
	},
};
</script>
