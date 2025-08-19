/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#0f172a",   // dark background
          neon: "#38bdf8",   // neon highlight
        },
      },
    },
  },
  plugins: [],
};
