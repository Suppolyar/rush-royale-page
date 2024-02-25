/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rush-royale": "url('./src/assets/rush-royale-bg.jpg')",
      },
    },
  },
  plugins: [],
};
