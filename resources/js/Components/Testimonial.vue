<template>
	<div class='grid grid-cols-2 justify-items-center md:grid-cols-1 md:gap-4 font-serif md:text-base text-xs'>
		<div class='order-last flex flex-col md:flex-col-reverse gap-2 text-center'>
			<div class='flex md:items-center md:justify-center md:text-2xl text-base mb-2'>
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
		<div class='md:order-last'>
			<img :src='`/img/testimonials/${firstName}.jpg`' :alt='firstName' class='rounded-full w-20 mb-2'>
			<h3 class='capitalize text-xs md:text-base text-center'>{{ firstName }}</h3>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		stars: Number,
		firstName: String
	}
};
</script>
