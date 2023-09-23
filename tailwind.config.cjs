const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#443825',
				secondary: '#ffffff',
				accent: '#67584a',
				background: '#f1ead2',
				text: '#383838'
			},
			fontFamily: {
				sans: ['Assistant', 'sans-serif', ...defaultTheme.fontFamily.sans],
				serif: ['Alike', 'serif', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
