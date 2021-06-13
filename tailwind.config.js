module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '62-5': '62.5%',
        '125': '125%'
      }
    },
    maxWidth: {
      '1/2': '50%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
