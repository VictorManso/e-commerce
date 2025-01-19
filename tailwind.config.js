/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "8px 10px 10px",
      },
    },
  },
  plugins: [],
};
