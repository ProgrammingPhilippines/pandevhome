/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			// see /App.css for reference
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				accent: "hsl(var(--accent))",
				primaryButton: "hsl(var(--primary-button-color))",
			},
		},
	},
	plugins: [],
};
