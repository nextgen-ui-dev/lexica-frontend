/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#ecf1ff',
          '100': '#dde4ff',
          '200': '#c2ceff',
          '300': '#9cacff',
          '400': '#7580ff',
          '500': '#5152ff',
          '600': '#4436f5',
          '700': '#3a2ad8',
          '800': '#2f25ae',
          '900': '#2b2689',
          '950': '#1b1650',
        },
      }
    },
  },
  plugins: [],
}
