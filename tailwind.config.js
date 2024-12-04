/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Include all HTML files in the root
    './js/**/*.js', // Include JS files inside the "js" folder (or wherever your scripts are)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
