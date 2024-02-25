import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
      },
      fontFamily: {
        sans: ["Google Sans", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("flowbite/plugin")],
};
