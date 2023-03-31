const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.vue',
	],

	theme: {
		fontFamily: {
			serif: ['Lora', 'serif'],
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				'very-dark-brown': '#32281E',
				'dark-brown': '#56412C',
				'light-brown': '#97714A',
			},
			boxShadow: {
				custom: '0px 0px 8px 2px rgba(0, 0, 0, 0.25)',
			},
		},
	},

	plugins: [require('@tailwindcss/forms')],
};
