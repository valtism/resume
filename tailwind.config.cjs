/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-end infinite;",
      },
      keyframes: {
        blink: {
          "50%": { visibility: "hidden" },
        },
      },
    },
  },
  plugins: [],
};
