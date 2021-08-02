module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: '#e0e0e0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
