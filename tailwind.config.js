/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors : {
        primary : {
          dark : '#3a3b3c',
          light : '#1e81b0',
          lighter : '#44AEDF',
          lighten : '#AFDCF1'
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
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        scale: "wiggle 500ms ease-in-out", 
      }
    },
  },
  plugins: [],
}
