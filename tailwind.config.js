/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,jsx,tsx}",
    "./src/./*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poiret One", "sans-serif"],
      },
      
    },
  },
  plugins: [

  ],
}

