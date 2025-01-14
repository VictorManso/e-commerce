/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 1px 10px 4px rgb(200 78 81 / 2.25)",
      },
    },
  },
  plugins: [],
};
