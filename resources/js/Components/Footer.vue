<template>
	<footer class='w-full bg-black text-white font-serif'>
		<div class='md:py-4 md:flex md:justify-between m-auto'>
			<div class='mb-4 md:mb-0 shrink-0'>
				<img class='w-52 mr-2 md:block hidden p-2 ml-5' src='/img/logo.png' alt='Logo'>
			</div>
			<div class='grid place-items-center'>
				<div
					class='grid grid-cols-2 grid-rows-2 m-1 gap-4 md:flex md:justify-between mx-auto md:gap-24 md:mx-5'>
					<LinkList title='Navigation'>
						<li><a href='#'>Home</a></li>
						<li><a href='#'>Adventures</a></li>
						<li><a href='#'>About us</a></li>
						<li><a href='#'>Contact</a></li>
					</LinkList>
					<LinkList title='Legal'>
						<li><a href='#'>Privacy policy</a></li>
						<li><a href='#'>Terms of use</a></li>
					</LinkList>
					<LinkList title='Follow us'>
						<div class='flex gap-3 text-3xl'>
							<li><a href='#'>
								<font-awesome-icon :icon="['fab', 'instagram']" />
							</a></li>
							<li><a href='#'>
								<font-awesome-icon :icon="['fab', 'facebook']" />
							</a></li>
						</div>
					</LinkList>
					<LinkList title='Contact us'>
						<li><a href='tel:0988254269'>0988254269</a></li>
						<li><a href='mailto:booking@we-escape.de'>booking@we-escape.de</a></li>
					</LinkList>
				</div>
			</div>
		</div>
	</footer>
</template>


<script>
import LinkList from '@/Components/LinkList.vue';

export default {
	name: 'Footer',
	components: { LinkList }
};
</script>
