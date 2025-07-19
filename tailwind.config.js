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
        "iphone-se": "375px",
        "iphone-xr": "414px",
        "iphone-12pro": "390px",
        "iphone-14promax": "430px",
        "pixel-7": "412px",
        "galaxy-s8plus": "360px",
        "galaxy-ultra": "412px",
        "ipad-mini": "768px",
        "ipad-air": "820px",
        "ipad-pro": "1024px",
        "surface-pro7": "912px",
        "surface-duo": "540px",
        "galaxy-zfold5": "904px",
        "zenbook-fold": "1920px",
        1350: "1350px",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
