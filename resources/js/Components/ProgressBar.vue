<template>
	<div class="flex justify-center">
		<div
			v-for="(step, index) in steps"
			class="flex"
		>
			<div
				class="h-2 w-32 sm:w-48 md:w-64 translate-y-7 -mx-4 z-0"
				:class="index >= stepIndex + 1 ? 'bg-very-dark-brown' : 'bg-light-brown'"
				v-if="index > 0"
			></div>

			<div class="grid place-items-center z-10">
				<div
					class="w-16 h-16 grid place-items-center diamond-shape font-serif text-2xl"
					:class="index >= stepIndex + 1 ? 'bg-very-dark-brown' : 'bg-light-brown'"
				>
					{{ index + 1 }}
				</div>
				<div class="font-serif">
					{{ step }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslation } from 'i18next-vue';

defineProps({
	stepIndex: Number,
	steps: Array
});

const { t } = useTranslation();

</script>
