/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors:{
        headingColor:"#FF0000"
      }
    },
  },
  plugins: [],
}