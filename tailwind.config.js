/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e', // Dark blue color from the design
        secondary: '#0d47a1', // Secondary blue color
        accent: '#f44336', // Red accent color
        'navy-900': '#0a2463', // Navy blue color for the "GET TO KNOW QUEZON CITY" section
      },
    },
  },
  plugins: [],
}
