<template>
	<button class='bg-light-brown px-16 py-4 text-white active:scale-95 font-serif text-2xl' :type='type'>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		type: String
	}
};
</script>
