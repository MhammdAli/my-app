/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          dark : '#3a3b3c',
          light : '#1e81b0',
          lighter : '#9F97FE'
        },
        textColor : { 
          dark : "#ccc", 
          light : '#707070' 
        },
        sideBar : {
          dark : '#242526',
          light : '#fff'
        },
        bodyColor : {
          dark : '#18191a',
          light : '#E4E9F7'
        },
        toggle : {
          dark : '#fff',
          light : '#1e81b0'
        },
      }
    },
  },
  plugins: [],
}
