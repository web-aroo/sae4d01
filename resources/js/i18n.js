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
					footer: {
						navigation: {
							title: 'Navigation',
							home: 'Home',
							adventures: 'Adventures',
							aboutUs: 'About us',
							contact: 'Contact',
						},
						legal:{
							title: 'Legal',
							privacyPolicy: 'Privacy Policy',
							termsOfUse: 'Terms of use',
							termsOfSale: 'Terms of sale',
							legalNotices: 'Legal notices'
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
					confirmation:{
						message: "We are pleased to confirm that we have received your order and it is being processed. We will keep you updated on the progress of your order via email. Please do not hesitate to contact us if you have any questions or concerns regarding your order.",
						backToHome: "Go back to home",
					},
					legalNotices:{
						title: "Legal notices",
						generalInformations: {
							title: "General information",
							content: "This website is published by Webaroo SARL, with a capital of 20,000 euros, registered with the Mulhouse Trade and Companies Register under the number RCS Mulhouse 123 456 789, whose head office is located at 1 rue John Doe, 68100 Mulhouse.\nDirector of publication: David Ismeurt\nContact e-mail address: david.ismeurt@uha.fr The website is hosted by Hetzner, Industriestraße 25, 91710 Gunzenhausen, Germany. Phone number of the host: +49 9831 5050."
						},
						intellectualProperty: {
							title: "Intellectual Property",
							content: "This website, as well as all the elements of which it is composed (in particular texts, images, logos, brands, videos, animations, sounds, etc.), are protected by intellectual property rights. Any reproduction, representation, modification, adaptation, distribution, in whole or in part, of the website or of any of its components, on any medium whatsoever, without the express prior authorization of We-Escape GmbH, is strictly prohibited and constitutes an infringement punishable by articles L.335-2 et seq. of the French Intellectual Property Code."
						},
						personalData: {
							title: "Personal data",
							content: "This website collects personal data from users as part of their reservation and participation in escape games. This data is collected and processed in accordance with our privacy policy, which can be accessed at the following address: 401.leonekmi.fr/privacy-policy"
						},
						cookies: {
							title: "Cookies",
							content: "This website uses cookies to improve the user experience and to provide content tailored to users. Cookies are files stored on the user's hard drive to facilitate navigation of the website and to allow analysis of user behavior. The user can disable cookies by modifying the settings of their internet browser."
						},
						applicableLaw: {
							title: "Applicable law and competent jurisdiction",
							content: "This legal notice is governed by French law. Any dispute relating to the interpretation or execution of this legal notice shall be submitted to the exclusive jurisdiction of the French courts."
						},
					},
					termsOfUse: {
						title: "Terms of use",
						generalInformations: {
							title: "General information",
							content: "The present general conditions of use (hereinafter the 'GCU') are concluded between the user of the Web site (hereinafter the 'User') and We-Escape GmbH.\n The use of the Web site implies the full and complete acceptance of the GTU by the User. The GTUs may be modified or completed at any time, without prior notice, and are enforceable against the User as soon as they are posted on the website. The User is therefore advised to regularly consult the GTU in order to be aware of any changes."
						},
						serviceDescription: {
							title: "Description of the service",
							content: "The website offers escape games based in France and Germany. The User can book an escape game online by choosing the place, date and time of the game. The User can also purchase products derived from the website."
						},
						accessConditions: {
							title: "Conditions of access and use of the website",
							content: "The User acknowledges that he/she has the necessary skills and means to access and use the website. The User agrees not to use the Website for any purpose that is unlawful or prohibited by the TOS. The Publisher reserves the right to suspend, interrupt or limit access to all or part of the Website without notice for technical, maintenance or security reasons. The Publisher shall not be liable for any unavailability or malfunction of the Website."
						},
						personalData: {
							title: "Personal Data",
							content: "The website collects personal data from Users in the context of their reservation and participation in escape games. This data is collected and processed in accordance with our privacy policy, which can be accessed at the following address: 401.leonekmi.fr/privacy-policy"
						},
						intellectualProperty: {
							title: "Intellectual Property",
							content: "The website and all its components (including texts, images, logos, trademarks, videos, animations, sounds, etc.) are protected by intellectual property rights. Any reproduction, representation, modification, adaptation, distribution, in whole or in part, of the website or of any of its components, on any medium whatsoever, without prior written authorization from the Publisher, is strictly prohibited and constitutes an infringement of copyright. In particular, the User shall not reproduce and/or use the content of this site for any purpose other than for the purposes of this Agreement."
						}
					},
					termsOfSale: {
						title: "Terms of sale",
						preamble: {
							title: "Preamble",
							content: "The present general conditions of sale apply to all sales concluded between the company We-Escape GmbH and the purchasers wishing to acquire the products proposed for sale by the salesman on the Internet site 401. leonekmi.fr.\nThe parties agree that their relations will be governed exclusively by these general conditions of sale, to the exclusion of any other condition previously available on the site."
						},
						products: {
							title: "Products",
							content: "The products offered for sale are described on the website of the seller. The seller undertakes to supply products that comply with the standards in force in France at the date of the order. The photographs illustrating the products have no contractual value and do not engage the responsibility of the seller."
						},
						orders: {
							title: "Orders",
							content: "Any order of products implies the acceptance of these general conditions of sale. Orders can be placed on the website of the seller. The seller reserves the right to refuse any order from a customer with whom there is a dispute relating to the payment of a previous order or who would present any form of risk."
						},
						pricesAndPayment: {
							title: "Prices and payment",
							content: "The prices of the products are indicated in euros all taxes included (TTC). The seller reserves the right to modify its prices at any time, but undertakes to invoice the products at the price in force at the time the order is placed. The payment of the products can be carried out by bank card or by any other means of payment proposed on the Internet site of the salesman. Payments are secure and are processed by a payment provider."
						},
						rightOfWithdrawal: {
							title: "Right of withdrawal",
							content: "The buyer has a period of 14 days from receipt of the products to exercise his right of withdrawal, without having to justify reasons or pay penalties. To exercise this right, the buyer must inform the seller of his decision to withdraw by any means (email, mail, etc.). The seller undertakes to reimburse the buyer as soon as possible and at the latest within 14 days following the date on which he is informed of the buyer's decision to withdraw."
						},
						warranties: {
							title: "Warranties",
							content: "The products sold benefit from the legal guarantee of conformity as well as the guarantee of hidden defects provided for by articles 1641 and following of the Civil Code. The buyer is invited to consult the conditions of implementation of these guarantees"
						},
					},
					privacyPolicy: {
						title: "Privacy policy",
						introduction: {
							title: "Introduction",
							content: "This privacy policy applies to the processing of personal data collected by We-Escape GmbH when booking and participating in escape games via our website."
						},
						dataCollected: {
							title: "Data collected",
							content: "The personal data collected is as follows:\n- Name, first name and e-mail address of the user \n- Date and time of the reservation \n- Data related to the participation in escape games (scores, game time, etc. This data is collected within the framework of the execution of the contract concluded with the user (reservation and participation in escape games) and is necessary for the good management of the relationship with the user."
						},
						purposesOfProcessing: {
							title: "Purposes of processing",
							content: "The personal data collected are processed for the following purposes: \Management of reservations and participation in escape game games Invoicing and payment Improvement of our service offer Analysis of the use of our website Sending promotional emails and information about our service offers (only if the user has given prior consent)Personal data collected is not used for any other purposes than those mentioned above and is not communicated to third parties without the user's consent. "
						},
						legalBasis: {
							title: "Legal basis for processing",
							content: "The processing of the personal data collected is based on the execution of the contract concluded with the user (booking and participation in escape game games) and on the user's consent for the sending of promotional emails and information about our service offers."
						},
						shelfLife: {
							title: "Retention period",
							content: "The personal data collected are kept for the time strictly necessary to achieve the purposes for which they were collected, in accordance with the applicable regulations on the protection of personal data. The data is then deleted or anonymized."
						},
						userRights: {
							title: "Users' rights",
							content: "Users have the following rights regarding their personal data:- Right of access: the user can obtain information about the processing of their personal data and a copy of their personal data.- Right of rectification: the user can request the rectification of inaccurate or incomplete personal data.- Right of erasure: the user can request the erasure of their personal data."
						},
						cookies: {
							title: "Cookies",
							content: "We use cookies on our website to improve the user experience and to make it easier to book and participate in escape games. Cookies are text files stored on the user's computer that allow the user to be recognized the next time they visit our website. However, disabling cookies may limit access to certain features of our website."
						},
						dataSecurity: {
							title: "Data Security",
							content: "We have implemented appropriate technical and organizational security measures to protect the personal data collected from unauthorized access, misuse or accidental loss or destruction. These measures include physical, technical and administrative security measures."
						},
						privacyPolicyChange: {
							title: "Privacy Policy Change",
							content: "We reserve the right to change this privacy policy at any time without notice. Changes will be posted on our website and will be effective upon posting."
						},
						contact: {
							title: "Contact",
							content: "If you have any questions about this Privacy Policy or wish to exercise your privacy rights, you may contact our customer service department by e-mail at contact@we-escape.de or by mail at We-Escape GmbH, Am Krebsbach 2g, 79241 Ihringen, Germany."
						}
					}
				}
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
						legal:{
							title: 'Légal',
							privacyPolicy: 'Politique de confidentialité',
							termsOfUse: 'Conditions générales d'utilisation',
							termsOfSale: 'Conditions générales de vente',
							legalNotices: 'Mentions légales'
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
					legalNotices:{
						title: "Mentions Légales",
						generalInformations: {
							title: "Informations générales",
							content: "Le présent site web est édité par Webaroo SARL, au capital de 20000 euros, immatriculée au Registre du Commerce et des Sociétés de Mulhouse sous le numéro RCS Mulhouse 123 456 789, dont le siège social est situé à 1 rue John Doe, 68100 Mulhouse.\n\nDirecteur de la publication : David Ismeurt\n\nAdresse e-mail de contact : david.ismeurt@uha.fr\n\nLe site web est hébergé par Hetzner, Industriestraße 25, 91710 Gunzenhausen, Allemagne. Numéro de téléphone de l'hébergeur : +49 9831 5050."
						},
						intellectualProperty: {
							title: "Propriété intellectuelle",
							content: "Le présent site web, ainsi que tous les éléments le composant (notamment les textes, images, logos, marques, vidéos, animations, sons, etc.), sont protégés par des droits de propriété intellectuelle. Toute reproduction, représentation, modification, adaptation, diffusion, intégrale ou partielle, du site web ou de l'un quelconque des éléments qui le composent, sur quelque support que ce soit, sans autorisation expresse et préalable de We-Escape GmbH, est strictement interdite et constitutive d'une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle."
						},
						personalData: {
							title: "Données personnelles",
							content: "Le présent site web collecte des données personnelles des utilisateurs dans le cadre de leur réservation et participation à des parties d'escape game. Ces données sont collectées et traitées conformément à notre politique de confidentialité, accessible à l'adresse suivante : 401.leonekmi.fr/privacy-policy"
						},
						cookies: {
							title: "Cookies",
							content: "Le présent site web utilise des cookies pour améliorer l'expérience utilisateur et proposer des contenus adaptés aux utilisateurs. Les cookies sont des fichiers stockés sur le disque dur de l'utilisateur pour faciliter sa navigation sur le site web et permettre une analyse de son comportement. L'utilisateur peut désactiver les cookies en modifiant les paramètres de son navigateur internet."
						},
						applicableLaw: {
							title: "Loi applicable et juridiction compétente",
							content: "Les présentes mentions légales sont régies par la loi française. Tout litige relatif à l'interprétation ou à l'exécution des présentes mentions légales sera soumis à la compétence exclusive des tribunaux français."
						}
					},
					termsOfUse:{
						title: "Conditions générales d'utilisation",
						generalInformations: {
							title: "Informations générales",
							content: "Les présentes conditions générales d'utilisation (ci-après les \"CGU\") sont conclues entre l'utilisateur du site web (ci-après \"l'Utilisateur\") et We-Escape GmbH.\n\nL'utilisation du site web implique l'acceptation pleine et entière des CGU par l'Utilisateur. Les CGU sont susceptibles d'être modifiées ou complétées à tout moment, sans préavis, et sont opposables à l'Utilisateur dès leur mise en ligne sur le site web. Il est donc conseillé à l'Utilisateur de consulter régulièrement les CGU afin de prendre connaissance de leurs éventuelles modifications."
						},
						serviceDescription: {
							title: "Description du service",
							content: "Le site web propose des parties d'escape game basées en France et en Allemagne. L'Utilisateur peut réserver une partie d'escape game en ligne en choisissant le lieu, la date et l'heure de la partie. L'Utilisateur peut également acheter des produits dérivés du site web."
						},
						accessConditions: {
							title: "Conditions d'accès et d'utilisation du site web",
							content: "L'Utilisateur reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser le site web. L'Utilisateur s'engage à ne pas utiliser le site web à des fins illicites ou interdites par les CGU.\n\nL'Éditeur se réserve le droit de suspendre, interrompre ou limiter sans préavis l'accès à tout ou partie du site web pour des raisons techniques, de maintenance ou de sécurité. L'Éditeur ne saurait être tenu responsable de toute indisponibilité ou dysfonctionnement du site web."
						},
						personalData: {
							title: "Données personnelles",
							content: "Le site web collecte des données personnelles des Utilisateurs dans le cadre de leur réservation et participation à des parties d'escape game. Ces données sont collectées et traitées conformément à notre politique de confidentialité, accessible à l'adresse suivante : 401.leonekmi.fr/privacy-policy"
						},
						intellectualProperty: {
							title: "Propriété intellectuelle",
							content: "Le site web et tous les éléments le composant (notamment les textes, images, logos, marques, vidéos, animations, sons, etc.) sont protégés par des droits de propriété intellectuelle. Toute reproduction, représentation, modification, adaptation, diffusion, intégrale ou partielle, du site web ou de l'un quelconque des éléments qui le composent, sur quelque support que ce soit, sans autorisation écrite préalable de l'Éditeur, est strictement interdite et constitue un délit de contrefaçon.\n\nL'Utilisateur s'engage à respecter les droits de propriété intellectuelle de l'Éditeur et des tiers. L'Utilisateur s'interdit notamment de reproduire et/ou utiliser les marques et logos présents sur le site web, ainsi que de modifier, copier, reproduire, télécharger, diffuser, transmettre, exploiter commercialement et/ou distribuer de quelque manière que ce soit les contenus du site web sans autorisation écrite préalable de l'Éditeur."
						},
						liabilityAndWarranty: {
							title: "Responsabilité et garantie",
							content: "L'Éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site web par l'Utilisateur, notamment en cas d'indisponibilité ou de dysfonctionnement du site web, de perte de données, d'atteinte à l'image de marque, de préjudice commercial, de perte de bénéfices, de pertes financières ou de tout autre dommage.\n\nL'Éditeur ne garantit pas que le site web sera exempt d'erreurs ou d'omissions, ni que les défauts éventuels seront corrigés. L'Éditeur ne garantit pas non plus que le site web est compatible avec tous les matériels et logiciels utilisés par l'Utilisateur.\n\nL'Utilisateur est seul responsable de l'utilisation qu'il fait du site web et de son contenu. L'Utilisateur s'engage à indemniser et à garantir l'Éditeur contre tout préjudice, plainte ou action en justice résultant de l'utilisation du site web par l'Utilisateur."
						},
						applicableLaw: {
							title: "Droit applicable et juridiction compétente",
							content: "Les CGU sont soumises au droit français. Tout litige relatif à l'interprétation ou à l'exécution des CGU sera soumis à la compétence exclusive des tribunaux français."
						}
					},
					termsOfSale: {
						title: "Conditions générales de vente",
						preamble: {
							title: "Préambule",
							content: "Les présentes conditions générales de vente s'appliquent à toutes les ventes conclues entre la société We-Escape GmbH et les acheteurs souhaitant acquérir les produits proposés à la vente par le vendeur sur le site internet 401.leonekmi.fr.\n\nLes parties conviennent que leurs relations seront régies exclusivement par les présentes conditions générales de vente, à l'exclusion de toute autre condition préalablement disponible sur le site."
						},
						products: {
							title: "Produits",
							content: "Les produits proposés à la vente sont décrits sur le site internet du vendeur. Le vendeur s'engage à fournir des produits conformes aux normes en vigueur en France à la date de la commande. Les photographies illustrant les produits n'ont pas de valeur contractuelle et ne sauraient engager la responsabilité du vendeur."
						},
						orders: {
							title: "Commandes",
							content: "Toute commande de produits implique l'acceptation des présentes conditions générales de vente. Les commandes peuvent être passées sur le site internet du vendeur. Le vendeur se réserve le droit de refuser toute commande d'un client avec lequel il existerait un litige relatif au paiement d'une commande antérieure ou qui présenterait une quelconque forme de risque."
						},
						pricesAndPayment: {
							title: "Prix et paiement",
							content: "Les prix des produits sont indiqués en euros toutes taxes comprises (TTC). Le vendeur se réserve le droit de modifier ses prix à tout moment, mais s'engage à facturer les produits au prix en vigueur au moment de la passation de la commande. Le paiement des produits peut être effectué par carte bancaire ou par tout autre moyen de paiement proposé sur le site internet du vendeur. Les paiements sont sécurisés et sont traités par un prestataire de paiement."
						},
						rightOfWithdrawal: {
							title: "Droit de rétractation",
							content: "L'acheteur dispose d'un délai de 14 jours à compter de la réception des produits pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités. Pour exercer ce droit, l'acheteur doit informer le vendeur de sa décision de rétractation par tout moyen (email, courrier, etc.). Le vendeur s'engage à rembourser l'acheteur dans les meilleurs délais et au plus tard dans les 14 jours suivant la date à laquelle il est informé de la décision de l'acheteur de se rétracter."
						},
						warranties: {
							title: "Garanties",
							content: "Les produits vendus bénéficient de la garantie légale de conformité ainsi que de la garantie des vices cachés prévues par les articles 1641 et suivants du Code civil. L'acheteur est invité à consulter les conditions de mise en œuvre de ces garanties sur le site internet du vendeur."
						},
						responsibility: {
							title: "Responsabilité",
							content: "Le vendeur ne saurait être tenu responsable des dommages indirects ou immatériels liés à l'utilisation des produits vendus. Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée de sa part. En tout état de cause, la responsabilité du vendeur est limitée au montant de la commande passée par l'acheteur."
						},
						intellectualProperty: {
							title: "Propriété intellectuelle",
							content: "Tous les éléments du site internet du vendeur sont et restent la propriété intellectuelle exclusive du vendeur. Nul n'est autorisé à reproduire, exploiter, rediffuser ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site qu'ils soient logiciels, visuels ou sonores. Tout lien simple ou par hypertexte est strictement interdit sans l'accord préalable exprès écrit du vendeur."
						},
						litigation: {
							title: "Litiges",
							content: "Toute réclamation ou contestation relative aux présentes conditions générales de vente sera soumise au droit français. En cas de litige, l'acheteur est invité à contacter le vendeur en priorité pour trouver une solution amiable. À défaut d'accord amiable, les tribunaux français seront seuls compétents pour connaître du litige."
						}
					},
					privacyPolicy: {
						title: "Politique de confidentialité",
						introduction: {
							title: "Introduction",
							content: "La présente politique de confidentialité s'applique au traitement des données personnelles collectées par We-Escape GmbH lors de la réservation et de la participation à des parties d'escape game via notre site web."
						},
						dataCollected: {
							title: "Données collectées",
							content: "Les données personnelles collectées sont les suivantes :\n\n- Nom, prénom et adresse e-mail de l'utilisateur\n- Date et heure de la réservation\n- Données relatives à la participation à des parties d'escape game (scores, temps de jeu, etc.)\n- Adresse IP de l'utilisateur\n- Données relatives à la navigation de l'utilisateur sur notre site web (pages consultées, durée de la visite, etc.)\n\nCes données sont collectées dans le cadre de l'exécution du contrat conclu avec l'utilisateur (réservation et participation à des parties d'escape game) et sont nécessaires à la bonne gestion de la relation avec l'utilisateur."
						},
						purposesOfProcessing: {
							title: "Finalités du traitement",
							content: "Les données personnelles collectées sont traitées aux fins suivantes :\n\n- Gestion des réservations et des participations à des parties d'escape game\n- Facturation et paiement\n- Amélioration de notre offre de services\n- Analyse de l'utilisation de notre site web\n- Envoi d'e-mails promotionnels et d'informations sur nos offres de services (uniquement si l'utilisateur a donné son consentement préalable)\n\nLes données personnelles collectées ne sont pas utilisées à d'autres fins que celles mentionnées ci-dessus et ne sont pas communiquées à des tiers sans le consentement de l'utilisateur."
						},
						legalBasis: {
							title: "Base légale du traitement",
							content: "Le traitement des données personnelles collectées est fondé sur l'exécution du contrat conclu avec l'utilisateur (réservation et participation à des parties d'escape game) et sur le consentement de l'utilisateur pour l'envoi d'e-mails promotionnels et d'informations sur nos offres de services."
						},
						shelfLife: {
							title: "Durée de conservation",
							content: "Les données personnelles collectées sont conservées pendant la durée strictement nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, conformément à la réglementation applicable en matière de protection des données personnelles. Les données sont ensuite supprimées ou anonymisées."
						},
						userRights: {
							title: "Droits des utilisateurs",
							content: "Les utilisateurs disposent des droits suivants concernant leurs données personnelles :\n\n- Droit d'accès : l'utilisateur peut obtenir des informations sur le traitement de ses données personnelles et une copie de ses données personnelles.\n- Droit de rectification : l'utilisateur peut demander la rectification de ses données personnelles inexactes ou incomplètes.\n- Droit d'effacement : l'utilisateur peut demander l'effacement de ses données personnelles dans certaines circonstances, par exemple si les données ne sont plus nécessaires aux fins pour lesquelles elles ont été collectées.\n- Droit à la limitation du traitement : l'utilisateur peut demander la limitation du traitement de ses données personnelles dans certaines circonstances, par exemple si l'utilisateur conteste l'exactitude de ses données personnelles.\n- Droit à la portabilité des données : l'utilisateur peut recevoir ses données personnelles dans un format structuré, couramment utilisé et lisible par machine, et peut demander leur transmission à un autre responsable de traitement.\n- Droit d'opposition : l'utilisateur peut s'opposer au traitement de ses données personnelles dans certaines circonstances, par exemple si les données sont traitées à des fins de marketing direct.\n\nPour exercer ces droits, l'utilisateur peut contacter notre service clientèle par e-mail à contact@we-escape.de ou par courrier postal à We-Escape GmbH, Am Krebsbach 2g, 79241 Ihringen, Allemagne. Nous répondrons aux demandes dans les délais prévus par la réglementation applicable en matière de protection des données personnelles."
						},
						cookies: {
							title: "Cookies",
							content: "Nous utilisons des cookies sur notre site web pour améliorer l'expérience utilisateur et pour faciliter la réservation et la participation à des parties d'escape game. Les cookies sont des fichiers textes stockés sur l'ordinateur de l'utilisateur et qui permettent de reconnaître l'utilisateur lors de sa prochaine visite sur notre site web.\n\nL'utilisateur peut désactiver l'utilisation de cookies en modifiant les paramètres de son navigateur. Cependant, la désactivation des cookies peut limiter l'accès à certaines fonctionnalités de notre site web."
						},
						dataSecurity: {
							title: "Sécurité des données",
							content: "Nous avons mis en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger les données personnelles collectées contre tout accès non autorisé, toute utilisation abusive ou toute perte ou destruction accidentelle. Ces mesures incluent des mesures de sécurité physique, technique et administrative."
						},
						privacyPolicyChange: {
							title: "Modification de la politique de confidentialité",
							content: "Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment et sans préavis. Les modifications seront publiées sur notre site web et entreront en vigueur dès leur publication."
						},
						contact: {
							title: "Contact",
							content: "Pour toute question concernant la présente politique de confidentialité ou pour exercer vos droits en matière de protection des données personnelles, vous pouvez contacter notre service clientèle par e-mail à contact@we-escape.de ou par courrier postal à We-Escape GmbH, Am Krebsbach 2g, 79241 Ihringen, Allemagne."
						}
					}
				},
			},
		},
	});
