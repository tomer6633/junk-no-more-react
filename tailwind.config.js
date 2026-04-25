export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { oswald: ['Oswald', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
      colors: {
        brand: {
          primary: '#1C4A2E',
          accent: '#27AE60',
          light: '#EAFAF1',
          dark: '#0D2318',
        }
      }
    }
  },
  plugins: []
}
