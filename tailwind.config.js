/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        sm:'8px',
        md:'16px',
        lg:'24px',
        xl:'48px',
        cuerpo:'64px',
      },
    },
  },
  plugins: [require ('tailwindcss-neumorphism')],
}

