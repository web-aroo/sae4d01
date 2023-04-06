<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	modelValue: {
		type: Boolean,
	},
});
</script>

<template>
	<div class="bg-white text-gray-600">
		<div
			class="flex justify-between items-center text-lg py-2 px-6 cursor-pointer select-none"
			@click="$emit('update:modelValue', !modelValue)"
		>
			<span>{{ title }}</span>
			<font-awesome-icon
				:icon="['fas', 'chevron-up']"
				:rotation="modelValue ? undefined : 180"
			></font-awesome-icon>
		</div>

		<slot v-if="modelValue"></slot>
	</div>
</template>
