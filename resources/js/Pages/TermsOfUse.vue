<template>

	<Spacer height="32"></Spacer>

	<PageLayout>

		<Container>

			<Title2>{{ t('termsOfUse.title') }}</Title2>

			<Spacer height="16"></Spacer>

			<div class="grid gap-8">
				<div>
					<Title3>{{ t('termsOfUse.generalInformations.title') }}</Title3>
					<p>
						{{ t('termsOfUse.generalInformations.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfUse.serviceDescription.title') }}</Title3>
					<p>
						{{ t('termsOfUse.serviceDescription.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfUse.accessConditions.title') }}</Title3>
					<p>
						{{ t('termsOfUse.accessConditions.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfUse.personalData.title') }}</Title3>
					<p>
						{{ t('termsOfUse.personalData.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('termsOfUse.intellectualProperty.title') }}</Title3>
					<p>
						{{ t('termsOfUse.intellectualProperty.content') }}
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
