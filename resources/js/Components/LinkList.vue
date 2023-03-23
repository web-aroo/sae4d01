<template>
	<div class="inline-block text-left">
		<h3 class="text-sm font-bold mb-2 font-bold md:text-base md:w-max">{{title}}</h3>
		<ul class="text-xs underline leading-relaxed md:text-sm md:w-max">
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'LinkList',
	props: {
		title: String
	}
};
</script>

<style scoped>

</style>
