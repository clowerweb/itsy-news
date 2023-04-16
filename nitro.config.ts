import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
	preset: 'netlify-builder',
	routeRules: {
		'/': { static: true },
		'/about': { static: true },
		'/news': { swr: 60 },
	}
});
