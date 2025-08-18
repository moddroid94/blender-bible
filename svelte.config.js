import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({}),
		prerender: {
			handleHttpError: 'ignore',
		}
	}
};

export default config;
