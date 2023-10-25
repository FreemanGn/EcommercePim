/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './dist/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif']
      },
    },
  },
  plugins: [],
}
