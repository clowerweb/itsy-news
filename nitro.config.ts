import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
	routeRules: {
		'/': { static: true },
		'/about': { static: true },
		'/news': { swr: 60 },
	}
});
