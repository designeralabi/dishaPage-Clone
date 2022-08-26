/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "disha-orange": "#FB8800",
        "disha-orange-light": "#FFB800",
        "disha-orange-dark": "#FF3900",
        "disha-hover": "#cf2e2e",
        "disha-grey": "rgba(255, 255, 255, 0.6)",
        "disha-bg-grey": "#F7F7F7",
        "disha-text-grey": "#D9D9D9",
      },
      size: {
        "text-heading": "3.5rem",
      },
    },
  },
  plugins: [],
};
