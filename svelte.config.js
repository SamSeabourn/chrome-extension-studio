import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

console.log(process.env.BASE_PATH);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/chrome-extension-studio' : ''
		}
	}
};

export default config;
