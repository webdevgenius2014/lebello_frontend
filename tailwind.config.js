import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
// import flowbite from '@flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      
        fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            graphik: ['GraphikRegular', 'sans-serif'],
            graphikLight: ['GraphikLight', 'sans-serif'],
            graphikMedium: ['GraphikMedium', 'sans-serif'],
        },
        screens: {
            '2xsm': '375px',
            xsm: '425px',
            md2: '880px', 
            '3xl': '2000px',
            ...defaultTheme.screens,
          },
          colors: {
            ...colors,
            bodydark1: '#1d2327',
            bodydark2: '#2c3338',            
            textColor1: '#72aee6',
            textColor2: '#2271b1',
            textColorBlack: '#333',
            Black666:'#666',
            
            navListBg: '#0e0e0ec9',
            borderColor:'#8c8f94',
            green : '#4dc45c',
            paritGreen: '#7bd924',
            blue : '#3399ff',
            darkTrasparent :'#0e0e0e89',
            orange:'#d98c3a',
            
          },
          gridTemplateColumns: {
            'dynamic': 'repeat(auto-fit, max-content)',
            'dynamic-md': 'repeat(auto-fill, minmax(130px, 1fr))', // Example for medium screens
          },
    },
},

  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}