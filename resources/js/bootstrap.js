/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * i18next is a translation library which allows us to easily translate
 */
import './i18n';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faKey,
	faUsers,
	faClock,
	faStar,
	faBuildingColumns,
	faChevronUp,
	faCalendarDays,
	faCartShopping,
	faBars,
	faTimes,
	faLocationDot,
	faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faFacebook,
	faPaypal,
} from '@fortawesome/free-brands-svg-icons';

library.add(
	faKey,
	faUsers,
	faClock,
	faStar,
	faInstagram,
	faFacebook,
	faPaypal,
	faBuildingColumns,
	faChevronUp,
	faCalendarDays,
	faCartShopping,
	faBars,
	faTimes,
	faLocationDot,
	faTrashCan
);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
