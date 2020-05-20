<template>
	<div v-if="!isCopied">
		<p @click="this.copyLink" class="center">Copier le lien</p>
	</div>
	<div v-else>
		<p>Element copié</p>
	</div>
</template>

<style>
.center {
	text-align: center;
}
</style>

<script>
export default {
	name: "ClipboardLink",
	data: function() {
		return {
			isCopied: false,
		};
	},
	methods: {
		copyLink() {
			if (navigator.clipboard) {
				let url = document.getElementById("url");
				navigator.clipboard
					.writeText(url.getAttribute("data-clipboard"))
					.then(() => (this.isCopied = true))
					.then(() =>
						setTimeout(() => {
							this.isCopied = false;
						}, 2000),
					);
			}
		},
	},
};
</script>
