/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1b1c4f",
        "purple-light-bg": "#2e2f70",
        "purple-complimentry": "#5755FE",
      },
      backgroundImage: {
        "login-background": "url('/src/assets/login-bg.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
