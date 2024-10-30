/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondaryColor: '#05B6C7',
      },
      fontFamily:{
        inter:['Inter', 'sans-serif'],
        roboto:["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [require('daisyui'),],
}

