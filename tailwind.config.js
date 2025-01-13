/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 7px 32px -7px rgb(149 163 184 / 2.25)",
      },
    },
  },
  plugins: [],
};
