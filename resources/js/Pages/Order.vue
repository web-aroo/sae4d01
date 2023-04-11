<template>

	<PageLayout>

		<Container class='mt-32'>

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
							{{ t(step) }}
						</div>
					</div>
				</div>
			</div>

			<Spacer height='16'></Spacer>

			<Title2>{{ t(steps[stepIndex]) }}</Title2>

			<Spacer height='16'></Spacer>

			<div v-if='availabilities.length === 0' class='grid place-items-center text-2xl'>
				<p>{{ t('cart.empty') }}</p>
			</div>

			<div v-else-if='stepIndex === 0'>
				<div class='grid gap-4'>
					<CartArticle
						v-for='availability in availabilities'
						:title='availability.adventure.name'
						:image='availability.adventure.image_url'
						:date='new Date(availability.start_at).toLocaleDateString()'
						:time='new Date(availability.start_at).toLocaleTimeString()'
						:price='availability.price_formula.price'
						:player-count='availability.price_formula.player_count'
					/>
				</div>

				<Spacer height='8'></Spacer>

				<div class='grid place-items-end gap-4'>
					<div class='text-2xl'>
						Total : {{ getTotalPrice() }}€
					</div>
				</div>
			</div>

			<div v-else-if='stepIndex === 1'>
				<form class='grid gap-4 font-serif text-2xl'>

					<Error v-if='error'>
						{{ error }}
					</Error>

					<label class='grid'>
						<div class='flex gap-2'>
							{{ t('detailsForm.firstName') }}
							<div v-if='firstNameValid'>
								✔️
							</div>
						</div>

						<input type='text' class='font-sans text-black' v-model='firstName'>
					</label>

					<label class='grid'>
						<div class='flex gap-2'>
							{{ t('detailsForm.lastName') }}
							<div v-if='lastNameValid'>
								✔️
							</div>
						</div>
						<input type='text' class='font-sans text-black' v-model='lastName'>
					</label>

					<label class='grid'>
						<div class='flex gap-2'>
							{{ t('detailsForm.emailAddress') }}
							<div v-if='emailAddressValid'>
								✔️
							</div>
						</div>
						<input type='email' class='font-sans text-black' v-model='emailAddress'>
					</label>

					<label class='grid'>
						<div class='flex gap-2'>
							{{ t('detailsForm.phoneNumber') }}
							<div v-if='phoneNumberValid'>
								✔️
							</div>
						</div>
						<input type='tel' class='font-sans text-black' v-model='phoneNumber'>
					</label>

				</form>
			</div>

			<div v-else-if='stepIndex === 2'>
				<div class='grid gap-4'>

					<div class='bg-dark-brown p-3 flex gap-3 items-center cursor-pointer' @click='checkoutPaypal()'>
						<font-awesome-icon icon='fa-brands fa-paypal' size='3x' style='color: #ffffff;' class='w-16' />
						<div class='bg-white w-0.5 h-10'></div>
						<p class='text-2xl text-white'>Paypal</p>
					</div>

					<details>

						<summary class='bg-dark-brown p-3 items-center flex justify-between cursor-pointer'>
							<div class='flex gap-3 items-center'>
								<font-awesome-icon icon='fa-solid fa-building-columns' size='3x' style='color: #ffffff;'
												   class='w-16' />
								<div class='bg-white w-0.5 h-10'></div>
								<p class='text-2xl text-white'>{{ t('paymentMethod.blueCard') }}</p>
							</div>
							<div class='Chevron duration-200'>
								<font-awesome-icon icon='fa-solid fa-chevron-up' size='3x' style='color: #ffffff;'
												   class='w-16' />
							</div>
						</summary>

						<form @submit.prevent='checkoutBlueCard()' class='bg-dark-brown grid p-3 gap-3 text-white'>

							<Error v-if='error'>
								{{ error }}
							</Error>

							<label class='grid'>
								<div class='flex gap-2'>
									<div class='font-serif text-xl'>{{ t('paymentMethod.cardHolder') }}</div>
									<div v-if='cardHolderValid'>
										✔️
									</div>
								</div>
								<input type='text' name='cardHolder' class='text-black font-sans' placeholder='John Doe'
									   v-model='cardHolder'>
							</label>
							<label class='grid'>
								<div class='flex gap-2'>
									<div class='font-serif text-xl'>{{ t('paymentMethod.cardNumber') }}</div>
									<div v-if='cardNumberValid'>
										✔️
									</div>
								</div>
								<input type='text' name='cardNumber' class='text-black font-sans'
									   placeholder='1234 5678 9012 3456' v-model='cardNumber'>
							</label>
							<div class='flex justify-between'>
								<label class='grid'>
									<div class='flex gap-2'>
										<div class='font-serif text-xl'>{{ t('paymentMethod.expirationDate') }}</div>
										<div v-if='expirationDateMonthValid && expirationDateYearValid'>
											✔️
										</div>
									</div>
									<div>
										<input type='number' name='expirationDateMonth'
											   class='w-16 text-black font-sans' max='12' placeholder='MM'
											   v-model='expirationDateMonth'>
										/
										<input type='number' name='expirationDateYear' class='w-16 text-black font-sans'
											   max='99' placeholder='YY' v-model='expirationDateYear'>
									</div>
								</label>
								<label class='grid'>
									<div class='flex gap-2'>
										<div class='font-serif text-xl'>{{ t('paymentMethod.cvc') }}</div>
										<div v-if='cvcValid'>
											✔️
										</div>
									</div>
									<input type='number' name='cvc' class='w-16 text-black font-sans' max='9999'
										   placeholder='1234' v-model='cvc'>
								</label>
							</div>
							<Button type='submit'>
								{{ t('paymentMethod.proceedToPayment') }}
							</Button>
						</form>
					</details>
				</div>
			</div>

			<div v-else-if='stepIndex === 3'>
				<div class='grid gap-4 justify-center text-center'>
					<p>{{ t('confirmation.message') }}</p>
					<Button @click='router.get("/")'>
						{{ t('confirmation.backToHome') }}
					</Button>
				</div>
			</div>

			<Spacer height='8'></Spacer>

			<div class='flex justify-between' v-if='availabilities.length > 0'>
				<Button @click='previousStep()' v-if='stepIndex > 0 && stepIndex < 3'>
					{{ t('cart.previousStep') }}
				</Button>
				<div v-else></div>

				<Button @click='nextStep()' v-if='stepIndex < 2'>
					{{ t('cart.nextStep') }}
				</Button>
				<div v-else></div>
			</div>

		</Container>

	</PageLayout>

