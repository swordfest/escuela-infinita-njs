/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				idleHead: {
					"0%": {
						transform: "translateX(10%)",
						"animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
						transform: "scale(1)",
						// 'transform-origin': 'left'

					},
					"100%": {
						transform: "translateX(10%)",
						"animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
						transform: "scale(1)",
						// 'transform-origin': 'left'
					},
					"50%": {
						transform: "translateX(0)",
						"animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
						transform: "scale(1.02)",
						// 'transform-origin': 'left'
					},
				},
				// reviewsEnter: {
				// 	'0%' : {
				// 		transform: 'scaleX(0)',
				// 		transform: 'scaleY(0)',
				// 	},
				// 	'50%': {
				// 		transform: 'scaleX(1)',
				// 		transform: 'scaleY(0)',
				// 	},
				// 	'100%': {
				// 		transform: 'scaleX(1)',
				// 		transform: 'scaleY(1)',
				// 	}
				// }
			},
			animation: {
				fadeIn: "fadeIn 500ms ease-in-out",
				idleHead: "idleHead 8000ms linear infinite",
				// reviewsEnter: "reviewsEnter 8000ms linear",
			},
			screens: {
				xs: "360px",
				// => @media (min-width: 360px) { ... }

				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
			fontFamily: {
				// twemoji: ["Twemoji", "sans-serif"],
				// awesome: ["FontAwesome", "sans-serif"],
				flaticon: ["Flaticon", "sans-serif"],
			},
		},
	},
	// plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
