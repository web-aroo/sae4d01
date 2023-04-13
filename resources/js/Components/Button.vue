<template>
	<button
		class="bg-light-brown px-8 py-4 text-white active:scale-95 font-serif md:text-2xl shadow-custom font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
		:type="type"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		type: String,
	},
};
</script>
