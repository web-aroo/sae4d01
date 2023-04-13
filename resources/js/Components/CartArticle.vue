<template>
	<div
		class="grid grid-cols-1 sm:grid-cols-[auto_1fr] bg-very-dark-brown font-serif"
	>
		<div class="hidden sm:block w-48 aspect-square">
			<img :src="image" class="w-full h-full object-cover" />
		</div>
		<div class="p-4 grid gap-2">
			<div class="flex justify-between text-2xl sm:text-3xl font-bold">
				<div>{{ title }}</div>
				<div>{{ price }}&nbsp;€</div>
			</div>
			<div>
				<div>
					<font-awesome-icon icon="fa-solid fa-calendar-days" />
					{{ date }}
				</div>
				<div>
					<font-awesome-icon icon="fa-solid fa-clock" />
					{{ time }}
				</div>
				<div>
					<font-awesome-icon icon="fa-solid fa-users" />
					{{ playerCount }}
				</div>
			</div>
			<div class="flex flex-row-reverse gap-4">
				<button @click="deleteArticle">
					<font-awesome-icon size="2x" icon="fa-solid fa-trash-can" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import { router } from '@inertiajs/vue3';

const props = defineProps({
	image: String,
	title: String,
	date: String,
	time: String,
	playerCount: Number,
	price: Number,
	id: Number,
});

const deleteArticle = () => {
	router.patch('/order', {
		availability_id: props.id,
	});
};
</script>
