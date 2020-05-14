<template>
	<div id="app">
		<Graph></Graph>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Graph from '@/components/Graph.vue';

	@Component ({
		components: {
			Graph,
		},
	})
	export default class App extends Vue {
	}
</script>

<style>
</style>