/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(0rem)', opacity: 0},
          // '50%': { transform: 'translateY(20rem)' },
          // '75%': { transform: 'translateY(18rem)' },
          '100%': { transform: 'translateY(20rem)', opacity:0.9}
        },
        slidein: {
          '0%': {transform: 'translateX(5rem)', opacity: 0},
          // '50': {transform: 'translateX(10rem)', opacity: 0.4},
          '100%': {transform: 'translateX(0rem)', opacity: 1}
        },
        spin_270: {
          '0%': {transform: 'rotate(0deg)'},
          // '50': {transform: 'translateX(10rem)', opacity: 0.4},
          '100%': {transform: 'rotate(270deg)', opacity: 1}
        }
      },
      animation: {
        fall: 'fall 1s',
        slidein: 'slidein 1.5s',
        spin_270: 'spin_270 3s linear'
      }
    },
  },
  plugins: [],
}

