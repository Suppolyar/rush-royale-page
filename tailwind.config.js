/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rush-royale": "url('@/assets/rush-royale-bg.jpg')",
        "btn-bg": "url('@/assets/btn-bg.png')",
      },
    },
  },
  plugins: [],
};
