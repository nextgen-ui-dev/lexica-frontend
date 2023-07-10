/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        hind: ["var(--font-hind)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#ecf1ff",
          100: "#dde4ff",
          200: "#c2ceff",
          300: "#9cacff",
          400: "#7580ff",
          500: "#5152ff",
          600: "#4436f5",
          700: "#3a2ad8",
          800: "#2f25ae",
          900: "#2b2689",
          950: "#1b1650",
        },
        backdrop: "#f8f8f8"
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
