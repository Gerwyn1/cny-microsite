/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        easeIn: {
          '0%': { opacity: '0' },
          '10%': { opacity: '0' },
          '20%': { opacity: '0' },
          '30%': { opacity: '0' },
          '45%': { opacity: '.3' },
          '50%': { opacity: '.6' },
          '60%': { opacity: '.7' },
          '70%': { opacity: '1' },
        },
      },
      animation: {
        'easeInImg': 'easeIn 2s linear',
      },
      backgroundImage: {
        'lion-cny': "url('/images/lion-cny.webp')",
        'lion-cny-2': "url('/images/lion-cny-2.webp')",
        'lion-cny-3': "url('/images/full-with-text.webp')",
        'clouds': "url('/animation/clouds.gif')",
      }
    },
    screens: {
      'xxs' : '300px',
      'xs' : '375px',
      'sm': '525px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'common': '1366px',
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
      "5xl" : "2560px",
      "6xl" : "3840px"
    },
  },
  plugins: [],
}