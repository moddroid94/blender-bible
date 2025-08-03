import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Sets the default sans-serif font
      },
    },
  },
	plugins: [tailwindcss(), sveltekit()]
});