</template>
<script setup>
import Spacer from '@/Components/Spacer.vue';
import Button from '@/Components/Button.vue';
import { useTranslation } from 'i18next-vue';
import { ref, watch } from 'vue';
import Title2 from '@/Components/Title2.vue';
import Container from '@/Components/Container.vue';
import PageLayout from '@/Components/layouts/PageLayout.vue';
import CartArticle from '@/Components/CartArticle.vue';
import Error from '@/Components/Error.vue';
import { router } from '@inertiajs/vue3';

const { t } = useTranslation();

const stepIndex = ref(0);

const steps = [
	"progressBar.cart",
	"progressBar.details",
	"progressBar.payment",
	"progressBar.confirmation"
];

function checkoutPaypal() {
	const data = {
		first_name: firstName.value,
		last_name: lastName.value,
		phone_number: phoneNumber.value,
		email_address: emailAddress.value,
		availabilities: props.availabilities
	};

	fetch('/checkout', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => {
		if (response.ok) {
			nextStep();
		}
	});
}

function checkoutBlueCard() {

	if (!isPaymentFormValid()) {
		error.value = t('paymentMethod.error');
		return;
	}
	error.value = null;

	const data = {
		first_name: firstName.value,
		last_name: lastName.value,
		phone_number: phoneNumber.value,
		email_address: emailAddress.value,
		card_holder: cardHolder.value,
		card_number: cardNumber.value,
		expiration_date_month: expirationDateMonth.value,
		expiration_date_year: expirationDateYear.value,
		cvc: cvc.value,
		availabilities: props.availabilities
	};

	fetch('/checkout', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => {
		if (response.ok) {
			nextStep();
		}
	});

}

