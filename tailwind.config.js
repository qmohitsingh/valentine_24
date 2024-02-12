/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        'valentine-red': '#ff1e56',
        'valentine-pink': '#ff49db',
        'soft-pink': '#f7b7d2',
        'dark-pink': '#d81159',
        'space-pink': '#ff77e9',
        'dark-space': '#340034',
        'star-white': '#ffffff',
      },
      // Custom typography
      fontFamily: {
        'body': ['Open Sans', 'sans-serif'],
        'display': ['Merriweather', 'serif'],
      },
      // Any other theme extensions
    },
  },
  plugins: [],
}
