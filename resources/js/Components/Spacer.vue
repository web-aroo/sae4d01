<template>
	<div :class='"mt-"+height'></div>
</template>

<script setup>
defineProps({
	height: String,
});
</script>
