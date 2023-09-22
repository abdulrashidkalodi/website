/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#091e3d",
          "200": "#1b1b1e",
          "300": "rgba(27, 27, 30, 0.9)",
        },
        darkslategray: "#3c3c4e",
        slateblue: "#4e5ac3",
        darkorange: "#ff7d00",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        raleway: "Raleway",
        poppins: "Poppins",
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      xs: "12px",
      "61xl": "80px",
      "29xl": "48px",
      "71xl": "90px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
