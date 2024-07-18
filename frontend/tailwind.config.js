/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        base1: {
          DEFAULT: '#0066FF',
        },
        base2: {
          DEFAULT: '#A2A2A7',
        },
      },
    },
  },
  plugins: [],
};
