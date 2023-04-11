<template>

	<Spacer height="32"></Spacer>

	<footer class='w-full bg-black text-white font-serif'>
		<div class='md:py-4 md:flex md:justify-between m-auto'>
			<div class='mb-4 md:mb-0 shrink-0'>
				<img class='w-52 mr-2 md:block hidden p-2 ml-5' src='/img/logo.png' alt='Logo'>
			</div>
			<div class='grid place-items-center'>
				<div
					class='grid grid-cols-2 grid-rows-2 m-1 gap-4 md:flex md:justify-between mx-auto md:gap-24 md:mx-5'>
					<LinkList :title='t("footer.navigation.title")'>
						<li><a href='#'>{{t("footer.navigation.home")}}</a></li>
						<li><a href='#'>{{t("footer.navigation.adventures")}}</a></li>
						<li><a href='#'>{{t("footer.navigation.aboutUs")}}</a></li>
						<li><a href='#'>{{t("footer.navigation.contact")}}</a></li>
					</LinkList>
					<LinkList :title='t("footer.legal.title")'>
						<li><a href='#'>{{t("footer.legal.privacyPolicy")}}</a></li>
						<li><a href='#'>{{t("footer.legal.termsOfUse")}}</a></li>
					</LinkList>
					<LinkList :title='t("footer.followUs")'>
						<div class='flex gap-3 text-3xl'>
							<li><a href='#'>
								<font-awesome-icon :icon="['fab', 'instagram']" />
							</a></li>
							<li><a href='#'>
								<font-awesome-icon :icon="['fab', 'facebook']" />
							</a></li>
						</div>
					</LinkList>
					<LinkList :title='t("footer.contactUs")'>
						<li><a href='tel:0988254269'>0988254269</a></li>
						<li><a href='mailto:booking@we-escape.de'>booking@we-escape.de</a></li>
					</LinkList>
				</div>
			</div>
		</div>
	</footer>
</template>


<script setup>
import LinkList from "@/Components/LinkList.vue";
import {useTranslation} from "i18next-vue";
import Spacer from "@/Components/Spacer.vue";

const {t} = useTranslation();

</script>
