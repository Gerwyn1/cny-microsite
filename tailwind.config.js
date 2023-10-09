/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lion-cny': "url('/images/lion-cny.webp')",
      }
    },
    screens: {
      'button0' : '300px',
      'button1' : '320px',
      'button1.1': '340px',
      'button2' : '360px',
      'button2.1' : '380px',
      'button3' : '400px',
      'button3.1' : '420px',
      'button4' : '440px',
      'xs' : '375px',
      'sm': '525px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl' : '2500px',
      '4xl' : '2600px',
      '5xl' : '2700px',
    },
  },
  plugins: [],
}