/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#379477',
        secondary: '#54BE9C',
        darkGray: '#393939',
        colorGray: '#797979',
        lightGray: '#ECECEC',
        colorYellow: '#FFEC94',
      },
      fontFamily: {
        sora: ["Sora"]
      },
    },
  },
  plugins: [],
}
