/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,jsx,tsx,css}",
    "./src/components/*.{html,js,jsx,tsx,css}",
    "./src/components/assets/*.{jepg,jpg,png}",
    "./src/components/Landing/*.{html,js,jsx,tsx,css}",
    "./src/components/Reusables/*.{html,js,jsx,tsx,css}",
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

