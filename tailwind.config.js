/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
        unbounded: ['Unbounded', 'serif']
      },
        colors: {
            'primary': '#5D9948',
            'mango': '#FFBB48'
        }
    },
  },
  plugins: [],
}