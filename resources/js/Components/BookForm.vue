<script setup>
import { ref, computed, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { DatePicker } from 'v-calendar';
import Button from './Button.vue';
import {
	add,
	isSameDay,
	isEqual,
	max,
	endOfDay,
	eachDayOfInterval,
	parseISO,
} from 'date-fns';
import { uniqBy } from 'lodash';
import 'v-calendar/style.css';
import BookBlock from './BookBlock.vue';

const { reviews, rating, availabilities } = defineProps({
	reviews: {
		type: Number,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	availabilities: {
		type: Array,
		default() {
			// This is mocked data, it needs to be replaced from the backend once it's done
			const today = new Date();
			return Array.from({ length: 40 }, (_, i) => ({
				start_at: add(today, {
					days: Math.floor(i / 2) * 2,
				}),
				price_formula:
					i % 2 === 0
						? { id: 3, name: 'Web', price: 59 }
						: { id: 4, name: 'Android', price: 69 },
			}));
		},
	},
});

const openDate = ref(false);
const openTime = ref(false);
const openPrice = ref(false);
const today = new Date();
const date = ref(null);
const time = ref(null);
const selectedAvailability = ref(null);

const maxDate = computed(() => {
	const maxAvailability = max(
		availabilities.map((a) => parseISO(a.start_at))
	);
	return endOfDay(maxAvailability ? maxAvailability : today);
});
const disabledDates = computed(() => {
	return eachDayOfInterval({
		start: today,
		end: maxDate.value,
	}).filter((d) => {
		return !availabilities.some((a) => isSameDay(parseISO(a.start_at), d));
	});
});
const availabilitiesForTheDay = computed(() => {
	if (!date.value) {
		return [];
	}
	return availabilities.filter((a) =>
		isSameDay(parseISO(a.start_at), date.value)
	);
});
const availableTimes = computed(() => {
	if (!availabilitiesForTheDay.value.length) {
		return [];
	}
	return uniqBy(availabilitiesForTheDay.value, (a) =>
		parseISO(a.start_at).getTime()
	);
});
const availabilitiesForTheTime = computed(() => {
	if (!time.value) {
		return [];
	}
	return availabilitiesForTheDay.value.filter((a) =>
		isEqual(parseISO(a.start_at), time.value)
	);
});
const lowestPrice = computed(() => {
	return Math.min(...availabilities.map((a) => a.price_formula.price));
});

watch(date, (newDate) => {
	if (!newDate) {
		return;
	}
	openDate.value = false;
	openTime.value = true;
	openPrice.value = false;
	time.value = null;
	selectedAvailability.value = null;
});
watch(time, (newTime) => {
	if (!newTime) {
		return;
	}
	openDate.value = false;
	openTime.value = false;
	openPrice.value = true;
	selectedAvailability.value = null;
});

const addToCart = () => {
	router.patch('/order', {
		availability_id: selectedAvailability.value.id,
	});
};
</script>

<template>
	<div class="bg-very-dark-brown p-6 md:min-w-[20rem] max-w-md">
		<h2 class="text-xl font-bold">
			{{ $t('bookForm.title', { adventurePrice: lowestPrice }) }}
		</h2>
		<p>
			<font-awesome-icon
				:icon="['fas', 'star']"
				class="text-light-brown"
			/>
			{{
				rating.toLocaleString(undefined, {
					maximumFractionDigits: 2,
				})
			}}
			&bull; {{ $t('bookForm.reviews', { count: reviews }) }}
		</p>
		<div class="flex flex-col gap-2 pt-4">
			<BookBlock v-model="openDate" :title="$t('bookForm.date')">
				<div class="flex justify-center">
					<DatePicker
						v-model="date"
						:min-date="new Date()"
						:max-date="maxDate"
						:disabled-dates="disabledDates"
						show-weeknumbers
						borderless
					/>
				</div>
			</BookBlock>
			<BookBlock v-model="openTime" :title="$t('bookForm.time')">
				<div class="p-2 gap-2 grid grid-cols-3">
					<button
						class="border-2 border-gray-900 text-center py-4 text-gray-900"
						v-for="hour in availableTimes"
						:key="hour"
						@click="time = parseISO(hour.start_at)"
					>
						{{
							parseISO(hour.start_at).toLocaleTimeString(
								undefined,
								{
									hour: '2-digit',
								}
							)
						}}
					</button>
				</div>
			</BookBlock>
			<BookBlock v-model="openPrice" :title="$t('bookForm.priceFormula')">
				<div class="py-3 px-6 flex flex-col gap-2">
					<label
						v-for="availability in availabilitiesForTheTime"
						:key="availability.price_formula.id"
					>
						<input
							type="radio"
							name="price_formula"
							v-model="selectedAvailability"
							:value="availability"
						/>
						{{ availability.price_formula.name }}&nbsp;&dash;
						{{ availability.price_formula.price }}&nbsp;€
					</label>
				</div>
			</BookBlock>
		</div>
		<div class="flex justify-center pt-5">
			<Button
				:disabled="!(time && selectedAvailability)"
				@click="addToCart"
				class="flex items-center text-base"
			>
				<font-awesome-icon
					:icon="['fas', 'shopping-cart']"
					class="mr-2"
				/>
				{{ $t('bookForm.goToCart') }}
			</Button>
		</div>
	</div>
</template>
