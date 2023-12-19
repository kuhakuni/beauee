/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FDCEDF",
				secondary: "#B3CEE2",
				pink: "#FD4E5D",
			},
		},
	},
	plugins: [],
};
