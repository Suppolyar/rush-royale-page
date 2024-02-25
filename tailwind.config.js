/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rush-royale": "url('./src/assets/rush-royale-bg.jpg')",
        "union-frame": "url('./src/assets/union-frame.svg')",
        frame: "url('./src/assets/frame.svg')",
        btn: "url('./src/assets/btn-bg.png')",
      },
    },
  },
  plugins: [],
};
