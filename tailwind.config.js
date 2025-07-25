/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,jsx,tsx}",
    "./src/components/*.{html,js,jsx,tsx}",
    "./src/components/Landing/*.{html,js,jsx,tsx}",
    "./src/components/Reusables/*.{html,js,jsx,tsx}",
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

