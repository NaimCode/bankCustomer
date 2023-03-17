/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3bbec4',
        secondary: '#fd9b3d',
        accent: '#e3e2f4',
        background:'#f5f4f7'

      },
      fontFamily: {
        'title':['Edu NSW ACT Foundation', 'serif'],
        'body':[ 'Josefin Sans', 'sans-serif'],
        'special':[ 'Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
