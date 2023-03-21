<template>

	<div class='flex justify-center gap-4'>
		<div v-for='(step,index) in steps' class='flex gap-4' :class='index >= currentStep ? "opacity-50" : ""'>

			<div class='h-2 w-24 translate-y-7 bg-light-brown' v-if='index > 0'></div>

			<div class='grid place-items-center'>
				<div class='w-16 h-16 bg-light-brown grid place-items-center diamond-shape text-white font-serif text-2xl'>
					{{index + 1}}
				</div>
				<div class='font-serif'>
					{{step}}
				</div>
			</div>

		</div>
	</div>

</template>

<script setup>

const props = defineProps({
	currentStep: Number
});

const steps = [
	"Cart",
	"Checkout",
	"Confirmation"
];

</script>
