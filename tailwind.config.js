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
        'discover-card-pattern': "url('./src/assests/discover.svg')"
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}