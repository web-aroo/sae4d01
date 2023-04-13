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
					home: {
						title: 'One adventure at a time',
						subtitle: 'View our adventures',
						ourAdventures: 'Our adventures',
						testimonials: 'Testimonials',
					},
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
						blueCard: 'Blue Card',
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
					footer: {
						navigation: {
							title: 'Navigation',
							home: 'Home',
							adventures: 'Adventures',
							aboutUs: 'About us',
							contact: 'Contact',
						},
						legal: {
							title: 'Legal',
							privacyPolicy: 'Privacy Policy',
							termsOfUse: 'Terms of use',
						},
						followUs: 'Follow us',
						contactUs: 'Contact us',
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
					adventure: {
						full: 'This adventure is full, no more places available.',
					},
					cart: {
						empty: 'The cart is empty.',
						nextStep: 'Next step',
						previousStep: 'Previous step',
					},
					confirmation: {
						message:
							'We are pleased to confirm that we have received your order and it is being processed. We will keep you updated on the progress of your order via email. Please do not hesitate to contact us if you have any questions or concerns regarding your order.',
						backToHome: 'Go back to home',
					},
				},
			},
			fr: {
				translation: {
					home: {
						title: 'Des aventures inoubliables',
						subtitle: 'Voir nos aventures',
						ourAdventures: 'Nos aventures',
						testimonials: 'Témoignages',
					},
					keyPoints: {
						difficulty: {
							easy: 'Facile',
							medium: 'Moyen',
							hard: 'Difficile',
							unknown: 'Inconnu',
						},
						players: 'Joueurs',
						minutes: 'Minutes',
					},
					progressBar: {
						cart: 'Panier',
						details: 'Détails',
						payment: 'Paiement',
						confirmation: 'Confirmation',
					},
					paymentMethod: {
						error: 'Tous les champs doivent être remplis correctement',
						blueCard: 'Carte bleue',
						cardHolder: 'Propriétaire de la carte',
						cardNumber: 'Numéro de carte',
						expirationDate: "Date d'expiration",
						cvc: 'CVC',
						proceedToPayment: 'Procéder au paiement',
					},
					header: {
						logo: 'Kaiserstuhl Escape Logo',
						home: 'Accueil',
						adventures: 'Aventures',
						aboutUs: 'À propos',
						contact: 'Contact',
						cart: 'Panier',
					},
					footer: {
						navigation: {
							title: 'Navigation',
							home: 'Accueil',
							adventures: 'Aventures',
							aboutUs: 'A propos',
							contact: 'Contact',
						},
						legal: {
							title: 'Légal',
							privacyPolicy: 'Politique de confidentialité',
							termsOfUse: "Conditions générales d'utilisation",
						},
						followUs: 'Suivez-nous',
						contactUs: 'Contactez-nous',
					},
					detailsForm: {
						error: 'Tous les champs doivent être remplis correctement.',
						firstName: 'Prénom',
						lastName: 'Nom',
						emailAddress: 'Adresse mail',
						phoneNumber: 'Numéro de téléphone',
					},
					adventureCard: {
						bookNow: 'Réserver maintenant',
					},
					bookForm: {
						title: 'Réserver à partir de {{ adventurePrice }} €',
						reviews_one: '{{ count }} avis',
						reviews_other: '{{ count }} avis',
						date: 'Choisir une date',
						time: 'Choisir un créneau',
						priceFormula: 'Choisir une formule',
						goToCart: 'Aller au panier',
					},
					adventure: {
						full: "Cette aventure est complète, aucun créneau n'est disponible.",
					},
					cart: {
						empty: 'Le panier est vide.',
						nextStep: 'Suivant',
						previousStep: 'Précédent',
					},
					confirmation: {
						message:
							"Nous avons le plaisir de vous confirmer que nous avons reçu votre commande et qu'elle est en cours de traitement. Nous vous tiendrons au courant de l'état d'avancement de votre commande par courrier électronique. N'hésitez pas à nous contacter si vous avez des questions ou des inquiétudes concernant votre commande.",
						backToHome: "Retourner à l'accueil",
					},
				},
			},
		},
	});
