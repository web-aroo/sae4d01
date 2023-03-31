import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import I18NextVue from 'i18next-vue';
import i18next from 'i18next';

const appName = 'Laravel';

createServer((page) =>
	createInertiaApp({
		page,
		render: renderToString,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) =>
			resolvePageComponent(
				`./Pages/${name}.vue`,
				import.meta.glob('./Pages/**/*.vue')
			),
		setup({ App, props, plugin }) {
			return createSSRApp({ render: () => h(App, props) })
				.use(plugin)
				.use(ZiggyVue, {
					...page.props.ziggy,
					location: new URL(page.props.ziggy.location),
				})
				.use(I18NextVue, { i18next })
				.component('font-awesome-icon', FontAwesomeIcon);
		},
	})
);
