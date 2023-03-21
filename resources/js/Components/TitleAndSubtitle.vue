<template>
	<div class="p-8 font-serif">
		<h1 class="text-4xl md:text-8xl text-left pb-4">{{ title }}</h1>
		<div class="flex items-center">
			<div class="h-0.5 w-8 md:w-14 bg-black mr-2"></div>
			<a href="#" class="text-base md:text-2xl underline">{{ subtitle }}</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		subtitle: String,
	},
};
</script>
