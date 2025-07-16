/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#D69ADE",
      },
      textShadow: {
        glow: "0 0 8px #FFDFEF",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
