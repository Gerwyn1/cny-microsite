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
      'button0' : '300px',
      'button1' : '320px',
      'button1.1': '340px',
      'button2' : '360px',
      'button2.1' : '380px',
      'button3' : '400px',
      'button3.1' : '425px',
      'button4' : '440px',
      'button4.1' : '460px',
      'button5' : '480px',
      'button5.1' : '500px',
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