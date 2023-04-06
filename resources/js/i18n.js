import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: 'en',
		resources: {
			en: {
				translation: {
					keyPoints: {
						difficulty: {
							easy: 'Easy',
							medium: 'Medium',
							hard: 'Hard',
							unknown: 'Unknown',
						},
						players: 'Players',
						minutes: 'Minutes',
					},
					progressBar: {
						cart: 'Cart',
						checkout: 'Checkout',
						confirmation: 'Confirmation',
					},
					paymentMethod: {
						cardHolder: 'Card Holder',
						cardNumber: 'Card Number',
						expirationDate: 'Expiration Date',
						cvc: 'CVC',
						proceedToPayment: 'Proceed to payment',
					},
					header: {
						logo: 'Kaiserstuhl Escape Logo',
						home: 'Home',
						adventures: 'Adventures',
						aboutUs: 'About us',
						contact: 'Contact',
						cart: 'Cart',
					},
					checkoutForm: {
						firstName: 'First name',
						lastName: 'Last name',
						emailAddress: 'Email address',
						phoneNumber: 'Phone number',
						nextStep: 'Next step',
					},
					adventureCard: {
						bookNow: 'Book now',
					},
					bookForm: {
						title: 'Book from {{ adventurePrice }} €',
						reviews_one: '{{ count }} reviews',
						reviews_other: '{{ count }} reviews',
						date: 'Choose a date',
						time: 'Pick a time slot',
						priceFormula: 'Pick a price formula',
						goToCart: 'Go to cart',
					},
				},
			},
		},
	});
