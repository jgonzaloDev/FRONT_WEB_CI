<template>
	<div class="posts container">
		<CardComp
			class="mt-4 mx-auto single-spot"
			:picture="baseUrl + 'post1.jpg'"
			parrafo="Hermosa Ciudad"
			:header="{
				name: 'Diego Bueno',
				picture: baseUrl + 'profile1.jpg',
			}"
			:likes="true" />
		<CardComp
			class="mt-4 mx-auto single-spot"
			:picture="baseUrl + 'post2.jpg'"
			parrafo="Gran hazaña de Aliaaaaaaaaanza!!!"
			:header="{
				name: 'Diego Bueno',
				picture: baseUrl + 'profile1.jpg',
			}"
			:likes="true" />
		<CardComp
			class="mt-4 mx-auto single-spot"
			:picture="baseUrl + 'post3.jpg'"
			parrafo="Tarapoto es lo máximo"
			:header="{
				name: 'Diego Bueno',
				picture: baseUrl + 'profile1.jpg',
			}"
			:likes="true" />
	</div>
</template>
<script>
	import CardComp from '../components/CardComp.vue'
	const baseUrl = import.meta.env.VITE_BASE_IMAGE_URL
	export default {
		name: 'PostsView',
		components: {
			CardComp,
		},
		data() {
			return {
				baseUrl,
			}
		},
	}
</script>
<style scoped>
	.posts {
		min-height: 60vh;
		max-width: 895px;
		margin: auto;
	}
	.single-spot {
		max-width: 550px;
	}
	.logo {
		max-width: 115px;
		padding: 0.2rem;
	}
</style>
