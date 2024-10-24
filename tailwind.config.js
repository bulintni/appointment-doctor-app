/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-green': '#8ED6ADFF',
        'text-green-light': '#60B886FF',
      },
    },
  },
  plugins: [],
}

