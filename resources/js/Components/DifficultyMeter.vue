<template>
	<div class="flex items-center justify-center">
			<span
				v-for="index in [0, 1, 2, 3, 4]"
				:key="index"
				:class="{
					'text-light-brown': true,
					'opacity-30': index > difficulty,
				}"
			>
				<font-awesome-icon :icon="['fas', 'key']" />
			</span>
	</div>
</template>

<script>
export default {
	props: {
		difficulty: Number,
	}
};
</script>
