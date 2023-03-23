import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faKey,
	faUsers,
	faClock,
	faStar,
	faBuildingColumns,
	faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faPaypal } from '@fortawesome/free-brands-svg-icons'

import I18NextVue from 'i18next-vue';
import i18next from 'i18next';

library.add(faKey, faUsers, faClock, faStar, faInstagram, faFacebook, faPaypal, faBuildingColumns, faChevronUp);

const appName =
	window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.vue`,
			import.meta.glob('./Pages/**/*.vue')
		),
	setup({ el, App, props, plugin }) {
		return createApp({ render: () => h(App, props) })
			.use(plugin)
			.use(ZiggyVue, Ziggy)
			.use(I18NextVue, { i18next })
			.component('font-awesome-icon', FontAwesomeIcon)
			.mount(el);
	},
	progress: {
		color: '#4B5563',
	},
});
