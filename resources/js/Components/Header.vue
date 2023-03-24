<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useTranslation } from 'i18next-vue';

const { t } = useTranslation();

const open = ref(false);
</script>

<template>
	<header
		class="py-2 lg:py-4 px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 fixed inset-x-0 top-0 items-center bg-gradient-to-b from-black to-transparent"
	>
		<img src="/img/logo.png" :alt="t('header.logo')" />
		<nav
			class="hidden lg:flex col-span-2 items-center gap-14 lowercase justify-self-center"
		>
			<Link
				href="/"
				class="text-gray-400 hover:text-white transition-colors"
			>
				{{ t('header.home') }}
			</Link>
			<Link
				href="/adventures"
				class="text-gray-400 hover:text-white transition-colors"
			>
				{{ t('header.adventures') }}
			</Link>
			<a
				href="#"
				class="text-gray-400 hover:text-white transition-colors"
			>
				{{ t('header.aboutUs') }}
			</a>
			<a
				href="#"
				class="text-gray-400 hover:text-white transition-colors"
			>
				{{ t('header.contact') }}
			</a>
		</nav>
		<div class="hidden lg:flex items-center gap-4 justify-self-end">
			<Link
				href="/cart"
				class="bg-white text-black px-6 py-2 rounded-full"
			>
				<font-awesome-icon :icon="['fas', 'cart-shopping']" />
				{{ t('header.cart') }}
			</Link>
			<!-- LanguageSelector -->
		</div>
		<div class="lg:hidden justify-self-end">
			<button
				class="text-white text-2xl focus:outline-none"
				@click="open = true"
			>
				<font-awesome-icon
					:icon="['fas', 'bars']"
					size="2x"
					fixed-width
				/>
			</button>
		</div>
	</header>
	<Transition
		enter-from-class="-translate-x-full"
		enter-active-class="transition-transform"
		enter-to-class="translate-x-0"
		leave-from-class="translate-x-0"
		leave-active-class="transition-transform"
		leave-to-class="-translate-x-full"
	>
		<nav
			class="fixed py-2 px-5 inset-0 bg-black text-white lowercase"
			v-if="open"
		>
			<div class="grid grid-cols-2">
				<img src="/img/logo.png" :alt="t('header.logo')" />
				<button
					class="ml-auto text-white text-2xl focus:outline-none"
					@click="open = false"
				>
					<font-awesome-icon
						:icon="['fas', 'times']"
						size="2x"
						fixed-width
					/>
				</button>
			</div>
			<div class="flex flex-col items-start justify-start h-full mt-5">
				<div class="flex flex-col gap-6">
					<Link
						href="/cart"
						class="bg-white text-black px-6 py-2 rounded-full"
					>
						<font-awesome-icon :icon="['fas', 'cart-shopping']" />
						{{ t('header.cart') }}
					</Link>
					<!-- LanguageSelector -->
					<Link href="/">
						{{ t('header.home') }}
					</Link>
					<Link href="/adventures">
						{{ t('header.adventures') }}
					</Link>
					<a href="#">
						{{ t('header.aboutUs') }}
					</a>
					<a href="#">
						{{ t('header.contact') }}
					</a>
				</div>
			</div>
		</nav>
	</Transition>
</template>
