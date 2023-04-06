<template>
	<div
		:style="{ 'background-image': 'url(' + image + ')' }"
		class="w-screen h-[50vh] md:h-screen bg-center before:w-full before:h-[50vh] before:md:h-full before:absolute before:bg-gradient-to-b before:from-black before:via-transparent before:to-bg-color grid items-center"
	>
		<slot></slot>
	</div>
</template>

<script setup>
defineProps({
	image: String,
});
</script>
