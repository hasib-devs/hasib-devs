
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: '#1e2a3a',
        black: '#111821',
        primary: '#059669',
        'primary-dark': '#065F46',
        'gray-10': '#fafafa'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
