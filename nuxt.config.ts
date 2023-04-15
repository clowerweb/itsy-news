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
})
