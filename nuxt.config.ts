// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
	],
	app: {
		head: {
			title: 'Itsy News',
			meta: [
				{ name: 'description', content: 'Woohoo!' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
			]
		}
	},
	routeRules: {
		// Homepage: ISR, revalidate on new deployment or Vercel's default
		'/': { isr: true },

		// News index page: ISR
		'/news': { isr: true },

		// News category pages: ISR (e.g., /news/technology)
		'/news/:category': { isr: true },

		// Article pages: ISR (e.g., /news/technology/my-awesome-article)
		'/news/:category/:slug': { isr: true },
	},
})
