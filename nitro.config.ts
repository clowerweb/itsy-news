import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
	routeRules: {
		'*': { static: true },
		'/news/**': { static: true },
		'/news': { swr: 60 },
	}
});
