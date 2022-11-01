/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        base: {
          card: '#F3F2F2',
          input: '#EDEDED',
          button: '#E6E5E5',
          hover: '#D7D5D5',
          label: '#8D8686',
          text: '#574F4D',
          subtitle: '#403937',
          title: '#272221',
        },
        primary: {
          light: '#EBE5F9',
          DEFAULT: '#8047F8',
          dark: '#4B2995',
        },
        secondary: {
          light: '#F1E9C9',
          DEFAULT: '#DBAC2C',
          dark: '#C47F17',
        },
      },
    },
  },
  plugins: [],
}
