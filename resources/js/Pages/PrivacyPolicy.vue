<template>

	<Spacer height="32"></Spacer>

	<PageLayout>

		<Container>

			<Title2>{{ t('privacyPolicy.title') }}</Title2>

			<Spacer height="16"></Spacer>

			<div class="grid gap-8">
				<div>
					<Title3>{{ t('privacyPolicy.introduction.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.introduction.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.dataCollected.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.dataCollected.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.purposesOfProcessing.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.purposesOfProcessing.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.legalBasis.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.legalBasis.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.shelfLife.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.shelfLife.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.userRights.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.userRights.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.cookies.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.cookies.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.dataSecurity.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.dataSecurity.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.privacyPolicyChange.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.privacyPolicyChange.content') }}
					</p>
				</div>

				<div>
					<Title3>{{ t('privacyPolicy.contact.title') }}</Title3>
					<p>
						{{ t('privacyPolicy.contact.content') }}
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
