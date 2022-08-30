/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      'max-w-screen-1350': '1350px',
      'max-w-screen-1300': '1300px',
    },
    extend: {
      height: {
        '80vh': '80vh',
        '60vh': '60vh',
        '100vh': '100vh',
      },
      colors: {
        'bg-aboutme': '#FCF6F0',
      },
      screens: {
        '2xl': '2560px',
      }
    },
  },
  plugins: [],
}
