export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx,css}",
		"./src/assets/**/*.{js,jsx,ts,tsx,css}",
	],
	theme: {
		extend: {
			color: {
				'green-razer': '#00ff00',
			},
			fontFamily: {
				Orbitron: ['Orbitron', 'sans-serif'],
				Prototype: ['Prototype', 'sans-serif']
			},
		},
	},
	plugins: [],
};