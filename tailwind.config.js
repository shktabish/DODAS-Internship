/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Michroma': ['Michroma', 'sans-serif'],
        'Nico': ['Nico Moji', 'sans-serif'],
        'Gothic': ['Dela Gothic One', 'sans-serif'],
        'Khyay': ['Khyay', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Goldman': ['Goldman', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Sofia': ['Sofia', 'sans-serif'],
      },
      backgroundImage: {
        'discover-card-pattern': "url('./discover.svg')"
      },
      animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
}