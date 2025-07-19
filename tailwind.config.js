/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#D69ADE",
        "gradient-start": "#EC4899",
        "gradient-end": "#153885",
      },
      textShadow: {
        glow: "0 0 8px #FFDFEF",
      },
      screens: {},
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
