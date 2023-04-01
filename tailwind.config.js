/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'logo': ['Archivo', 'sans-serif'],
      'mainFont' : ['Lato', 'sans-serif']
    },
  },
  plugins: [],
}