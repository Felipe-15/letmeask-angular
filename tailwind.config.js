/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
        roboto: ["Roboto", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          500: "#835AFD",
          400: "#6F4BD8",
        },
        danger: {
          500: "#E73F5D",
          400: "#D73754",
        },
        gray: {
          600: "#737380",
          500: "#A8A8B3",
          400: "#DBDCDD",
        },
      },
    },
  },
  plugins: [],
};
