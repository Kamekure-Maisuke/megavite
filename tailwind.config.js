module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // font-sansを限定
      'sans': ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
