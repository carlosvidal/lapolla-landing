/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f1729',
        accent: '#22c55e',
        'background-light': '#f6f7f8',
        'background-dark': '#14171e',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
