/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        'custom': '30px' 
      },
      letterSpacing: {
        'custom-neg': '-0.02em' 
      }
    },
  },
  plugins: [],
}
