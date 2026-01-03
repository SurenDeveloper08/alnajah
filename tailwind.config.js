/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandTeal: '#00B4CC', // The exact color from your logo
      },
      // Adding support for massive 4K TV screens
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        'tv': '3840px',
      },
    },
  },
  plugins: [],
}