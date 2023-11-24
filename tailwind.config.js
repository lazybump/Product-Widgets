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
        lightGreen: "#AFC6BD80",
        lightGray: "#F9F9F9",
        mediumGray: "#B0B0B0",
        darkGray: "#212121",
      },
    },
  },
  plugins: [],
};
