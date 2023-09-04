const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#f5efcc',
				secondary: '#bff3e6',
				accent: '#d41d6c',
				background: '#f6f6f6',
				text: '#151515'
			},
			fontFamily: {
				sans: ['Assistant', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
