<template>

	<Spacer height="32"></Spacer>

	<PageLayout>

		<Container>

			<Title2>{{ t('legalNotices.title') }}</Title2>

			<Spacer height="16"></Spacer>

			<div class="grid gap-8">
				<div>
					<Title3>{{ t('legalNotices.generalInformations.title') }}</Title3>
					<p>
						{{ t('legalNotices.generalInformations.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('legalNotices.intellectualProperty.title') }}</Title3>
					<p>
						{{ t('legalNotices.intellectualProperty.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('legalNotices.personalData.title') }}</Title3>
					<p>
						{{ t('legalNotices.personalData.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('legalNotices.cookies.title') }}</Title3>
					<p>
						{{ t('legalNotices.cookies.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('legalNotices.applicableLaw.title') }}</Title3>
					<p>
						{{ t('legalNotices.applicableLaw.content') }}
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
