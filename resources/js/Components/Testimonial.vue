<template>
	<div class='grid place-items-center text-xs text-center max-w-xs gap-2 md:text-base md:max-w-2xl'>
		<img :src='imageUrl' :alt='name' class='rounded-full w-20'>
		<h3 class='capitalize text-xs md:text-base text-center'>{{ name }}</h3>
		<div>
			<span
				v-for='index in [0, 1, 2, 3, 4]'
				:class="{
					'text-light-brown': true,
					'opacity-30': index > star-1,
				}"
			>
				<font-awesome-icon :icon="['fas', 'star']" />
			</span>
		</div>

		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		stars: Number,
		name: String,
		imageUrl: String
	}
};
</script>
