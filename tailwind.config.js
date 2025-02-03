/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,html}", "/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
