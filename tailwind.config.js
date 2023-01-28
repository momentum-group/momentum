/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
        colors: {
            'primary': '#5D9948'
        }
    },
  },
  plugins: [],
}