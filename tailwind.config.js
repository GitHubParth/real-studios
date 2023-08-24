/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				PlayFair: ['Playfair Display', 'sans-serif'],
			},
			colors: {
				primary: "#0c3726",
				secondary: "#ff871d",
				lightGreen: '#D4E8DB',
			},
			backgroundColor: {
				primary: "#0c3726",
				secondary: "#ff871d",
				lightGreen: '#D4E8DB',
				halfTransparent: "rgba(0,0,0,0.5)",
			},
			dropShadow: {
				'secondary': '0 0 10px #ff871d',
				'10': '0 0 6px rgba(0,0,0,0.3)',
			},
			boxShadow: {
				'green-2xl': '0 0 40px #B4ECC7',
			},
			height: {
				68: '17rem'
			},
		},
	},
	plugins: [],
};