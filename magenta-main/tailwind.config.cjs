/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			maxWidth: {
			'3/4': '75%',
		  }
		 
		},
		minHeight: {
			'3/4': '75%',
			'1/2': '50%',
			"1/4" : '25%',
		  }
	},
	plugins: [
		require('flowbite/plugin')
		
	],
}
