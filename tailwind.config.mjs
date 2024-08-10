import starlightPlugin from '@astrojs/starlight-tailwind';
import flowbitePlugin from 'flowbite/plugin'
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: colors.pink,
			}
		},
	},
	plugins: [starlightPlugin(), flowbitePlugin],
}
