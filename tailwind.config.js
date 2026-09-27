const inputStyles = `w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black`;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      shake: 'shake 0.3s ease-in-out',
    },
    keyframes: {
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-4px)' },
        '75%': { transform: 'translateX(4px)' },
      },
    },
  },
},
  plugins: [],
}
