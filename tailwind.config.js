/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
  theme: {
    extend: {
     // customize color or seating
     
    },
  },
  plugins: [require("daisyui")],
}

