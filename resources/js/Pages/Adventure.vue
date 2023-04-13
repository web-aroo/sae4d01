<script setup>
import PageLayout from '@/Components/layouts/PageLayout.vue';
import Hero from '@/Components/Hero.vue';
import TitleAndSubtitle from '@/Components/TitleAndSubtitle.vue';
import Container from '@/Components/Container.vue';
import BookForm from '@/Components/BookForm.vue';
import KeyPoints from '@/Components/KeyPoints.vue';
defineProps({
	adventure: Object,
});
</script>

<template>
	<PageLayout>
		<Hero :image="adventure.image_url">
			<TitleAndSubtitle :title="adventure.name"></TitleAndSubtitle>
		</Hero>
		<Container>
			<div class="flex flex-col-reverse items-start md:gap-4 md:flex-row">
				<div class="grow">
					<KeyPoints
						:difficulty="adventure.difficulty"
						:min-player-count="adventure.min_player_count"
						:max-player-count="adventure.max_player_count"
						:duration="adventure.duration"
					/>
					<p v-if="adventure.availabilities.length === 0">
						{{ $t('adventure.full') }}
					</p>
					<p>
						{{ adventure.description }}
					</p>
					<iframe
						width="100%"
						class="aspect-square"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						:src="`https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.96330795307353%2C13.601074218750002%2C51.440312757160115&amp;layer=mapnik`"
						style="border: 1px solid black"
					></iframe>
				</div>
				<BookForm
					v-if="adventure.availabilities.length"
					:reviews="3"
					:rating="4.3"
					:availabilities="adventure.availabilities"
				/>
			</div>
		</Container>
	</PageLayout>
</template>
