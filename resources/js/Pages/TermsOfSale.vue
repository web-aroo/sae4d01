<template>

	<Spacer height="32"></Spacer>

	<PageLayout>

		<Container>

			<Title2>{{ t('termsOfSale.title') }}</Title2>

			<Spacer height="16"></Spacer>

			<div class="grid gap-8">
				<div>
					<Title3>{{ t('termsOfSale.preamble.title') }}</Title3>
					<p>
						{{ t('termsOfSale.preamble.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfSale.products.title') }}</Title3>
					<p>
						{{ t('termsOfSale.products.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfSale.orders.title') }}</Title3>
					<p>
						{{ t('termsOfSale.orders.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfSale.pricesAndPayment.title') }}</Title3>
					<p>
						{{ t('termsOfSale.pricesAndPayment.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfSale.rightOfWithdrawal.title') }}</Title3>
					<p>
						{{ t('termsOfSale.rightOfWithdrawal.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfSale.warranties.title') }}</Title3>
					<p>
						{{ t('termsOfSale.warranties.content') }}
					</p>
				</div>

			</div>

		</Container>

	</PageLayout>

</template>

<script setup>
import PageLayout from "@/Components/layouts/PageLayout.vue";
import Title2 from "@/Components/Title2.vue";
import Spacer from "@/Components/Spacer.vue";
import {useTranslation} from "i18next-vue";
import Title3 from "@/Components/Title3.vue";
import Container from "@/Components/Container.vue";

const {t} = useTranslation();

</script>
