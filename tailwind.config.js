/** @type {import('tailwindcss').Config} */

const colors = {
	primary: {
		'green-200': ' hsl(148, 38%, 91%)',
		'green-600': ' hsl(169, 82%, 27%)',
		red: '  hsl(0, 66%, 54%)',
	},
	neutral: {
		'grey-500': 'hsl(186, 15%, 59%)',
		'grey-900': 'hsl(169, 82%, 27%)',
		white: 'hsl(0, 0%, 100%)',
	},
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors,
		screens: {
			sm: '375px',
			lg: '1440px',
		},
		fontSize: {
			labels: '16px',
		},
		fontFamily: {
			sans: ['Karla', 'sans-serif'],
		},
	},
	plugins: [],
}
