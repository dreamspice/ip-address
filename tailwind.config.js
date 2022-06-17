/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('/images/pattern-bg.png')"
      },
        colors: {
          'very-dark-grey': '#2b2b2b',
          'dark-gray': '#969696',
        }
    },
  },
  plugins: [],
}
