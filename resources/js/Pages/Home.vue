<template>

	<PageLayout>
		<Hero image='/img/chess.jpg'></Hero>
		<Container>
			<AdventureCard></AdventureCard>
		</Container>
	</PageLayout>

</template>
<script setup>
import PageLayout from '@/Components/layouts/PageLayout.vue';
import AdventureCard from '@/Components/AdventureCard.vue';
import Container from '@/Components/Container.vue';
import Hero from '@/Components/Hero.vue';
</script>
