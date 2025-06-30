<template>
	
	<NavComp />
	<DetectorComp/>
	<router-view v-slot="{ Component }">
		<transition name="fadeUp" mode="out-in">
			<component :is="Component" :key="$route.path"></component>
		</transition>
	</router-view>
	<FootNav />
</template>

<script>
	import NavComp from '@/components/NavComp.vue'
	import FootNav from '@/components/FootNav.vue'
	import DetectorComp from './components/DetectorComp.vue';
	// import Skeleton from 'primevue/skeleton';
	//import VSkeletonLoader from '@/types/v-skeleton-loader.d.ts';

	export default {
		name: 'App',
		components: {
			NavComp,
			DetectorComp,
			//Skeleton,
			//FootNav,
		}
	}
</script>

<style>
	#app {
		color: #2c3e50;
	}
	.fadeUp-enter-active,
	.fadeUp-leave-active {
		transition: opacity 0.25s, transform 0.25s;
	}
	.fadeUp-enter,
	.fadeUp-leave-to {
		opacity: 0;
		transform: translateY(30%);
	}
</style>
