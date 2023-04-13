<template>
	<PageLayout>
		<Spacer height="32"></Spacer>
		<Container>
			<Spacer height="10"></Spacer>
			<Title2> {{ t('home.ourAdventures') }} </Title2>
			<Spacer height="16"></Spacer>
			<div v-for="adventure in adventures">
				<AdventureCard
					:title="adventure.name"
					:difficulty="adventure.difficulty"
					:min-player-count="adventure.min_player_count"
					:max-player-count="adventure.max_player_count"
					:duration="adventure.duration"
					:location="adventure.location"
					:image="adventure.image_url"
				>
					<template #description>
						{{ adventure.description }}
					</template>
				</AdventureCard>
				<Spacer height="16"></Spacer>
			</div>
			<Spacer height="16"></Spacer>
		</Container>
	</PageLayout>
</template>

<script setup>
import Spacer from '@/Components/Spacer.vue';
import Title2 from '@/Components/Title2.vue';
import AdventureCard from '@/Components/AdventureCard.vue';
import PageLayout from '@/Components/layouts/PageLayout.vue';
import TitleAndSubtitle from '@/Components/TitleAndSubtitle.vue';
import Testimonial from '@/Components/Testimonial.vue';
import Container from '@/Components/Container.vue';
import { useTranslation } from 'i18next-vue';
import { defineProps } from 'vue';

const { t } = useTranslation();

const props = defineProps({
	adventures: Array,
});
</script>
