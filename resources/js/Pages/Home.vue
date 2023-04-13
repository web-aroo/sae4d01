<template>
	<PageLayout>
		<Hero image="/img/chess.jpg">
			<TitleAndSubtitle
				:title="t('home.title')"
				:subtitle="t('home.subtitle')"
			></TitleAndSubtitle>
		</Hero>
		<Container>
			<Spacer height="10"></Spacer>
			<Title2> {{ t('home.ourAdventures') }} </Title2>
			<Spacer height="16"></Spacer>
			<div v-for="(adventure, i) in adventures">
				<AdventureCard
					:title="adventure.name"
					:difficulty="adventure.difficulty"
					:min-player-count="adventure.min_player_count"
					:max-player-count="adventure.max_player_count"
					:duration="adventure.duration"
					:location="adventure.location"
					:image="adventure.image_url"
					:id="adventure.id"
					:class="i === 1 ? '!flex-row' : ''"
				>
					<template #description>
						{{ adventure.description }}
					</template>
				</AdventureCard>
				<Spacer height="16"></Spacer>
			</div>

			<Spacer height="16"></Spacer>
			<Title2> {{ t('home.testimonials') }} </Title2>
			<Spacer height="16"></Spacer>
			<div class="flex gap-12">
				<Testimonial
					v-for="review in reviews"
					:stars="review.stars"
					:name="review.user.name"
					:image-url="review.user.image_url"
					>{{ review.text }}</Testimonial
				>
			</div>
			<Spacer height="16"></Spacer>
		</Container>
	</PageLayout>
</template>
<script setup>
import PageLayout from '@/Components/layouts/PageLayout.vue';
import AdventureCard from '@/Components/AdventureCard.vue';
import Container from '@/Components/Container.vue';
import Hero from '@/Components/Hero.vue';
import Title2 from '@/Components/Title2.vue';
import TitleAndSubtitle from '@/Components/TitleAndSubtitle.vue';
import Spacer from '@/Components/Spacer.vue';
import Testimonial from '@/Components/Testimonial.vue';

import { defineProps } from 'vue';
import { useTranslation } from 'i18next-vue';

const { t } = useTranslation();

const props = defineProps({
	adventures: Array,
	reviews: Array,
});

console.log(props);
</script>
