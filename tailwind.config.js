module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      maxWidth: {
        '1/2': '50%'
      },
      spacing: {
        '62-5': '62.5%',
        '125': '125%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
