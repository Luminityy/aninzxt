/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F0E0E",
          light: "#5F5E5E",
          hover: "#1F1F1F",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          light: "#D9D9D9",
        },
        accent: {
          DEFAULT: "#FBBF24",
          light: "#FDE68A",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.3xl") },
        h2: { fontSize: theme("fontSize.2xl") },
        h3: { fontSize: theme("fontSize.xl") }
      });
    }),
  ],
};
