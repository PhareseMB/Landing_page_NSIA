/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#16166F',
          dark:    '#0E0E52',
          light:   '#1E1E8A',
        },
        gold: {
          DEFAULT: '#C89B2C',
          light:   '#D4AA3A',
          dark:    '#A8821E',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
