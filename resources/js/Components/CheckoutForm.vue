<template>

	<form class='grid gap-4 font-serif text-2xl'>

		<label v-for='input in inputs' :key='input' class='grid'>
			{{input}}
			<input type='text' class='font-sans'>
		</label>

		<Button>
			{{t('checkoutForm.nextStep')}}
		</Button>

	</form>

</template>

<script setup>

	import { useTranslation } from 'i18next-vue';
	import Button from '@/Components/Button.vue';

	const {t} = useTranslation();

	const inputs = [
		t('checkoutForm.firstName'),
		t('checkoutForm.lastName'),
		t('checkoutForm.emailAddress'),
		t('checkoutForm.phoneNumber')
	];

</script>
