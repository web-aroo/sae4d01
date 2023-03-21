<script setup>
import { useTranslation } from 'i18next-vue';
import { computed } from 'vue';

const props = defineProps({
	difficulty: Number,
	minPlayerCount: Number,
	maxPlayerCount: Number,
	duration: Number,
});

const { t } = useTranslation();

const difficultyStr = computed(() => {
	switch (props.difficulty) {
		case 1:
		case 2:
			return t('keyPoints.difficulty.easy');
		case 3:
		case 4:
			return t('keyPoints.difficulty.medium');
		case 5:
			return t('keyPoints.difficulty.hard');
		default:
			return t('keyPoints.difficulty.unknown');
	}
});
</script>

<template>
	<div class="grid grid-cols-3 grid-rows-2 uppercase">
		<div class="flex items-center justify-center">
			<span
				v-for="index in [0, 1, 2, 3, 4]"
				:key="index"
				:class="{
					'text-light-brown': true,
					'opacity-30': index > difficulty,
				}"
			>
				<font-awesome-icon :icon="['fas', 'key']" />
			</span>
		</div>
		<div
			class="flex gap-2 h-9 items-center justify-center border-x-2 border-x-gray-400"
		>
			<span class="text-light-brown">
				<font-awesome-icon :icon="['fas', 'users']" />
			</span>
			<span>{{ minPlayerCount }}&nbsp;-&nbsp;{{ maxPlayerCount }}</span>
		</div>
		<div class="flex gap-2 items-center justify-center">
			<span class="text-light-brown">
				<font-awesome-icon :icon="['fas', 'clock']" />
			</span>
			<span>{{ duration.toLocaleString() }}</span>
		</div>
		<div class="text-center">
			{{ difficultyStr }}
		</div>
		<div class="text-center">
			{{ t('keyPoints.players') }}
		</div>
		<div class="text-center">
			{{ t('keyPoints.minutes') }}
		</div>
	</div>
</template>
