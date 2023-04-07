<template>

	<PageLayout>

		<Spacer height='32'></Spacer>

		<Container>

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


		</Container>

	</PageLayout>

</template>
<script setup>
import PageLayout from '@/Components/layouts/PageLayout.vue';
import CartArticle from '@/Components/CartArticle.vue';
import Container from '@/Components/Container.vue';
import Spacer from '@/Components/Spacer.vue';

const props = defineProps({
	availabilities: Array
});

console.log(props);

</script>
