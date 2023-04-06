<template>

	<div class='min-h-screen grid grid-rows-[1fr_auto] bg-black gap-4'>
		<Header></Header>
		<main class='max-w-4xl mx-auto sm:px-8 mt-32'>
			<slot></slot>
		</main>
		<Footer></Footer>
	</div>

</template>

<script setup>
import Header from '@/Components/Header.vue';
import Footer from '@/Components/Footer.vue';
</script>
