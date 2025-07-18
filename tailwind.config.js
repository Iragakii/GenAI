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
      screens: {
        ipadair: "1180px",
        "iphone-se": {
          raw: "(device-width: 375px) and (device-height: 667px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
