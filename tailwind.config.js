/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
      colors: {
        blue: "#2E3A8C",
        green: "#3B755F",
        beige: "#F2EBDB",
      },
    },
  },
  plugins: [],
};
