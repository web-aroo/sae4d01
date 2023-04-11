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
						details: 'Details',
						payment: 'Payment',
						confirmation: 'Confirmation',
					},
					paymentMethod: {
						error: 'Every fields must be fulfilled correctly.',
						blueCard: "Blue Card",
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
					detailsForm: {
						error: 'Every fields must be fulfilled correctly.',
						firstName: 'First name',
						lastName: 'Last name',
						emailAddress: 'Email address',
						phoneNumber: 'Phone number',
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
					cart:{
						nextStep: "Next step",
						previousStep: "Previous step"
					},
					confirmation:{
						message: "We are pleased to confirm that we have received your order and it is being processed. We will keep you updated on the progress of your order via email. Please do not hesitate to contact us if you have any questions or concerns regarding your order.",
						backToHome: "Go back to home",
					}
				},
			},
		},
	});
