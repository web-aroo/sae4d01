<template>
	<div :class="`h-${height}`"></div>
</template>

<script setup>
defineProps({
	height: String,
});
</script>
