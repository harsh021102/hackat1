
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-black': '#26282B',
        'light-black': '#353941',
        'dark-blue': '#5F85DB',
        'light-blue': '#90B8F8',
      }
    },
  },
  plugins: [],
}
