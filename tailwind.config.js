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
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out',
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