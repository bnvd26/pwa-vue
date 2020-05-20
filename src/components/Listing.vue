<template>
	<div>
		<div v-for="post in posts" :key="post.id">
			<CardArticle
				v-bind:title="post.title"
				v-bind:id="post.id"
				v-bind:preview="post.preview"
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
		fetch("https://my-json-server.typicode.com/benads/pwa-vue/posts")
			.then((response) => response.json())
			.then((json) => (this.posts = json));
	},
};
</script>
