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
    keyframes:{
      'on-view-right':{
        '0%':{
          opacity:0,
          transform:'translateX(100px)'
        },
        '100%':{opacity:1,
          transform:'translateX(0px)'}

      },
      'on-view-left':{
        '0%':{
          opacity:0,
          transform:'translateX(-100px)'
        },
        '100%':{opacity:1,
          transform:'translateX(0px)'}

      },
      'on-view-up':{
        '0%':{
          opacity:0,
          transform:'translateY(-100px)'
        },
        '100%':{opacity:1,
          transform:'translateY(0px)'}

      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
