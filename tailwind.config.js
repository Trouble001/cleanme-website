module.exports = {
  content: ['./pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'intro-image': "url('/img/intro.jpg')",
      }
    },
  },
  plugins: [],
}