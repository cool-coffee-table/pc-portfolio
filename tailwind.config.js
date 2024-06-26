/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f8f8f8",
        lightBlack: "#424242",
        darkBlack: "#1c1c1c",
        black: "#242424",
        dull: "#dddddd",
      }
    },
  },
  plugins: [],
}