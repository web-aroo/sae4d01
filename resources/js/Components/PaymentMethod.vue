<template>

	<a v-if='link' :href='link'>
		<div class='bg-dark-brown p-3 flex gap-3 items-center'>
			<font-awesome-icon :icon='icon' size='3x' style='color: #ffffff;' class='w-16' />
			<div class='bg-white w-0.5 h-10'></div>
			<p class='text-2xl text-white'>{{ title }}</p>
		</div>
	</a>
	<details v-else>
		<summary class='bg-dark-brown p-3 items-center flex justify-between'>
			<div class='flex gap-3 items-center'>
				<font-awesome-icon :icon='icon' size='3x' style='color: #ffffff;' class='w-16' />
				<div class='bg-white w-0.5 h-10'></div>
				<p class='text-2xl text-white'>{{ title }}</p>
			</div>
			<div class='Chevron duration-200'>
				<font-awesome-icon icon='fa-solid fa-chevron-up' size='3x' style='color: #ffffff;' class='w-16' />
			</div>
		</summary>
		<form class='bg-dark-brown grid p-3 gap-3 text-white' method='post'>
			<label class='grid'>
				<div class='font-serif text-xl'>{{ t('paymentMethod.cardHolder') }}</div>
				<input type='text' name='cardHolder' class='text-black' placeholder='John Doe'>
			</label>
			<label class='grid'>
				<div class='font-serif text-xl'>{{ t('paymentMethod.cardNumber') }}</div>
				<input type='text' name='cardNumber' class='text-black' placeholder='1234 5678 9012 3456'>
			</label>
			<div class='flex justify-between'>
				<label class='grid'>
					<div class='font-serif text-xl'>{{ t('paymentMethod.expirationDate') }}</div>
					<div>
						<input type='number' name='expirationDateMonth' class='w-16 text-black' max='12' placeholder='MM'>
						/
						<input type='number' name='expirationDateYear' class='w-16 text-black' max='99' placeholder='YY'>
					</div>
				</label>
				<label class='grid'>
					<div class='font-serif text-xl'>{{ t('paymentMethod.cvc') }}</div>
					<input type='number' name='cvc' class='w-16 text-black' max='9999' placeholder='1234'>
				</label>
			</div>
			<Button type='submit'>
				{{ t('paymentMethod.proceedToPayment') }}
			</Button>
		</form>
	</details>

</template>

<script setup>

import { useTranslation } from 'i18next-vue';
import Button from '@/Components/Button.vue';

const { t } = useTranslation();

defineProps({
	link: String,
	title: String,
	icon: String
});

</script>

<style scoped lang='scss'>

details[open] {

	& .Chevron {
		transform: rotate(-180deg);
	}

}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type=number] {
	-moz-appearance: textfield;
}

</style>
