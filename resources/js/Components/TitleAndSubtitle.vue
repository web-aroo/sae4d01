<template>
	<div class="p-8 font-serif">
		<Title>{{ title }}</Title>
		<div class="flex items-center">
			<div class="h-0.5 w-8 md:w-14 bg-black mr-2"></div>
			<a href="#" class="text-base md:text-2xl underline">
				{{ subtitle }}
			</a>
		</div>
	</div>
</template>

<script>
import Title from './Title.vue';
export default {
	components: {
		Title,
	},
	props: {
		title: String,
		subtitle: String,
	},
};
</script>
