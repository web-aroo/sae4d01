<template>
	<div class='md:flex md:flex-row-reverse md:items-center'>
		<div class='w-full aspect-video border-8 border-very-dark-brown md:border-0 md:w-80 md:aspect-square'>
			<img class='object-cover w-full h-full' :src='image' :alt='title'>
		</div>
		<div class='bg-very-dark-brown p-6'>
			<div class='flex justify-between p-3'>
				<difficulty-meter :difficulty='difficulty'></difficulty-meter>
				<Button class='!text-sm !p-2 !px-8 md:hidden'>{{ $t('adventureCard.bookNow') }}</Button>
			</div>
			<div class='flex flex-col items-center m-2'>
				<h3 class='font-bold md:text-3xl'>
					{{ title }}
				</h3>
				<separator class='!h-px'></separator>

				<div class='grid grid-cols-3 grid-rows-2 text-xs'>
					<div class='flex items-center justify-center'>
					<span class='text-light-brown mx-2'>
						<font-awesome-icon :icon="['fas', 'users']" />
					</span>
						<span>{{ minPlayerCount }} - {{ maxPlayerCount }}</span>
					</div>
					<div class='flex items-center justify-center mx-2'>
					<span class='text-light-brown mx-2'>
						<font-awesome-icon :icon="['fas', 'clock']" />
					</span>
						<span> {{ duration }} </span>
					</div>
					<div class='flex items-center justify-center mx-2'>
					<span class='text-light-brown mx-2'>
						<font-awesome-icon :icon="['fa', 'location-dot']" />
					</span>
						<span> {{ location }} </span>
					</div>
				</div>

				<p class='text-xs text-justify m-3 md:w-80 md:text-sm'>
					<slot name='description'></slot>
				</p>
				<Button class='!text-sm !p-2 !px-8 hidden md:block md:!text-base md:m-3'>{{ $t('adventureCard.bookNow') }}</Button>

			</div>

		</div>

	</div>

</template>

<script>
import KeyPoints from '@/Components/KeyPoints.vue';
import DifficultyMeter from '@/Components/DifficultyMeter.vue';
import Button from '@/Components/Button.vue';
import Separator from '@/Components/Separator.vue';

export default {
	name: 'AdventureCard',
	components: { Separator, Button, DifficultyMeter, KeyPoints },
	props: {
		difficulty: Number,
		minPlayerCount: Number,
		maxPlayerCount: Number,
		duration: Number,
		location: String,
		title: String,
		image: String
	}
};
</script>

