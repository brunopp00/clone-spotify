/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            'gray-default': '#121212',
            'chip-back': '#232323'
        }
    },
  },
  plugins: [],
}

