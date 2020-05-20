<template>
	<div class="post">
		<h2>TOUS NOS ARTICLES</h2>
		<Listing />
	</div>
</template>

<style>
.post {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}
</style>

<script>
import Listing from "@/components/Listing.vue";

export default {
	name: "Post",
	components: {
		Listing,
	},
};
</script>
