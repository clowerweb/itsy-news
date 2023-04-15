import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
	routeRules: {
		'*': { static: true },
	}
});
