import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
	routeRules: {
		'*': { static: true },
		'/news': { swr: 60 },
		'/news/**': { static: true },
	}
});
