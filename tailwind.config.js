const customStyles = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', customStyles.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
