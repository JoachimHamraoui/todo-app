/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat', 'sans-serif'], // Add fallback fonts
      },
    },
  },
  plugins: [],
};
