/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/assets/more/15.jpg')",
        'hero-bg':"url('/src/assets/more/3.png')",
        'add-coffee-bg':"url('/src/assets/more/11.png')",
        'coffe-bg':"url('/src/assets/more/1.png')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}