function nextStep() {

	if (stepIndex.value === 1 && !isDetailsFormValid()) {
		error.value = t('detailsForm.error');
		return;
	}

	if (stepIndex.value < steps.length - 1) stepIndex.value++;
	error.value = null;
}

function previousStep() {
	if (stepIndex.value > 0) stepIndex.value--;
	error.value = null;
}

const props = defineProps({
	availabilities: Array
});

const firstName = ref('');
const firstNameValid = ref(false);

const lastName = ref('');
const lastNameValid = ref(false);

const emailAddress = ref('');
const emailAddressValid = ref(false);

const phoneNumber = ref('');
const phoneNumberValid = ref(false);

const cardHolder = ref('');
const cardHolderValid = ref(false);

const cardNumber = ref('');
const cardNumberValid = ref(false);

const expirationDateMonth = ref('');
const expirationDateMonthValid = ref(false);

const expirationDateYear = ref('');
const expirationDateYearValid = ref(false);

const cvc = ref('');
const cvcValid = ref(false);

const error = ref(null);

watch(firstName, (value) => {
	if (value.length > 0) {
		firstNameValid.value = true;
		return;
	}
	firstNameValid.value = false;
});

watch(lastName, (value) => {
	if (value.length > 0) {
		lastNameValid.value = true;
		return;
	}
	lastNameValid.value = false;
});

watch(emailAddress, (value) => {
	const emailAddressRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!!value.match(emailAddressRegex)) {
		emailAddressValid.value = true;
		return;
	}
	emailAddressValid.value = false;
});

watch(phoneNumber, (value) => {
	const phoneNumberRegex = /^0[1-9](?:[\-\s]?(\d{2})){4}$/;
	if (!!value.match(phoneNumberRegex)) {
		phoneNumberValid.value = true;
		return;
	}
	phoneNumberValid.value = false;
});

watch(cardHolder, (value) => {
	if (value.length > 0) {
		cardHolderValid.value = true;
		return;
	}
	cardHolderValid.value = false;
});

watch(cardNumber, (value) => {
	const cardNumberRegex = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
	if (!!value.match(cardNumberRegex)) {
		cardNumberValid.value = true;
		return;
	}
	cardNumberValid.value = false;
});

watch(expirationDateMonth, (value) => {
	const expirationDateMonthRegex = /^(0[1-9]|1[0-2])$/;
	if (!!value.toString().match(expirationDateMonthRegex)) {
		expirationDateMonthValid.value = true;
		return;
	}
	expirationDateMonthValid.value = false;
});

watch(expirationDateYear, (value) => {
	const expirationDateYearRegex = /^([0-9]{2})$/;
	if (!!value.toString().match(expirationDateYearRegex)) {
		expirationDateYearValid.value = true;
		return;
	}
	expirationDateYearValid.value = false;
});

watch(cvc, (value) => {
	const cvcRegex = /^\d{3,4}$/;
	if (!!value.toString().match(cvcRegex)) {
		cvcValid.value = true;
		return;
	}
	cvcValid.value = false;
});

function isDetailsFormValid() {

	const inputsStatus = [
		firstNameValid.value,
		lastNameValid.value,
		phoneNumberValid.value,
		emailAddressValid.value
	];

	return inputsStatus.every(value => value === true);
}

function isPaymentFormValid() {

	const inputsStatus = [
		cardHolderValid.value,
		cardNumberValid.value,
		expirationDateMonthValid.value,
		expirationDateYearValid.value,
		cvcValid.value
	];

	return inputsStatus.every(value => value === true);
}

function getTotalPrice() {
	let total = 0;
	props.availabilities.forEach(availability => {
		total += availability.price_formula.price;
	});
	return total;
}

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
