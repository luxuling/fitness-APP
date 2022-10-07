/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#e9edf1",
        "secondary": "#3d73dd",
        "line": "#ffd841",
        "text":"#0e2045"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
