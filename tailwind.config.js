/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
            colors: {
                paper: '#fdf6e3',
                ink: '#22223b',
                accent: '#f6bd60',
                highlight: '#b5ead7',
            },
        fontFamily: {
          handwriting: ['"Architects Daughter"', 'cursive'],
          body: ['Nunito', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  