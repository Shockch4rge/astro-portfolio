/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
      		center: true,
    	},
		extend: {
			transitionTimingFunction: {
				"fall-in-smooth": "cubic-bezier(0.07, 1.03, 0.41, 0.94)"
			},

			animation: {
				hover: "hover 2s ease-in-out infinite alternate",
			},

			colors: {
				"body": "hsl(219, 54%, 10%)",
			},
			
			keyframes: {
				hover: {
					"from": {
						transform: "translateY(0px)",
					},

					"to": {
						transform: "translateY(-3px)",
					},
				},
            },
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}
