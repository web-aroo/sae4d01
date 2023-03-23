<template>
	<div class="flex justify-center">
		<div
			v-for="(step, index) in steps"
			class="flex"
			:class="index >= currentStep ? 'opacity-50' : ''"
		>
			<div
				class="h-2 w-24 translate-y-7 -mx-4 bg-light-brown"
				v-if="index > 0"
			></div>

			<div class="grid place-items-center">
				<div class="w-16 h-16 bg-light-brown grid place-items-center diamond-shape font-serif text-2xl">
					{{ index + 1 }}
				</div>
				<div class="font-serif text-black">
					{{ step }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslation } from 'i18next-vue';

defineProps({
	currentStep: Number,
});

const { t } = useTranslation();

const steps = [
	t('progressBar.cart'),
	t('progressBar.checkout'),
	t('progressBar.confirmation'),
];
</script>
