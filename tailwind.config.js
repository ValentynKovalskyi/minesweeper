/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,html}",
  ],
  theme: {
    extend: {
      "borderWidth": {
        "1": "1px",
        "5": "5px"
      }
    },
  },
  plugins: [],
}