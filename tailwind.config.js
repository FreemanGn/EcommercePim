/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './dist/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif']
      },
    },
  },
  plugins: [],
}
