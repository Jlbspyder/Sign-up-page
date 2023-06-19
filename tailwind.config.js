/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '967px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkSlateGrey: 'hsl(234, 29%, 20%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)',
        tomato: 'hsl(4, 100%, 67%)',
        error: 'hsl(3, 71%, 95%)'
      }
    },
  },
  plugins: [],
}

