import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import colors from 'tailwindcss/colors';

// import flowbite from '@flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        ...colors,
          green : '#4dc45c',
          blue : '#3399ff',
          darkTrasparent :'#333333E6',
          orange:'#d98c37',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'h3Size':'36px',
      },

      fontFamily: {
        h3Font: ['GraphikLight'],
        grapLight: ['GraphikLight'],
        grapMedium: ['GraphikMedium'],
        grapMed: ['GraphikMedium'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        animation: {
          'bounce-short': 'bounce 1s ease-in-out 5'
        },
      }
     
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}