<template>
	<div class="post">
		<h2>TOUS NOS ARTICLES</h2>
		<Listing />
	</div>
</template>

<style>
.post {
	text-align: left;
	width: 100%;
	margin-left: 50%;
	transform: translateX(-50%);
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
