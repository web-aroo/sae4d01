<script setup>
defineProps({
	icon: Array,
});
</script>

<template>
	<h3 class="flex gap-3 font-bold items-center">
		<font-awesome-icon :icon="icon" class="text-light-brown" />
		<slot></slot>
	</h3>
</template>
