// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
	colorMode: {
		preference: 'dark', // default value of the color mode
		fallback: 'dark', // fallback value if the preference can't be detected
		classSuffix: '', // optional, default value: ''
		storageKey: 'nuxt-color-mode' // optional, default value: 'color-mode'
	},
	app: {
		head: {
			title: 'Lucia Love Followage',
			htmlAttrs: { lang: 'en' },
			link: [
				{ rel: 'canonical', href: 'https://love.mishu.dev' },
				{ rel: 'icon', href: '/owo.webp' }
			],
			meta: [
				{
					'http-equiv': 'Cache-Control',
					content: '1y'
				},
				{ 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
				{ 'http-equiv': 'Expires', content: '1y' },
				{ 'http-equiv': 'Pragma', content: '1y' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: 'Lucía Álvarez' },
				{ name: 'application-name', content: 'Lucía Álvarez' },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'theme-color', content: '#C4EEFF' },
				{
					name: 'description',
					content: 'Lucia Love Followage'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, maximum-scale=5'
				},
				{ name: 'designer', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: 'https://love.mishu.dev' },
				{ name: 'msapplication-config', content: '/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#C4EEFF' },
				{ name: 'owner', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: 'mishudiscord@gmail.com' },
				{ name: 'revisit-after', content: '7 days' },
				{
					name: 'robots',
					content: 'archive,follow,imageindex,index,odp,snippet,translate'
				},
				{ name: 'shortlink', content: 'https://love.mishu.dev' },
				{
					name: 'subject',
					content: 'Lucia Love Followage'
				},
				{
					name: 'summary',
					content: 'Lucia Love Followage.'
				},
				{ name: 'url', content: 'https://love.mishu.dev' },
				{
					property: 'og:description',
					content: 'Lucia Love Followage'
				},
				{ property: 'og:email', content: 'mishudiscord@gmail.com' },
				{ property: 'og:locale', content: 'en_US' },
				{ property: 'og:site_name', content: 'Lucía Álvarez' },
				{ property: 'og:title', content: 'Lucia Love Followage' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://love.mishu.dev' },
				{ property: 'og:image', content: '/uwu.png' }
			]
		}
	}
});
